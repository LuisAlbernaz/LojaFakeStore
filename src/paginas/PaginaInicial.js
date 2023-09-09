import Menu from "../componentes/Menu";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from "../componentes/ProductCard";

export default function PaginaInicial(){
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
          .then((dados) => {
            setProdutos(dados.data);
          });
      }, []);

        return <>
        <Menu />
        <div className="container">
        <div className="row">
          {produtos.map((produto) => (
            <div className="col-12 col-md-6 col-lg-3" key={produto.id}>
              <ProductCard product={produto} />
            </div>
          ))}
        </div>
      </div>
            
        </>
    
}


