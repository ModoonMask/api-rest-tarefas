const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'leo123',
    database: 'tarefas_db'
});

conexao.connect((erro) => {
    if (erro) {
        console.log('Erro ao conectar no banco:', erro);
    } else {
        console.log('Conectado ao MySQL!');
    }
});

module.exports = conexao;