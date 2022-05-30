const database = require("../database/database")
const Sequelize = require("sequelize")


const Seller = database.define("seller", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Seller