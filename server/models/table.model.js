"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Table.hasMany(models.Order, {
        foreignKey: "id_tb",
        as: "table_order",
      });
    }
  }
  Table.init(
    {
      number_tb: DataTypes.STRING,
      capacity: DataTypes.STRING,
      role: DataTypes.STRING,
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Table",
      tableName: "table",
      timestamps: true,
    }
  );
  return Table;
};
