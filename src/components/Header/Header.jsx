import './Header.css';

import React from 'react';

import Arrow from '../../images/Arrow.svg';
import Donation from '../../images/Donation.svg';
import Download from '../../images/Download.svg';
import Forum from '../../images/Forum.svg';
import Rating from '../../images/Rating.svg';
import Russia from '../../images/Russia.svg';
import Wiki from '../../images/Wiki.svg';

function Header() {

  return (
    <header className="header">
      <h1>GTanks</h1>
      <div className="header__nav-menu">
        <div className="header__nav-menu-links-left">
          <div className="header__nav-menu-link">
            <img className="header__nav-menu-icon" src={Rating}></img>
            <p className="header__nav-menu-link-text">Рейтинги</p>
          </div>
          <div className="header__nav-menu-link">
            <img className="header__nav-menu-icon" src={Forum}></img>
            <p className="header__nav-menu-link-text">Форум</p>
          </div>
          <div className="header__nav-menu-link">
            <img className="header__nav-menu-icon" src={Wiki}></img>
            <p className="header__nav-menu-link-text">Вики</p>
          </div>
          <div className="header__nav-menu-link">
            <img className="header__nav-menu-icon" src={Donation}></img>
            <p className="header__nav-menu-link-text">Пополнить игровой счет</p>
          </div>
        </div>
        <div className="header__line"></div>
        <div className="header__nav-menu-links-right">
          <div className="header__nav-menu-link">
            <img className="header__nav-menu-icon" src={Russia}></img>
            <p className="header__nav-menu-link-text">RU</p>
            <img className="header__nav-menu-icon" src={Arrow}></img>
          </div>
          <div className="header__nav-menu-link">
            <img className="header__nav-menu-icon" src={Download}></img>
            <p className="header__nav-menu-link-text">Скачать клиент</p>
          </div>
        </div>
      </div>
    </header>
  );

}

export default Header;