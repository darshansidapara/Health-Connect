import React from 'react';
import docHome from '../../../images/doc-home.png';
import '../styles/style.css';

const Home = () => (
  <section className="home" id="home">
    <div className="home-content">
      <h3>Welcome To</h3>
      <h1>Health Connect</h1>
      <br />
      <h3>Take Charge of Your <span className="multi-text"></span></h3>
      <br />
      <p>
        Welcome to Health Connext! Personalized Diet Plans, Calorie Tracking,
        Meditation & Breathing Exercises. Eat Well, Be Mindful. Personalized
        Plans, Calorie Counter, Meditation & Breathing.
      </p>
      <div className="products">
        <a href="#" target="_blank">
          <i className="fa-solid fa-calculator"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fa-solid fa-clipboard-list"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fa-solid fa-lungs"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fa-solid fa-heart-pulse"></i>
        </a>
      </div>
      <a href="#" className="btn"> Explore More </a>
    </div>
    <div className="home-img">
      <div className="meditation-img-border"></div>
      <img src={docHome} alt="Doctor" />
    </div>
  </section>
);

export default Home;
