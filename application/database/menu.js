module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Menu', {
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        img_url: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
    }, {
        timestamps: false,
    });
}