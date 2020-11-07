`use strict`;

const { CouchDBWallet, Gateway } = require('fabric-network');
var path = require('path');

async function send(type, user, func, args, admin, res){
    try {
        let ccpPath = '';
        let url = ''
        switch(user[1]){
            case `SalesOrg`:
                url = "http://knucoin:knucoin@localhost:9984"
                ccpPath = path.resolve(__dirname, '../../network/ca file', 'connection_sales.json')
                break;
            case 'CustomerOrg':
                url = "http://knucoin:knucoin@localhost:10984"
                ccpPath = path.resolve(__dirname, '../../network/ca file', 'connection_customer.json')
                break;
        }

        const wallet = new CouchDBWallet({"url":url})
        
        const userExists = await wallet.exists(user[0]);
        if (!userExists) {
            console.log(`sdk :An identity for the client user(id:${user[0]}) of ${user[1]} doesn't exists in the wallet`);
            console.log('sdk :Run the registUser.js application before retrying');
            return;
        }
        if(admin){
            const adminExists = await wallet.exists(user[2]);
            if (!adminExists) {
                console.log(`register: An identity for the admin user(id:${user[2]}) of ${user[1]} doesn't exists in the wallet`);
                console.log('register: Run the enrollAdmin.js application before retrying');
                res.send('fail')
                return;
            }
            const gateway = new Gateway();
            await gateway.connect(ccpPath, { wallet, identity: user[2], discovery: { enabled: true, asLocalhost: true } });
            const ca = gateway.getClient().getCertificateAuthority();
            const adminIdentity = gateway.getCurrentIdentity();
            const secret = await ca.register({ affiliation: 'org1.department1', enrollmentID: user[0], role: 'client' }, adminIdentity);
            const enrollment = await ca.enroll({ enrollmentID: user[0], enrollmentSecret: secret });
            const userIdentity = X509WalletMixin.createIdentity(user[1], enrollment.certificate, enrollment.key.toBytes());
            await wallet.import(user[0], userIdentity);
            // Excute ChainCode to init Wallet
            const network = await gateway.getNetwork('channelsales1');
            const contract = network.getContract('knucoin-cc3');
            await contract.submitTransaction('initWallet', ...[user[0]])
            await gateway.disconnect();
            console.log(`register: Successfully registered and enrolled client user(id:${args[0]}) of ${args[2]} and imported it into the wallet`);
            res.send('success')
        }
        else {
            const gateway = new Gateway();
            await gateway.connect(ccpPath, { wallet, identity: user[0], discovery: { enabled: true, asLocalhost: true } });
            const network = await gateway.getNetwork('channelsales1');
            const contract = network.getContract('knucoin-cc3');
            // type이 true면 invoke false면 query
            if (type) {
                //func은 transaction 이름 
                //args는 그 transaction이 가지는 인자들
                await contract.submitTransaction(func, ...args);
                console.log('sdk : Transaction has benn submitted');
                await gateway.disconnect();
                res.send('success');
            } else {
                const result = await contract.evaluateTransaction(func, ...args);
                console.log(`sdk :Transaction has been evaluated, result is ${result.toString()}`);
                res.send(result.toString());
            }
        }
    } catch (error) {
        console.error(`sdk :Failed to submit transaction: ${error}`);
        res.send(`Failed to submit transaction: ${error}`);
    }
}

module.exports = {
    send:send
}