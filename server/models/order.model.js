"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.hasOne(models.Table, {
        foreignKey: "id_tb",
        as: "table_order",
      });
      Order.belongsTo(models.Customer, {
        foreignKey: "id_cs",
        as: "order_cs",
      });
      Order.belongsTo(models.User, {
        foreignKey: "id_user",
        as: "user_order",
      });
      Order.hasMany(models.Order_Detail, {
        foreignKey: "id_order",
        as: "order_detail",
      });
    }
  }
  Order.init(
    {
      id_tb: DataTypes.INTEGER,
      id_cs: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER,
      total: DataTypes.DECIMAL,
      quantity: DataTypes.INTEGER,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "order",
      timestamps: true,
    }
  );
  return Order;
};
