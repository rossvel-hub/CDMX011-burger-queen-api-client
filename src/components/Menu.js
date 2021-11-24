import React from 'react';
import { Items } from "./Items";
/* eslint-disable react/prop-types */
function Menu( props ) {

    let { products } = props;

    return (
      
            <div>
                <section>
          {products.map((product) => (
            <Items
              product={product}
              key={product.id}
            ></Items>
          ))}
        </section>
            </div>
    );
}
export default Menu;