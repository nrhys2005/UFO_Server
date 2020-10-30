module.exports = (sequelize, DataTypes) => {
    //이름 이미지 설명 메뉴
    return sequelize.define('Store', {
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true,
        },
        img_url:{
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        desc:{
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        latitude: {
            type: DataTypes.FLOAT(20),
            allowNull: true,
        },
        longitude: {
            type: DataTypes.FLOAT(20),
            allowNull: true,
        }
    }, {
        timestamps: false,
    });
}