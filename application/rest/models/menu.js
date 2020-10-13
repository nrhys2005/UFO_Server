module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Menu', {
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true,
        },
        price: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
        path: {
            type: DataTypes.STRING(50),
            allowNull: true,
        }
    }, {
        timestamps: false,
    });
}