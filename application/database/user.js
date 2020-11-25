module.exports =(sequelize, DataTypes) => {
  return sequelize.define('User', {
    kakao_id: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
    org: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    pw: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    customer: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    sales: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
  }, {
      timestamps: false,
    });
  }