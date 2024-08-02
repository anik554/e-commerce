import React, { useEffect, useState } from "react";

interface ProductDataType {
  category: string;
  description: string;
  id: number;
  image: string;
  price: string;
  title: string;
}

const Product: React.FC = () => {
  const [productData, setProductData] = useState<ProductDataType[]>([]);
  const getProduct = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setProductData(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleOpen=(id : number, title: string)=>{
    alert(`you select ${id} which is ${title}`)
  }

  console.log(productData);
  // "men's clothing" "jewelery" "women's clothing"
  return (
    <div>
      <h2>All Products </h2>
      <hr />
      <br />
      <div className="card-container">
        {productData.map((items) => (
          <div className="card" key={items.id}>
            <div className="image">
              <img src={items.image} alt="images" />
            </div>
            <div className="container">
              <h4 className="product-title">
                <b>{items.title}</b>
              </h4>
              <div className="cate-price">
                <p>Category : {items.category}</p>
                <p>Price : ${items.price}</p>
              </div>
              <p className="product-description">
                {items.description.length > 250
                  ? items.description.slice(0, 250) + "..."
                  : items.description}
              </p>
              <button className="orderButton" onClick={()=>handleOpen(items.id, items.title)}>Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
