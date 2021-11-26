/* eslint-disable react/prop-types */
import React from 'react';


const Comanda = (props) => {
    let {
        productsToOrder,
        increaseProductQuantity,
        decreaseProductQuantity,
        clientName
    } = props;


    const increaseProduct = (product) => {
        increaseProductQuantity(product)
    }

    const decreaseProduct = (product) => {
        decreaseProductQuantity(product)
    };

    const precioTotal = productsToOrder.reduce((a, c) => a + c.price * c.qty, 0);
    console.log(precioTotal);
  
    return (
        <div className="comanda">
            <h2>Comanda</h2>

            {productsToOrder.map((op) => (
                <div key={op.id}>
                    <p>{op.qty}</p>
                    <p>{op.name}</p>
                    <p>{op.price}</p>
                    <div>
                        <button onClick={() => increaseProduct(op)}>
                            +
                        </button>
                        <button onClick={() => decreaseProduct(op)}>
                            -
                        </button>
                    </div>
                    <div>
                        {op.qty} x ${op.price.toFixed(2)}
                    </div>
                </div>
            ))}


            {productsToOrder.length !== 0 && (
                <>
                    <hr></hr>
                    {/* <div>
                        <div>Items Price</div>
                        <div>${precioTotal}</div>
                    </div> */}
                    
                        <div>
                    <strong>Total Price</strong>
                    </div>
                    <div>
                     {/* <strong>${precioTotal.toFixed(2)}</strong> */}
                     <strong>${precioTotal}</strong>
                     </div>
                    
                </>
            )}

            <button className="btn-enviar-cocina">ENVIAR A COCINA</button>
            <p>Cliente estrella : {clientName}</p>


        </div>
    )
}

export default Comanda;