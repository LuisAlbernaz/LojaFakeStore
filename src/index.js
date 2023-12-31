import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PaginaInicial from './paginas/PaginaInicial';
import PaginaProduto from './paginas/PaginaProduto';
import PaginaCarrinho from './paginas/PaginaCarrinho';

const roteador = createBrowserRouter([
  {path: '/', element: <PaginaInicial />},
  { path: '/produto/:categoria', element: <PaginaProduto /> },
  {path: '/carrinho', element: <PaginaCarrinho />}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={roteador} />
  </React.StrictMode>
);


reportWebVitals();
