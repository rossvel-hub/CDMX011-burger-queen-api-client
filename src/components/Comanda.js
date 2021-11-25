/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Comanda = (props) => {
     let {products} = props;
     console.log(products);
    const [cartItems, setCartItems] = useState([]);
    const addProduct = ( product ) => {
        
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) => 
                x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, {...product, qty: 1 }])
        }
    }

    const onRemove = ( product ) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if(exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) => 
                x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };



    return (
        <div className="comanda">
            <h2>Comanda</h2>

            <div className="col-2">
                <button onClick={onRemove} className="btn-remove">
                    -
                </button>
                <button onClick={addProduct} className="btn-add">
                    +
                </button>
            </div>
            <button className="btn-enviar-cocina">ENVIAR A COCINA</button>
            <Link to='/Cocina'> :</Link>
            <p>Cliente estrella :</p>

        </div>

    )
}

export default Comanda;