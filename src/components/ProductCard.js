import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl || 'default-image.jpg'} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R${product.price}</p>
      <button>Adicionar ao Carrinho</button>
    </div>
  );
}
