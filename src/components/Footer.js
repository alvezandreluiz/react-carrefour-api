import React from 'react'
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
          <img src="/imgs/mastercard-logo.png" alt=""></img>
          <img src="/imgs/visa-logo.png" alt=""></img>
          <img src="imgs/elo-logo.png" alt=""></img>
          <img src="/imgs/hipercard-logo.png" alt=""></img>
          <img src="/imgs/cartao-carrefour-logo.png" alt=""></img>
          <img src="/imgs/diners-logo.png" alt=""></img>
          <img src="/imgs/american-express-logo.png" alt=""></img>
          <img src="imgs/visa-checkout-logo.png" alt=""></img>
          <img src="/imgs/itau-logo.png" alt=""></img>
          <img src="/imgs/bradesco-logo.png" alt=""></img>
          <img src="/imgs/santander-logo.png" width="34px" height="33vh" alt=""></img>
          <img src="/imgs/nubank-logo.png" alt=""></img>
          <img src="imgs/original-logo.png" width="35px" height="33vh" alt=""></img>
          <img src="/imgs/c6bank-logo.png" alt=""></img>
          <img src="/imgs/banco-inter-logo.png" alt=""></img>
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