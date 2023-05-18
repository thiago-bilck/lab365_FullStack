//este código é para  projeto trabalhar com variáveis de ambiente
require('dotenv').config()//este tem que ser o primeiro código para permear todo o processo.
//As variáveis sensíveis são: chave secreta do projeto; aba com os códigos para o database


const { response } = require('express');
const express = require('express');
const bcrypt = require('bcryptjs')//teoricamente não precisa mais dessa importação, pois já está importada nos controllers
const jwt = require('jsonwebtoken')//teoricamente não precisa mais dessa importação, pois já está importada nos controllers
const connection = require('./src/database'); //criando a conexão com o banco de dados através do código criado na pasta database
const Task = require('./src/models/task')
const User = require('./src/models/user')
const log = require('./src/middlewares/log')//importando o middleware criado para logar
const validateNewUser = require('./src/middlewares/validateNewUser');
const validateToken = require('./src/middlewares/validateToken');
const createTask = require('./src/controllers/tasks/createTask');
const findTask = require('./src/controllers/tasks/findTask');
const deleteTask = require('./src/controllers/tasks/deleteTask');
const createUser = require('./src/controllers/users/createUser');
const createLogin = require('./src/controllers/users/createLogin')

const app = express();

//o app.use é utilizado apenas quando a função é global.
app.use(express.json())//obrigatório. É o que faz a aplicação entender json
app.use(log)//usando como obrigatoriedade a função log do middleware

connection.authenticate(); // autenticando conexão, não é obrigatório é apenas para sabermos se está com conexão
connection.sync({alter: true});
console.log('Connection has been established successfully')// mensagem confirmando conexão

//cadastrar novas tarefas
app.post('/tarefas', validateToken, createTask);

app.get('/tarefas', validateToken, findTask);


app.delete('/tarefas/:id', validateToken, deleteTask)

app.post('/users', validateNewUser, createUser)

app.post('/users/login', createLogin)

app.listen(3333, ()=>console.log('Aplicação online'));