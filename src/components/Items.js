/* eslint-disable react/prop-types */
import React from 'react'

export const Items = (props) => {
    let {
        product,
        onAdd
    } = props;

    return (
        <div className="table-items">
            <p className="name-products">{product.name}</p>
            <p className="price">$ {product.price}</p>

            <div>
        <button onClick={() => onAdd(product)} className="btn-añadir-comanda">Añadir a comanda</button>
      </div>

        </div>
    )
}
