/* eslint-disable react/prop-types */
import React from 'react'


export const Items = (props) => {
    let {
        product,
        sendProduct
    } = props;
const addProduct = (item) => {
    
    sendProduct(item)
}

    return (
        <div className="table-items">
            <p className="name-products">{product.name}</p>
            <p className="price">$ {product.price}</p>
            <div>
        <button onClick={() => addProduct (product)} className="btn-añadir-comanda">Añadir a comanda</button>
        <p></p>
      </div>

        </div>
    )
}
