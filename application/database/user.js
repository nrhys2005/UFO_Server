module.exports =(sequelize, DataTypes) => {
  return sequelize.define('User', {
    kakao_id: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
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