const app = require('./app/app'),
    db = require('./database'),
    config = require('./bin/config').web.development;

const port = config.port
const host = config.host
app.listen(port, host, () => {
    // console.log(`Running on http://${HOST}:${PORT}`);

    // DB 연결
    db.sequelize.sync({ force: true }).then(() => {
        console.log("DB connect success!!");

        db.Store.bulkCreate([
            {
                "name": "store_1",
                "desc": "the First Store",
                "img_url": "boothic1",
                "latitude": "36.3779793",
                "longitude": "128.148043",
                "festival": "1"
            },
            {
                "name": "store_2",
                "desc": "the Second Store",
                "img_url": "boothic1",
                "latitude": "36.3779793",
                "longitude": "128.148043",
                "festival": "1"
            },
            {
                "name": "store_3",
                "desc": "the Third Store",
                "img_url": "boothic1",
                "latitude": "36.3779793",
                "longitude": "128.148043",
                "festival": "1"
            },
            {
                "name": "store_1",
                "desc": "the First Store",
                "img_url": "boothic1",
                "latitude": "36.3779793",
                "longitude": "128.148043",
                "festival": "2"
            },
            {
                "name": "store_2",
                "desc": "the Second Store",
                "img_url": "boothic1",
                "latitude": "36.3779793",
                "longitude": "128.148043",
                "festival": "2"
            }
        ]).then(() => {

            db.Menu.bulkCreate([
                {
                    "name": "menu_1",
                    "price": 15000,
                    "img_url": "boothic1",
                    "store_id": "4"
                },
                {
                    "name": "menu_2",
                    "price": 20000,
                    "img_url": "boothic1",
                    "store_id": "4"
                },
                {
                    "name": "menu_3",
                    "price": 5000,
                    "img_url": "boothic1",
                    "store_id": "4"
                },
                {
                    "name": "menu_1",
                    "price": 20000,
                    "img_url": "boothic1",
                    "store_id": "5"
                },
                {
                    "name": "menu_1",
                    "price": 15000,
                    "img_url": "boothic1",
                    "store_id": "5"
                },
                {
                    "name": "menu_3",
                    "price": 50000,
                    "img_url": "boothic1",
                    "store_id": "5"
                }
            ]).then(() => {
                console.log("Done make Test data")
            })

            console.log("Done make Test data")
        })
    })
});
