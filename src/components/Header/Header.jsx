import React from "react";
import "./styles.css";
import Logo from "../../assets/images/Logo.png";

export function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-logo">
          <a href="#">
            <img className="header-logo-image" src={Logo} alt="" />
          </a>
        </div>
        <nav className="navigation">
          <a className="nav-links" href="#">
            <span className="nav-links_span">Музыка</span>
          </a>
          <a className="nav-links" href="#">
            <span className="nav-links_span">Артисты</span>
          </a>
          <a className="nav-links" href="#">
            <span className="nav-links_span">LilGuysHistory</span>
          </a>
          <a className="nav-links" href="#">
            <span className="nav-links_span">Мерч</span>
          </a>
          <a className="nav-links" href="#ama">
            <span className="nav-links_span">AmA</span>
          </a>
          <a className="nav-links" href="#">
            <span className="nav-links_span">Контакты</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
