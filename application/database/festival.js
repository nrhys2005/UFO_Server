module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Festival', {
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        img_url: {
            type: DataTypes.STRING(50),
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
        desc: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
    }, {
        timestamps: false,
    });
}