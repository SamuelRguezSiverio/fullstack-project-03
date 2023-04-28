const { sequelize } = require('../../database')
const { DataTypes } = require('sequelize')

const Brand = sequelize.define(
  'brands',
  {
    brand_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  { timestamps: false }
)

module.exports = Brand
