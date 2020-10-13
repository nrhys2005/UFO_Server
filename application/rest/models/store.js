module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Store', {
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true,
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