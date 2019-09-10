import React from 'react';
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

function Fruit(props) { // declaration of the Fruit component
  // what properties do we need inside of data arg, to flesh out our fruit
  // const { name, addToCart } = props;
  return (
    <div>
      <h3>{props.name}</h3>
      <button onClick={props.addToCart}>Add To Cart</button>
    </div>
  );
}

function App() {

  const callback = () => {
    console.log('adding this fruit')
  }

  return (
    <div className="App">
      Here's a fruit:
      {/* here is the invocation of Fruit (using JSX) */}
      <Fruit name="pear" addToCart={callback} />
      <Fruit name="apple" addToCart={callback} />
    </div>
  );
}

export default App;
