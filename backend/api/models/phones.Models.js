const { sequelize } = require('../../database')
const { DataTypes } = require('sequelize')

const Phones = sequelize.define('phones',
    {
        modelo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        memoria: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pantalla: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dimensiones: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        procesador: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        camara_frontal: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        camara: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        peso: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bateria: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        extras: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        precio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        topSales: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        }
    },
    { timestamps: false }
    )

module.exports = Phones