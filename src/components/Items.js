/* eslint-disable react/prop-types */
import React from 'react'

export const Items = (props) => {
    let {
        product
    } = props;

    return (
        <div className="card">
            <p>{product.name}</p>
            <p className="price">${product.price}</p>
            <p><button >Agregar</button></p>
            <p><button >Eliminar</button></p>
        </div>
    )
}