import React, { useEffect, useState } from 'react';

export default function MinhaLista() {
  const minhaLista = [
    { id: '1', value: 'Fruta' },
    { id: '2', value: 'Legume' },
    { id: '3', value: 'Carne' },
  ];

  const [produtos, setProdutos] = useState(minhaLista);
  const [pesquisa, setPesquisa] = useState('');

  const handlePesquisa = (e) => {
    setPesquisa(e.target.value);
  };

  useEffect(() => {
    if (pesquisa) {
      const novaLista = minhaLista.filter((item) =>
        item.value.toLowerCase().includes(pesquisa.toLowerCase())
      );
      setProdutos(novaLista);
    } else {
      setProdutos(minhaLista);
    }
  }, [pesquisa]);

  return (
    <div>
      <h2>Efeitos colaterais</h2>
      <input
        value={pesquisa}
        onChange={handlePesquisa}
        type="text"
        placeholder="Pesquise Aqui..."
      />

      {produtos.map((item) => (
        <div key={item.id}>
          <h4>{item.value}</h4>
        </div>
      ))}
    </div>
  );
}
