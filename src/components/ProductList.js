import React from 'react';

export default function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.productId} className="product-item">
            {/* Exibindo a imagem do produto */}
            <img 
              src={product.items[0]?.images[0]?.imageUrl || 'https://via.placeholder.com/150'} 
              alt={product.productName} 
            />
            {/* Exibindo o nome do produto */}
            <h2>{product.productName}</h2>
            {/* Exibindo o preço do produto */}
            <p><strong>Preço: 
            {product.items[0]?.sellers[0]?.commertialOffer?.Price 
              ? ` R$ ${product.items[0]?.sellers[0]?.commertialOffer?.Price.toFixed(2).replace('.', ',')}` 
              : 'Preço não disponível'}
            </strong></p>
            {/* Exibindo informações adicionais, se houver */}
            {product.items[0]?.sellers[0]?.AvailableQuantity > 0 && (
              <p><strong>Em estoque</strong></p>
            )}
            {/* Botão para adicionar ao carrinho */}
            <button onClick={() => addToCart(product)}>
              Adicionar ao carrinho
            </button>
          </div>
        ))
      ) : (
        <p>Nenhum produto encontrado.</p>
      )}
    </div>
  );
}
