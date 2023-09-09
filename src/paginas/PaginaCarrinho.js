import React, { useState, useEffect } from 'react';
import './PaginaCarrinho.css'; // Importe o arquivo CSS
import Menu from "../componentes/Menu";

function PaginaCarrinho() {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];
    setCarrinho(carrinhoAtual);
  }, []);

  const calcularTotal = () => {
    // Implemente a lógica para calcular o total do carrinho aqui
    return carrinho.reduce((total, produto) => total + produto.price, 0);
  };

  const limparCarrinho = () => {
    localStorage.removeItem('carrinho'); // Limpa o carrinho no armazenamento local
    setCarrinho([]); // Limpa o estado do carrinho
  };

  return (
    <div>
        <Menu />
      <h2>Carrinho de Compras</h2>
      {carrinho.length > 0 ? (
        <>
          <ul>
            {carrinho.map((produto, index) => (
              <li key={index}>
                <img src={produto.image} alt={produto.title} />
                <div>
                  <h3>{produto.title}</h3>
                  <p>Preço: ${produto.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="total">Total: ${calcularTotal()}</p>
          <button className="btn btn-danger" onClick={limparCarrinho}>
            Limpar Carrinho
          </button>
        </>
      ) : (
        <p>Seu carrinho está vazio.</p>
      )}
    </div>
  );
}

export default PaginaCarrinho;





