import React from "react";
import artworks from "./artworks";

const ProductCard = ({ title, image, description, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">${price}</p>
      <button className="buy-button">Buy Now</button>
    </div>
  );
};

const ProductPage = () => {
  return (
    <div className="product-page">
      <h1 className="page-title">Artwork Collection</h1>
      <div className="product-grid">
        {artworks.map((art, index) => (
          <ProductCard key={index} {...art} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
