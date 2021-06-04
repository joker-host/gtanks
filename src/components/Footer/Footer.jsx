import './Footer.css';

import React from 'react';

import AgeLimit from '../../images/AgeLimit.svg';

function Footer() {

  return (
    <footer className="footer">
      <div className="footer__links">
        <img className="footer__age-limit" src={AgeLimit} alt="Возрастное ограничение 6+" />
        <p className="footer__description" href="#">&#169; «GTanks» 2016-2021</p>
        <a className="footer__link" href="#">help@gtanksonline.com</a>
        <a className="footer__link" href="#">Пользовательское соглашение</a>
        <a className="footer__link" href="#">Правила игры</a>
        <img className="footer_icon"></img>
        <img className="footer_icon"></img>
        <img className="footer_icon"></img>
        <img className="footer_icon"></img>
      </div>
    </footer>
  );

}

export default Footer;