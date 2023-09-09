import Menu from "../componentes/Menu";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Row, Col } from 'antd';
import ProductCard from "../componentes/ProductCard";

export default function PaginaProduto() {
  const { categoria } = useParams();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${categoria}`)
      .then((response) => {
        setProdutos(response.data);
      });
  }, [categoria]);

  return (
    <>
      <Menu />
      <div>
        <h2>Categoria: {categoria}</h2>
        <div className="container">
        <div className="row">
          {produtos.map((produto) => (
            <div className="col-12 col-md-6 col-lg-3" key={produto.id}>
              <ProductCard product={produto} />
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
