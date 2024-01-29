import React from "react";
import './Sidebar.css';
import logoSpotify from '../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSearch, faHeadphones, faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () =>{
    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <a href="">
                        <img src={logoSpotify}/>
                    </a>
                </div>
                
                <ul>
                    <li>
                        <a href="">
                            <i><FontAwesomeIcon icon={faHouse} /></i>
                            <span>Início</span>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i><FontAwesomeIcon icon={faSearch} /></i>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>
            
            <section className="library">
                <div className="library__content">
                    <button className="library__content__button">
                        <i><FontAwesomeIcon icon={faHeadphones} /></i>
                        <span>Sua biblioteca</span> 
                    </button>
                        <i><FontAwesomeIcon icon={faPlus} /></i>
                </div>

                <div className="offer__scroll-container2">
                    <div className="playlist">
                        <span>Crie sua primeira playlist</span> 
                        <p>É fácil, vamos te ajudar.</p>
                        
                        <button className="playlist__button">Criar playlist</button>
                    </div>

                    <div className="playlist">
                        <span>Que tal seguir um podcast novo?</span> 
                        <p>Avisaremos você sobre novos episódios.</p>
                        
                        <button className="playlist__button">Explore podcasts</button>
                    </div>
                </div>

                <div className="links">
                    <a href="#">Legal</a>
                    <a href="#">Centro de privacidade</a>
                    <a href="#">Política de privacidade</a>
                    <a href="#">Cookies</a>
                    <a href="#">Sobre anúncios</a>
                    <a href="#">Acessibilidade</a>
                    <a href="#">Notice at Collection</a>
                    <a href="#">Your Privacy Choices</a>
                </div>

                <div className="cookies">
                    <a href="#">Cookies</a>
                </div>

                <button className="language">
                    <i><FontAwesomeIcon icon={faGlobe} /></i>
                    <span>Português do Brasil</span> 
                </button>

            </section>        
        </div>
    )
};

export default Sidebar;