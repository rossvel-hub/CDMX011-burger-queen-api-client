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
};

    return (
        <div className="table-items">
            <img className="images-assets" src={product.imagen}/>
            <p className="name-products">{product.name}</p>
            <p className="price">$ {product.price}</p>
            <div>
        <button onClick={() => addProduct(product)} className="btn-añadir-comanda">
            <img className="img-bag" src={shopping} alt="bag"/>
        </button>
        <p></p>
      </div>

        </div>
    )
}
