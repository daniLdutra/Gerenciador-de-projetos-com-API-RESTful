const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {
  listarTarefaId,
  listarTarefas,
  cadastrarTarefa,
  atualizarTarefa,
  removerTarefa,
  concluirTarefa,
} = require('./controllers/gerenciador-tarefas.js');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// function naoImplementado(req, res) {
//   res.status(501).json({ erro: 'Não implementado' });
// }

// Listar todas as tarefas : GET
app.get('/gerenciador-tarefas', listarTarefas);

// Listar uma tarefa por id: GET
app.get('/gerenciador-tarefas/:id', listarTarefaId);

// Cadastrar uma tarefa: POST
app.post('/gerenciador-tarefas', cadastrarTarefa);

// Atualizar uma tarefa: PUT
app.put('/gerenciador-tarefas/:id', atualizarTarefa);

// Remover uma tarefa: DELETE
app.delete('/gerenciador-tarefas/:id', removerTarefa);

// Concluir uma tarefa: PUT ou PATCH
app.put('/gerenciador-tarefas/:id/concluir', concluirTarefa);

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));
