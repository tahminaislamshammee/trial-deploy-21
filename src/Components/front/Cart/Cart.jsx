import './Cart.css';
const Cart = ({cartItems, handleAddProduct, handleRemoveProduct}) => {
    console.log(cartItems.length);
    

    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price, 0
    );
    
    return ( 
        <div className="cart-items">
            <div className="cart-items-header">Cart items</div>
            
            {cartItems.length === 0 && (
                <div className='cart-items-empty'>no items are added!</div>
            )}
            <div>
                {cartItems.map((item)=>(
                    <div key={item.id} className='cart-items-list'>
                        <img src={item.image} alt={item.name} className='cart-item-image'/>

                        <div className="cart-name">
                        {item.name}
                        </div>
                        <div className="cart-items-function">
                        <button className='cart-items-add' onClick={()=>handleAddProduct(item)}>+</button>
                        <button className='cart-items-remove' onClick={()=>handleRemoveProduct(item)}>-</button>
                        </div>
                        <div className="cart-items-price">
                            {item.quantity} * ${item.price}
                        </div>
                    </div>
                    
                ))}
            </div>
            <div className='cart-items-total-price-name'>
                    total price <div className='cart-items-total-price'>
                        ${totalPrice}
                    </div>
            </div>
        </div>
    );
}
 
export default Cart;