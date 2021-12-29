import "./Product.css";
const Products = ({productItems, handleAddProduct})=> {
    console.log(productItems);
    return(
        <div className="products">
            {productItems.map((productItem)=>(
                <div className="card" key={productItem.id}>
                    <div>
                        <img src={productItem.image}/>
                    </div>
                    <div className="product-name">
                        <h3>{productItem.name}</h3>
                    </div>
                    <div className="product-price">
                        ${productItem.price}
                    </div>
                    <div>
                        <button className="product-add-button" onClick={()=>handleAddProduct(productItem)}> Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Products;