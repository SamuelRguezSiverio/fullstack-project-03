const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const Brand = sequelize.define(
  "brands",
  {
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Brand;
