module.exports = (sequelize, DataTypes) => {
    //이름 이미지 설명 메뉴
    return sequelize.define('Store', {
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        img_url:{
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        desc:{
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        start_time: {
            type: DataTypes.DATE(),
            allowNull: true,
        },
        end_time: {
            type: DataTypes.DATE(),
            allowNull: true,
        },
        latitude: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        longitude: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        festival_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        timestamps: false,
    });
}