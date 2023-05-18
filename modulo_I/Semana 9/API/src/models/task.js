const connection = require('../database');
const Sequelize = require('sequelize')
const User = require('./user')

// Aqui estamos criando a tabela que vai para o SGBD
const Task = connection.define('task', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    user_id: {
        type: Sequelize.INTEGER
    }
})

//aqui vamos fazer uma associação, ou seja, vamos pegar o id da tabela ususário e injetar na tabela tasks
//para sabermos esta informação e deixar associada com a tarefa
Task.belongsTo(User)//para chamar este comando, temos que lá em cima no começo do código, importar o User
//para passar o id mas com outro nome da coluna, basta dentro da chaver passar outro parâmetro: {foreignKey: "ncjdscbdhsbcj"}


module.exports = Task;