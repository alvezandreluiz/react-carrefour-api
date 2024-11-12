import React from 'react'

import Mastercard from '../imgs/mastercard-logo.png'
import Visa from '../imgs/visa-logo.png';
import Elo from '../imgs/elo-logo.png';
import Hipercard from '../imgs/hipercard-logo.png';
import CartaoCarrefour from '../imgs/cartao-carrefour-logo.png';
import Diners from '../imgs/diners-logo.png';
import AmericanExpress from '../imgs/american-express-logo.png';
import VisaCheckout from '../imgs/visa-checkout-logo.png';
import Itau from '../imgs/itau-logo.png';
import Bradesco from '../imgs/bradesco-logo.png';
import Santander from '../imgs/santander-logo.png';
import Nubank from '../imgs/nubank-logo.png';
import Original from '../imgs/original-logo.png';
import C6Bank from '../imgs/c6bank-logo.png';
import BancoInter from '../imgs/banco-inter-logo.png';

import Facebook from '../imgs/facebook.png'
import Twitter from '../imgs/twitter.png'
import Instagram from '../imgs/instagram.png'
import Youtube from '../imgs/youtube.png'

const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <div className='footer-logos'>
        <div className='footer-formas-pagamento'>
          <p>Formas de pagamento</p>
          <img src={Mastercard} alt="Mastercard"></img>
          <img src={Visa} alt="Visa"></img>
          <img src={Elo} alt="Elo"></img>
          <img src={Hipercard} alt="Hipercard"></img>
          <img src={CartaoCarrefour} alt="Cartão Carrefour"></img>
          <img src={Diners} alt="Diners"></img>
          <img src={AmericanExpress} alt="American Express"></img>
          <img src={VisaCheckout} alt="Visa Checkout"></img>
          <img src={Itau} alt="Itaú"></img>
          <img src={Bradesco} alt="Bradesco"></img>
          <img src={Santander} alt="Santander"></img>
          <img src={Nubank} alt="Nubank"></img>
          <img src={Original} alt="Original"></img>
          <img src={C6Bank} alt="C6 Bank"></img>
          <img src={BancoInter} alt="Banco Inter"></img>
        </div>
        <div className='footer-redes-sociais'>
          <p>Siga-nos nas redes sociais</p>
          <a href="https://www.facebook.com/CarrefourBR" aria-label="Facebook" target="_blank" rel="noreferrer">
            <img src={Facebook} alt=""></img>
          </a>
          <a href="https://twitter.com/carrefourbrasil" aria-label="Twitter" target="_blank" rel="noreferrer">
            <img src={Twitter} alt=""></img>
          </a>
          <a href="https://www.instagram.com/carrefourbrasil/" aria-label="Instagram" target="_blank" rel="noreferrer">
            <img src={Instagram} alt=""></img>
          </a>
          <a href="https://www.youtube.com/channel/UCl5GhSLpPVmrqMJkIAhbedQ" aria-label="Youtube" target="_blank" rel="noreferrer">
            <img src={Youtube} alt=""></img>
          </a>
        </div>
      </div>
      <div className='footer-contatos'>
        <span>
          <p>
            Carrefour Comércio e Indústrias Ltda: Via de Acesso Norte, Km 38, nº 420, Empresarial Gato Preto, Cajamar - SP | CEP 07789-100 | CNPJ: 45.543.915/0846-95
          </p>
          <p>
            Envio de documentos administrativos e jurídicos: Rua George Eastman, nº 213 - Vila Tramontano, São Paulo, SP | CEP 05690-000
          </p>
          <a href="mailto:atendimento@carrefour.com.br" content="Email">atendimento@carrefour.com.br</a>
          <p>
            Copyright &copy; {today.getFullYear()}
          </p>
        </span>
      </div>
    </footer>
  )
}

export default Footer