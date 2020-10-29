module.exports =(sequelize, DataTypes) => {
  return sequelize.define('User', {
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
    pw: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    }
  }, {
      timestamps: false,
    });
  }