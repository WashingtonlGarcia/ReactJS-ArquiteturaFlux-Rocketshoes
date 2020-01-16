import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <div>
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <td>SUBTOTAL</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://static.netshoes.com.br/produtos/tenis-mizuno-jet-3-n-masculino/75/D16-2255-375/D16-2255-375_detalhe1.jpg?resize=280:280"
                  alt="Tênis"
                />
              </td>
              <td>
                <strong>Tênis muito massa</strong>
                <span>R$129,90</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={2} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$258,80</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          </tbody>
        </ProductTable>
        <footer>
          <button type="button">Finalizar pedido</button>
          <Total>
            <span>TOTAL</span>
            <strong>R$1920,28</strong>
          </Total>
        </footer>
      </Container>
    </div>
  );
}
