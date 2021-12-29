import './App.css';
import data from './Components/back/data';
import Header from './Components/front/Header/Header';
import { BrowserRouter as Router} from 'react-router-dom';

import RoutesComponent from './Components/front/routes/RoutesComponent';
import { useState } from 'react';
function App() {

  const {productItems} = data;

  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => (
      item.id === product.id
    ));
    if(ProductExist){
      setCartItems(cartItems.map((item)=> item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity +1}: item));
    }else{
      setCartItems([...cartItems, {...product, quantity:1}])
    }
  }

  const handleRemoveProduct = (product)=>{
    console.log("removed");
    const ProductExist = cartItems.find((item) => (
      item.id === product.id
    ));
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item)=> item.id !== product.id));
    }
    else{
      setCartItems(
        cartItems.map((item)=> item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1}: item)
      )
    }
  }


  return (
    <div className="App">
      <Router>
        <Header cartItems={cartItems}/>
        <RoutesComponent  productItems={productItems} cartItems={cartItems}  handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
      </Router>
    </div>
  );
}

export default App;
