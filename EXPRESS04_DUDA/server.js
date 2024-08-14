//COMO CARREGAR SO MYSQT ATRAVÉS DE ARQUIVO EXTERNO

const express = require('express')
const mysql = require('mysql2')
const mysql_config = require('./mysql_config')

//const myrql_config = require('./mysql_config')

const app = express()
app.listen(3000,()=>{
    console.log("Servidor em execução")
})


const conncetion = mysql.createConnection(mysql_config)