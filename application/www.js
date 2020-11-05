const app = require('./app/app');
const db = require('./database').sequelize
const config = require('./bin/config').web.development

const port = config.port

app.listen(port, () => {
    // console.log(`Running on http://${HOST}:${PORT}`);

    // DB 연결
    db.sync().then(() => {
        console.log("DB connect success!!");
    })
});
