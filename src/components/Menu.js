import React, { Fragment } from 'react'
// import { Producto } from './Producto';

export const Menu = (product) => {
    // let {
    //     products
    //   } = props;
    return (
        <div>
            {product&&
            <Fragment>
        <h2>{product.nameProduct}</h2>
        <strong>{product.price}</strong>
        </Fragment>
            }
        </div>
    );
}
