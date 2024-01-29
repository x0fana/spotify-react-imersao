import React from "react";
import './Header.css';
import smallLeft from '../assets/icons/small-left.png';
import smallRight from '../assets/icons/small-right.png';
import search from '../assets/icons/search.png';

const Header = ({valorInput}) => {
    // quando usuario digitar um valor esse valor será repassado por props ao component Pai que fez a importacao
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Seta para esquerda"/>
                </button>

                <button className="arrow-right">
                    <img src={smallRight} alt="Seta para direita"/>
                </button>
                    
                <div className="header__search">
                    <img src={search} alt=""/> 
                    <input id="search-input" maxLength="800" placeholder="O que você quer ouvir?" onInput={valorInput}/>
                </div>                            
            </div>

            <div className="header__login">
                <button className="subs">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
};

export default Header;