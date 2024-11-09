import React from 'react'
import Logo from '../imgs/logo-carrefour.png'
import CarrinhoDeCompras from '../imgs/cart.svg'

const Header = () => {
  return (
    <div className='header-container'>
      <div className="logo-carrefour">
        <img src={Logo} alt="Logotipo do Carrefour"/>
      </div>
      <div className="logo-shop-cart">
        <button className='empty-shop-cart'>
          <img src={CarrinhoDeCompras} width="30px" height="30px" alt="Logotipo do Carrinho de Compras"/>
          <span>0</span>
        </button>
      </div>
    </div>
  )
}

export default Header