import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-jet-3-n-masculino/75/D16-2255-375/D16-2255-375_detalhe1.jpg?resize=280:280"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-jet-3-n-masculino/75/D16-2255-375/D16-2255-375_detalhe1.jpg?resize=280:280"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-jet-3-n-masculino/75/D16-2255-375/D16-2255-375_detalhe1.jpg?resize=280:280"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-jet-3-n-masculino/75/D16-2255-375/D16-2255-375_detalhe1.jpg?resize=280:280"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-jet-3-n-masculino/75/D16-2255-375/D16-2255-375_detalhe1.jpg?resize=280:280"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://cdn.shopify.com/s/files/1/0088/1587/0029/products/tenis_fila_footwear_disruptor_ii_premium_rosa_feminino_2__2_1_600x_crop_center.jpg?v=1571713110"
          alt="Tênis"
        />
        <strong>Tênis Amor</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
