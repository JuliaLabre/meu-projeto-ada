import React, { useEffect, useState } from "react";

export default function BuscandoDados() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      try {
        const resultado = await fetch('https://jsonplaceholder.typicode.com/todos');
        const resultadofinal = await resultado.json();
        setTarefas(resultadofinal);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    }

    buscarDados();
  }, []);

  return (
    <div>
      <h2>Buscando Dados</h2>
      <ol>
        {tarefas.map((tarefa) => (
            
          <li key={tarefa.id}>
            {tarefa.title}
            {tarefa.completed ? <strong> -Tarefa Concluída</strong> : null}
            </li>
        ))}
      </ol>
    </div>
  );
}
