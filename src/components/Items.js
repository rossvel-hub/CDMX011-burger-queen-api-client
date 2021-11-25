/* eslint-disable react/prop-types */
import React from 'react'

export const Items = (props) => {
    let {
        product,
        addProductToCommand
    } = props;

const addProduct = (item) => {
    addProductToCommand(item)
}

    return (
        <div className="table-items">
            <p className="name-products">{product.name}</p>
            <p className="price">$ {product.price}</p>
            <div>
        <button onClick={() => addProduct(product)} className="btn-añadir-comanda">Añadir a comanda</button>
        <p></p>
      </div>

        </div>
    )
}
