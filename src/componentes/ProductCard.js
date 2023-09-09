import { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const [mostrarDescricao, setMostrarDescricao] = useState(false);
  const navigate = useNavigate();

  const alternarDescricao = () => {
    setMostrarDescricao(!mostrarDescricao);
  };

  const adicionarAoCarrinho = () => {
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];
    const novoCarrinho = [...carrinhoAtual, product];
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
    console.log('Produto adicionado ao carrinho:', product);
  };

  return (
    <div className="card" style={{ width: '100%' }}>
      <img src={product.image} className="card-img-top card-image" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        {mostrarDescricao ? (
          <p className="card-text">{product.description}</p>
        ) : (
          <p className="card-text">{product.description.slice(0, 100)}...</p>
        )}
        <p className="card-text">${product.price}</p>
        <p className="card-text">Categoria: {product.category}</p>
        <div className="col-12 d-flex justify-content-between">
          <button className="btn btn-dark" onClick={alternarDescricao}>
            {mostrarDescricao ? 'Esconder Descrição' : 'Mostrar Descrição'}
          </button>
          <button type="button" className="btn btn-primary" onClick={adicionarAoCarrinho}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

