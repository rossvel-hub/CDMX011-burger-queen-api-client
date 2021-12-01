/* eslint-disable react/prop-types */
import React from 'react'
import shopping from "../assets/shopping.png";

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
            <img src={product.img} className="images-assets"/>
            <p className="name-products">{product.name}</p>
            <p className="price">$ {product.price}</p>
            <div>
        <button onClick={() => addProduct(product)} className="btn-añadir-comanda">
            <img src={shopping} alt="bag"/>
        </button>
        <p></p>
      </div>

        </div>
    )
}
