/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { helpHttp } from "../helpers/helpers";
import add from "../assets/add1.png";
import remove from "../assets/remove1.png";
import { useHistory } from 'react-router-dom';

const Comanda = (props) => {
  let {
    productsToOrder,
    increaseProductQuantity,
    decreaseProductQuantity,
    clientName,
  } = props;

  const [db, setDb] = useState([]);
  const [error] = useState("");
  const history = useHistory();
  let date = new Date();
  const increaseProduct = (product) => {
    increaseProductQuantity(product);
  };
  const decreaseProduct = (product) => {
    decreaseProductQuantity(product);
  };
  const precioTotal = productsToOrder.reduce((a, c) => a + c.price * c.qty, 0);

  const pedido = {
    cliente: clientName,
    estatus: "pediente",
    productsToOrder,
    precioTotal: precioTotal,
    date: date
  };

  let api = helpHttp();
  let url = "https://dbfakeross.herokuapp.com/Orders";
  // crear data
  const createData = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        setDb([...db, res]);
        // mandar a ruta cocina
        history.push('/Cocina');
      } else {
        console.log(res);
      }
    });
  };

  return (
    <div className="comanda">
      <h2 className="title-comanda">Comanda</h2>
      {productsToOrder.map((op) => (
        <div key={op.id} className="card-product">
          <div>
            <table>
              <thead>
                <tr>
                  <th>Cantidad</th>
                  <th></th>
                  <th>Producto</th>
                  <th></th>
                  <th>Precio</th>
                  <th></th>
                  <th>In</th>
                  <th>Dec</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{op.qty}</td>
                  <td></td>
                  <td> {op.name}</td>
                  <td></td>
                  <td>${op.price}</td>
                  <td></td>
                  <td>
                    <button
                      onClick={() => increaseProduct(op)}
                      className="btn-increase"
                    >
                      <img className="img-add" src={add} alt="bag" />
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => decreaseProduct(op)}
                      className="btn-decrease"
                    >
                      <img className="img-remove" src={remove} alt="bag" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
      {productsToOrder.length !== 0 && (
        <>
          <div className="total-price">
            <div className="total-price-title">
              <strong>Total Price</strong>
            </div>
            <div className="total-price-numbers">
              <strong>${precioTotal}</strong>
            </div>
          </div>
        </>
      )}
      <p className="p-client">Cliente : {clientName}</p>
      {error && <p className="error">{error}</p>}
      <button className="btn-enviar-cocina" onClick={() => createData(pedido)}>
        ENVIAR A COCINA
      </button>
    </div>

  );
};
export default Comanda;
