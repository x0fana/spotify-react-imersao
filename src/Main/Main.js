import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Header from '../Header/Header'
import { useState, useEffect } from 'react'
import './Main.css'

import card1 from '../assets/playlist/Card1.jpeg'
import card2 from '../assets/playlist/Card2.jpg'
import card3 from '../assets/playlist/Card3.png'
import card4 from '../assets/playlist/Card4.jpeg'
import card5 from '../assets/playlist/Card5.jpeg'
import card6 from '../assets/playlist/Card6.jpg'
import card7 from '../assets/playlist/Card7.jpeg'
import card8 from '../assets/playlist/Card8.jpg'
import card9 from '../assets/playlist/Card9.jpeg'
import card10 from '../assets/playlist/Card10.jpg'
import card11 from '../assets/playlist/Card11.jpeg'
import card12 from '../assets/playlist/Card12.jpeg'
import card13 from '../assets/playlist/Card13.jpeg'
import card14 from '../assets/playlist/Card14.jpeg'
import card15 from '../assets/playlist/Card15.jpeg'
import card16 from '../assets/playlist/Card16.jpg'
import card17 from '../assets/playlist/Card17.jpg'
import card18 from '../assets/playlist/Card18.jpg'
import card19 from '../assets/playlist/Card19.jpg'
import card20 from '../assets/playlist/Card20.jpg'

const Main = () => { // Main component que chama a Header para usar a props

  const [inputheader, setInputheader] = useState('') // useState vai gerenciar o estado do valor da input
  const [single, setSingle] = useState([])

  useEffect(() => {
    /* se o valor da input for vazia */
    if (inputheader === '') {
      return // não faz nada
    }

    fetch(
      `https://imersao-alura-spotify-seven.vercel.app/artists?name_like=${inputheader}`
    )
      .then((res) => res.json())
      .then((result) => setSingle(result)) // adiciona os resultados ao single
      .catch((err) => console.error(`erro no fetch`, err))
  }, [inputheader])

  // prop que tem o valor do input chama uma função shareDados que vamos criar agora
  function shareDados(e) {
    //entao quando essa funcao for chamada
    const valor = e.target.value.toLowerCase() // essa var pega o valor e e deixa em minusculo
    
    setInputheader(valor) // valor é enviado para o inputHeader adicionando o fetch
  }

  return (
    <main>
      <div className="main-container">
        <Header valorInput={shareDados} />
        <div className="playlist-container">
          <div
            id="result-playlists"
            className={inputheader ? 'hidden' : 'result-playlists'}>
            <div className="offer__scroll-container">
              <div className="playlist">
                <h2>Navegar por todas as seções</h2>
              </div>

              <div className="offer__list">
                <section className="offer__list-item">
                  <a href="" className="cards">
                    <div className="cards card1">
                      <img src={card1} alt="" />
                      <span>Podcasts</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card2">
                      <img src={card2} alt="" />
                      <span>Eventos ao vivo</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card3">
                      <img src={card3} alt="" />
                      <span>Feito para você</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card4">
                      <img src={card4} alt="" />
                      <span>Lançamentos</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card5">
                      <img src={card5} alt="" />
                      <span>Sertanejo</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card6">
                      <img src={card6} alt="" />
                      <span>No carro</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card7">
                      <img src={card7} alt="" />
                      <span>Creators</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card8">
                      <img src={card8} alt="" />
                      <span>Paradas</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card9">
                      <img src={card9} alt="" />
                      <span>Rock</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card10">
                      <img src={card10} alt="" />
                      <span>Pop</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card11">
                      <img src={card11} alt="" />
                      <span>Funk</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card12">
                      <img src={card12} alt="" />
                      <span>Samba e pagode</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card13">
                      <img src={card13} alt="" />
                      <span>MPB</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card14">
                      <img src={card14} alt="" />
                      <span>Hip-hop</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card15">
                      <img src={card15} alt="" />
                      <span>Para treinar</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card16">
                      <img src={card16} alt="" />
                      <span>Indie</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card17">
                      <img src={card17} alt="" />
                      <span>R&B</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card18">
                      <img src={card18} alt="" />
                      <span>Disney</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card19">
                      <img src={card19} alt="" />
                      <span>Country</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card20">
                      <img src={card20} alt="" />
                      <span>Mood</span>
                    </div>
                  </a>
                </section>
              </div>

              <div className="second-footer">
                <div className="second-footer__container">
                  <div className="footer__part1">
                    <div className="footer-column">
                      <h3>Empresa</h3>
                      <ul>
                        <li>
                          <a href="#">Sobre</a>
                        </li>
                        <li>
                          <a href="#">Empregos</a>
                        </li>
                        <li>
                          <a href="#">For the Record</a>
                        </li>
                      </ul>
                    </div>
                    <div className="footer-column">
                      <h3>Comunidades</h3>
                      <ul>
                        <li>
                          <a href="#">Para artistas</a>
                        </li>
                        <li>
                          <a href="#">Desenvolvedores</a>
                        </li>
                        <li>
                          <a href="#">Publicidade</a>
                        </li>
                        <li>
                          <a href="#">Investidores</a>
                        </li>
                        <li>
                          <a href="#">Fornecedores</a>
                        </li>
                      </ul>
                    </div>
                    <div className="footer-column">
                      <h3>Links úteis</h3>
                      <ul>
                        <li>
                          <a href="#">Suporte</a>
                        </li>
                        <li>
                          <a href="#">Aplicativo móvel grátis</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="footer__part2">
                    <div className="social-icons">
                      <a
                        href="https://www.instagram.com/x0fana"
                        target="_blank">
                        <i><FontAwesomeIcon icon={faInstagram} /></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/santosgiovana"
                        target="_blank">
                        <i><FontAwesomeIcon icon={faLinkedin} /></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="separator"></div>

                <div className="copyright">
                  <p>© Giovana Santos – Imersão Alura</p>
                </div>
              </div>
            </div>
          </div>

          <div id="result-artist">

            {inputheader !== '' && (
              <h2 className="artist-title">Artistas</h2>
            )}

            <div className="grid-container">
              {/* só vai ser exibido quando tiver diferente de vazio, ou seja, se o usuario digitar alguma coisa */}
              {inputheader !== '' &&
                single.slice(0, 5).map((value, ind) => (
                  <React.Fragment key={ind}>
                    
                    <div className="artist-card">
                      <img
                      src={value.urlImg}
                      id="artist-img"
                      className="artist-img"
                      />

                      <div class="play">
                        <span><FontAwesomeIcon icon={faPlay} /></span>
                      </div>

                      <div className="card-text">
                        <a title="Foo Fighters" className="vst" href=""></a>
                        <span className="artist-name" id="artist-name">{value.name}</span>
                        <span className="artist-categorie">Artista</span>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
};

export default Main