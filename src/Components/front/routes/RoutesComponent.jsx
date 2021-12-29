import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Cart from '../Cart/Cart';
import Products from "../products/Product";
import SignUp from '../SignUp/SignUp';
const RoutesComponent = ({productItems, cartItems, handleAddProduct, handleRemoveProduct}) =>{
    
    return (
        <div>
           <Routes>
               <Route path='/' element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}/>
               <Route path='/signup' element={<SignUp/>}/>
               <Route path='/cart' element={
               <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
               }/>
           </Routes>
        </div>
    );
}

export default RoutesComponent;