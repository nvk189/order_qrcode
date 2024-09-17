"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.Order_Detail, {
        foreignKey: "id_pr",
        as: "product",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "product",
      timestamps: true,
    }
  );
  return Product;
};
