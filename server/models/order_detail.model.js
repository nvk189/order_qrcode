"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Order_Detail extends Model {
    static associate(models) {
      Order_Detail.belongsTo(models.Order, {
        foreignKey: "id_order",
        as: "detail_order",
      });
      Order_Detail.belongsTo(models.Product, {
        foreignKey: "id_pr",
        as: " pr_od",
      });
    }
  }

  Order_Detail.init(
    {
      id_order: DataTypes.INTEGER,
      id_pr: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      price: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Order_Detail",
      tableName: "order_detail",
      timestamps: true,
    }
  );

  return Order_Detail;
};
