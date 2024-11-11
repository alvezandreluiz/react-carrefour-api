import React from 'react';
import Logo from '../imgs/logo-carrefour.png';
import CarrinhoDeCompras from '../imgs/cart.svg';

const Header = ({ cartCount, cartItems, setCartCount, setCartItems }) => {
  const handleCartClick = () => {
    if (cartItems.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    const baseURL = 'https://secure.mercado.carrefour.com.br/checkout/cart/add?';
    const params = cartItems.map((item) => 
      `sku=${item.items[0]?.itemId}&qty=1&seller=1&sc=2&price=${item.items[0]?.sellers[0]?.commertialOffer?.Price}&cv=_`
    ).join('&');
    const fullURL = `${baseURL}${params}`;
    
    // Abre a nova aba com a URL do carrinho
    window.open(fullURL, '_blank');
    
    // Reseta o contador do carrinho e os itens do carrinho
    setCartCount(0);
    setCartItems([]);
  };

  return (
    <div className='header-container'>
      <div className="logo-carrefour">
        <img src={Logo} alt="Logotipo do Carrefour" />
      </div>
      <div className="logo-shop-cart">
        <button className='empty-shop-cart' onClick={handleCartClick}>
          <img src={CarrinhoDeCompras} width="30px" height="30px" alt="Logotipo do Carrinho de Compras" />
          <span>{cartCount}</span>
        </button>
      </div>
    </div>
  );
};

export default Header;