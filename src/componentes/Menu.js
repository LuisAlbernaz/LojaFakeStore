import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import axios from 'axios';

const { SubMenu } = Menu;

const App = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);
  const [categories, setCategories] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then((dados) => {
        setProdutos(dados.data);

        // Extrair categorias únicas dos produtos
        const uniqueCategories = [...new Set(dados.data.map((produto) => produto.category))];
        setCategories(uniqueCategories);
      });
  }, []);

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="/" icon={<MailOutlined />}>
        <Link to="/">Página Inicial</Link>
      </Menu.Item>
      <SubMenu key="produtos" icon={<AppstoreOutlined />} title="Produtos">
        {categories.map((category) => (
          <Menu.Item key={`/produto/${category}`} key={category}>
            <Link to={`/produto/${category}`}>{category}</Link>
          </Menu.Item>
        ))}
      </SubMenu>
      <Menu.Item key="/carrinho" icon={<SettingOutlined />}>
        <Link to="/carrinho">Carrinho</Link>
      </Menu.Item>
    </Menu>
  );
};

export default App;



