import './Footer.css';

import React from 'react';

import AgeLimit from '../../images/AgeLimit.svg';
import TelegramIcon from '../../images/TelegramIcon.svg';
import DiscordIcon from '../../images/DiscordIcon.svg';

function Footer() {

  return (
    <footer className="footer">
      <div className="footer__links">
        <div className="footer__container_description">
          <img className="footer__age-limit" src={AgeLimit} alt="Возрастное ограничение 6+" />
          <p className="footer__description" href="#">&#169; «GTanks» 2016-2021</p>
        </div>
        <div className="footer_container_link">
          <a className="footer__link" href="#">help@gtanksonline.com</a>
          <a className="footer__link" href="#">Пользовательское соглашение</a>
          <a className="footer__link" href="#">Правила игры</a>
        </div>
        <div className="footer_container_icon">
          <img className="footer_icon" src={TelegramIcon}></img>
          <img className="footer_icon" src={DiscordIcon}></img>
          <img className="footer_icon" src={DiscordIcon}></img>
          <img className="footer_icon" src={DiscordIcon}></img>
        </div>
      </div>
    </footer>
  );

}

export default Footer;