const express = require('express');
const app = express();
const db = require('./config/db');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API funcionando com banco 🚀');
});

app.post('/tarefas', (req, res) => {
    const { titulo } = req.body;

    if (!titulo) {
        return res.status(400).json({ mensagem: 'O título é obrigatório' });
    }

    const sql = 'INSERT INTO tarefas (titulo) VALUES (?)';

    db.query(sql, [titulo], (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ erro: erro.message });
        }

        res.status(201).json({
            mensagem: 'Tarefa criada com sucesso',
            id: resultado.insertId,
            titulo: titulo
        });
    });
});

app.get('/tarefas', (req, res) => {
    const sql = 'SELECT * FROM tarefas';

    db.query(sql, (erro, resultados) => {
        if (erro) {
            return res.status(500).json({ erro: erro.message });
        }

        res.json(resultados);
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});