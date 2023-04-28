const { sequelize } = require('../../database')
const { DataTypes } = require('sequelize')

const Phones = sequelize.define('phones',
    {
        id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
        marca: {
            type: DataTypes.STRING,
            alloNull: false,
        },
        modelo: {
            type: DataTypes.STRING,
            alloNull: false,
        },
        color: {
            type: DataTypes.STRING,
            alloNull: false,
        },
        memoria: {
            type: DataTypes.STRING,
            alloNull: false,
        },
        pantalla: {
            type: DataTypes.STRING,
            alloNull: false,
        },
        dimensiones: {
            type: DataTypes.STRING,
            alloNull: false,
        },
        procesador: {
            type: DataTypes.STRING,
            alloNull: false,
        },
        camara_frontal: {
            type: DataTypes.STRING,
            alloNull: false,
        },
        camara: {
            type: DataTypes.TEXT,
            alloNull: false,
        },
        peso: {
            type: DataTypes.STRING,
            alloNull: false,
        },
        bateria: {
            type: DataTypes.STRING,
            alloNull: false,
        },
        extras: {
            type: DataTypes.TEXT,
            alloNull: true,
        },
        precio: {
            type: DataTypes.STRING,
            alloNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            alloNull: false,
        },
    },
    { timestamps: false }
    )

module.exports = Phones