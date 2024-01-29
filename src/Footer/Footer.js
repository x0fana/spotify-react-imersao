import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="disclaimer-premium">
            <div className="footer__content">
                <p className="disclaimer-premiumtitle">Testar o Premium de graça</p>
                <p className="disclaimer-premiumsubtitle">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</p>
            </div>

            <button>Inscreva-se grátis</button>
        </footer>
    )
};

export default Footer;