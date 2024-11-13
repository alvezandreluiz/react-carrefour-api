import { React, useEffect, useState } from 'react';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import LeiteCondensado from '../imgs/leite-condensado.gif';
import Azeites from '../imgs/azeites.jpg';
import Bud from '../imgs/bud.jpg';
import ClickERetire from '../imgs/click-e-retire.gif';
import Fondue from '../imgs/fondue.jpg';
import Cervejas from '../imgs/cervejas-em-oferta.jpg';
import Drinks from '../imgs/drinks.jpg';
import Pizza from '../imgs/pizza.gif';
import Lacta from '../imgs/lacta.jpg';
import QueijosEVinhos from '../imgs/queijos-e-vinhos.png';
import Ofertas from '../imgs/ofertas.jpg';
import Pepsico from '../imgs/pepsico.jpg';
import ProdutosCarrefour from '../imgs/produtos-carrefour.jpg';
import CarnesParaChurrasco from '../imgs/carnes-para-churrasco.webp';
import MaisOfertas from '../imgs/mais-ofertas.jpg';

// Importando o componente ProductList
import ProductList from './ProductList';

export default function Content({ addToCart }) {
  const item = [
    <img className="imgs" src={LeiteCondensado} alt="leite condensado" />,
    <img className="imgs" src={Azeites} alt="azeites" />,
    <img className="imgs" src={Bud} alt="bud" />,
    <img className="imgs" src={Fondue} alt="fondue" />,
    <img className="imgs" src={Cervejas} alt="cervejas" />,
    <img className="imgs" src={Pizza} alt="pizza" />,
    <img className="imgs" src={Drinks} alt="drinks" />,
    <img className="imgs" src={Lacta} alt="lacta" />,
    <img className="imgs" src={Ofertas} alt="ofertas" />,
    <img className="imgs" src={QueijosEVinhos} alt="queijos e vinhos" />,
    <img className="imgs" src={ClickERetire} alt="click e retire" />,
    <img className="imgs" src={Pepsico} alt="pepsico" />,
    <img className="imgs" src={ProdutosCarrefour} alt="produtos carrefour" />,
    <img className="imgs" src={CarnesParaChurrasco} alt="carnes para churrasco" />,
    <img className="imgs" src={MaisOfertas} alt="mais ofertas" />,
  ];

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productsPerPage = 10;

  // Mude para 'development' para testar o frontend com os backend local ou remoto
  const API_URL = process.env.NODE_ENV === 'production'
    ? 'https://react-carrefour-backend.onrender.com/api/products' 
    : 'http://localhost:5000/api/products';
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}?page=${currentPage}&limit=${productsPerPage}`);

        //console.log('Dados recebidos da API:', response.data);

        setProducts(response.data.products);
        setTotalPages(response.data.totalPages); // Total de páginas da resposta da API
        setLoading(false);
      } catch (err) {
        console.error("Erro ao buscar produtos:", err);
        setError("Falha ao carregar os produtos");
        setLoading(false);
      }
    };

    fetchProducts(); // Chama a função dentro do useEffect
  }, [currentPage, productsPerPage, API_URL]); // Adicionamos apenas dependências necessárias

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <main>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 5800,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {item.map((imagem, i) => (
            <SwiperSlide key={i}>
              {imagem}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <div className="page-title">Produtos</div>

        {/* Exibição de erro se houver */}
        {error && <div className="error-message">{error}</div>}

        {/* Se estiver carregando, exibe uma mensagem */}
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <ProductList products={products} addToCart={addToCart} />
        )}

        {/* Controles de Paginação */}
        {totalPages > 1 && (
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>
              Página Anterior
            </button>
            <span>{`Página ${currentPage} de ${totalPages}`}</span>
            <button onClick={nextPage} disabled={currentPage === totalPages}>
              Próxima Página
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
