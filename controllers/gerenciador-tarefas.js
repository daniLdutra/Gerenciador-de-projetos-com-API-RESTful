const { v4 } = require('uuid');

let tarefas = [
  { id: '1', nome: 'Aprender React', concluida: true },
  { id: '2', nome: 'Estudar padrões de projetos', concluida: false },
  { id: '3', nome: 'Aprender Javascript', concluida: false },
  { id: '4', nome: 'Estudar react usando hooks', concluida: false },
];

function listarTarefaId(req, res) {
  const id = req.params.id;
  const tarefa = tarefas.filter((tarefa) => tarefa.id === id);
  if (tarefa.length === 0) {
    res.status(404).json({ erro: 'Tarefa não encontrada.' });
  }
  res.status(200).json(tarefa[0]);
}

function listarTarefas(req, res) {
  const pagina = req.query['pag'] || 1;
  const ordem = req.query['ordem']; //ASC, DESC
  const filtroTarefa = req.query['filtro-tarefa'];
  const itensPorPagina = req.query['itens-por-pagina'] || 3;
  let tarefasRetornar = tarefas.slice(0);
  //filtrar
  if (tarefasRetornar) {
    tarefasRetornar = tarefasRetornar.filter(
      (t) =>
        t.nome.toLocaleLowerCase().indexOf(filtroTarefa.toLocaleLowerCase()) ===
        0
    );
  }
  //ordenar
  if (ordenar === 'ASC') {
    tarefasRetornar.sort((t1, t2) =>
      t1.nome.toLocaleLowerCase() > t2.nome.toLocaleLowerCase() ? 1 : -1
    );
  } else if (ordenar === 'DESC') {
    tarefasRetornar.sort((t1, t2) =>
      t1.nome.toLocaleLowerCase() < t2.nome.toLocaleLowerCase() ? 1 : -1
    );
  }
  //retornar
  res.json({
    totalItens: tarefasRetornar.length,
    tarefas: tarefasRetornar
      .slice(0)
      .splice((pagina - 1) * itensPorPagina, itensPorPagina),
    pagina: pagina,
  });
}

module.exports = {
  listarTarefaId,
  listarTarefas,
};
