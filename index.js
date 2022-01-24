const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

function naoImplementado(req, res) {
  res.status(501).json({ erro: 'Não implementado' });
}

// Listar todas as tarefas : GET
app.get('/gerenciador-tarefas', naoImplementado);

// Listar uma tarefa por id: GET
app.get('/gerenciador-tarefas/:id', naoImplementado);

// Cadastrar uma tarefa: POST
app.post('/gerenciador-tarefas', naoImplementado);

// Atualizar uma tarefa: PUT
app.put('/gerenciador-tarefas/:id', naoImplementado);

// Remover uma tarefa: DELETE
app.delete('/gerenciador-tarefas/:id', naoImplementado);

// Concluir uma tarefa: PUT ou PATCH
app.put('/gerenciador-tarefas/:id/concluir', naoImplementado);

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));
