const database = require("../database/database")
const Sequelize = require("sequelize")
const Seller = require("./Seller")

const Vehicle = database.define("vehicle", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    model: {
        type: Sequelize.STRING,
        allowNull: false
    },

    price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }

})

Vehicle.belongsTo(Seller,{ 
    foreignKey: {
        name: 'sellerId'
    }
})

module.exports = Vehicle