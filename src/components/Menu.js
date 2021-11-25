import React, {useState} from 'react';
import { Items } from "./Items";
/* eslint-disable react/prop-types */
function Menu(props) {

    let { products } = props;
    console.log(products);
    const [cartItems, setCartItems] = useState([]);

    const addProduct = ( product ) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) => 
                x.id === product.id ? { ...exist, qty: exist.qty} : x
                )
            );
        } else {
            setCartItems([...cartItems, {...product, qty: 1 }])
        }
      }

      
        const sumaProduct = ( product ) => {
        
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
    console.log()

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
            <div>
                <section>
          {products.map((product) => (
            <Items
              product={product}
              key={product.id}
              sendProduct = {addProduct}
            ></Items>
          ))}
        </section>
        <section>
        <div className="comanda">
            <h2>Comanda</h2>
            <div>
            {cartItems.map((op) => (
              <div key={op.id}>
                <p>{op.qty}</p>
                <p>{op.name}</p>
                <p>{op.price}</p>
                <div>
                  <button
                    onClick={() => {
                      sumaProduct(op);
                    }}
                  >
                    +
                  </button>
                  <button  onClick={() => {
                      onRemove(op);
                    }}>
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        </section>

            </div>
    );
}
export default Menu;