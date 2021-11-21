import React, { Fragment } from 'react'
/* eslint-disable react/prop-types */
function Menu({product}) {
    
    console.log(product);
    return (
        <div>
            {product&&
            <Fragment>
        <h2>{product.name}</h2>
        <strong>{product.price}</strong>
        </Fragment>
            }
        </div>
    );
}
export default Menu;