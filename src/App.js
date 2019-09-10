import React, { useState } from 'react';
import Fruit from './Fruit';
import './App.css';

// Market app
// There will be a top-level Market component
// Market component will hold app state
//      * stock (available articles) --> { fruits: [], meats: [] }
//      * cart  (user fills it) --> []

// <Fruits /> component that renders all the fruits (loops over array)
// <Fruit /> component that renders a single fruit
//      has a button to add the fruit to the cart
// <Cart /> component that renders the cart (loops over array)

// .map() ----> returns a value which is an array
// .forEach()  -> doesn't return anything

function Fruits(props) {
  // what props do we need?
  const { fruits, addToCart } = props; // ['apple', 'banana']
  return (
    <div>
      {
        fruits.map(
          (fruitName) => (
            <Fruit
              key={fruitName}
              name={fruitName}
              addToCart={addToCart}
            />
          ))
      }
    </div>
  )
}

function Market() {
  // get 2 slices of state working
  // one slice is stock, is initialized like so 
  //        { fruits: ['pear', 'apple'], meats: [] }
  // the other slice of state is called cart -> []

  // SLICES OF STATE AND CORRESPONDING STATE SETTERS
  const [stock, setStock] = useState({
    fruits: ['pear', 'apple', 'orange'],
    meats: [],
  });
  const [cart, setCart] = useState([]);

  // FUNCTIONS THAT ACTUATE ON SAID SLICES OF STATE
  const addToCart = (item) => {
    // return keyword optional
    return setCart(cart.concat(item));
  };

  return (
    <div className="App">
      <Fruits fruits={stock.fruits} addToCart={addToCart} />
      {
        cart.length
          ? cart.map((item, idx) => <div key={idx}>{item}</div>)
          : <div>Nothing in the cart. Sad!</div>
      }

    </div>
  );
}

export default Market;
