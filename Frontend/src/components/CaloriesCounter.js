import React from 'react';
import caloriesImg from '../../../images/calories-img.png';
import caloriesImg2 from '../../../images/calories-img-2.png';
import '../styles/style.css';

const CaloriesCounter = () => (
  <section className="calories" id="calories">
    <h2 className="heading">Calories <span>Counter</span></h2>
    <div className="calories-content">
      <div className="search-content">
        <div className="search-bar">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input placeholder="Find Food Calories" />
        </div>
        <h3>Find thousands of foods and their respective calorie information.</h3>
        <a href="#">
          <img src={caloriesImg} alt="Calories" />
        </a>
      </div>
      <div className="calories-img">
        <div className="calories-img-border"></div>
        <img src={caloriesImg2} alt="Calories" />
      </div>
    </div>
  </section>
);

export default CaloriesCounter;
