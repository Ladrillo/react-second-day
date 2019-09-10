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

function Fruit(props) {
  // what properties do we need inside of data arg, to flesh out our fruit
  const { name, addToCart } = props;
  return (
    
  );
}

function App() {
  return (
    <div className="App">
      hello world
    </div>
  );
}

export default App;
