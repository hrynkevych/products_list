import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://mate-academy.github.io/react_phone-catalog/_new/products.json')
      .then((response) => {
        const jsonData = response.data;

        setProducts(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="product-list-container">
      <h1 className="product-list-title">Product List</h1>
      <ul className="product-list-ul">
        {products.map((product, index) => (
          <li key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
