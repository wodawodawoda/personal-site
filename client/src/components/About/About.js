import React, { Component } from 'react';

import './About.css';
import cv from '../Cv/cv.data'

const About = (props) => {
    return (
      <div className="about">
        <h2>O mnie</h2>
        <section className="cv__item cv__item--about">
          <p className="about__text">{cv.basics.summary}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, laborum!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eos inventore ipsa sint totam! Ducimus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </section>
      </div>
    );
}

export default About;
