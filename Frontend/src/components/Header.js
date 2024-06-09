import React from 'react';
import logo from '../../../images/logo1.png';
import '../styles/style.css';

const Header = () => (
  <header className="header">
    <a href="#" className="logo">
      <img className="mainLogo" src={logo} alt="logo" />
      Health Connect
    </a>
    <i className="fa-solid fa-bars" id="menu-icon"></i>
    <nav className="navbar">
      <a href="#home" className="active">Home</a>
      <a href="#calories">Calories Counter</a>
      <a href="#diet-planner">Diet Planner</a>
      <a href="#meditation">Meditation</a>
      <a href="#breathing">Breathing</a>
      <div className="login">
        <a href="#login" target="_blank">Login</a>
        <a href="#" id="dark-mode-toggle">
          <i className="fa-solid fa-user"></i>
        </a>
      </div>
    </nav>
  </header>
);

export default Header;
