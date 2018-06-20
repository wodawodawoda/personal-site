import React, { Component } from 'react';

import './Cv.css'

import cv from './cv.data';
import './art/aside-bg.svg'

class Cv extends Component {
  render() {
    return (
      <div className="cv">
        <CvTemplate />
        <section className="cv__download">
        {/*<h2 className="download__header">Pobierz w pdf</h2>*/}
        {/*<button className="cv__btn">pobierz w pdf</button>*/}
        </section>
      </div>
    )
  }
};

export default Cv;

const CvTemplate = () => (
  <div id="template" className="cv__template">
    <div className="cv__aside">
      <Basics />
    </div>
    <div className="cv__content">
      {/*<About />*/}
      <Education />
      <Skills />
      <WorkExperience />
    </div>
  </div>
)

const Basics = (props) => {
  const basics = cv.basics
  return (
    <section id="basics" className="cv__item cv__item--basics basics">
        <div className="basics__info">
          <img className="basics__image" src={basics.picture} alt="profile"/>
          <h2 className="basics__name">{basics.name}</h2>
          <p className="basics__label">{basics.label}</p>
          {/*<div className="basics__contact">*/}
            {/*<p className="basics__phone">{basics.phone}</p>*/}
            {/*<p className="basics__website">{basics.website}</p>*/}
            {/*<p className="basics__language">{cv.languages[0].language}</p>*/}
          {/*</div>*/}
          <div className="basics__profiles">
            {basics.profiles.map((profile, idx) => (
              <a key={idx} href={profile.url} className={`basics__${profile.network}`}>
                <span className={`fab fa-${profile.network}`}></span>
              </a>
            ))}
          </div>
        </div>
    </section>
  )
}

const Line = () => (
  <div className="section-header__line">
    <span className="section-header__break section-header__break--0"></span>
    <span className="section-header__break section-header__break--1"></span>
    <span className="section-header__break section-header__break--2"></span>
  </div>
)
const WorkExperience = (props) => {
  return (
    <section className="cv__item cv__item--experience experience">
      <header className="section-header">
        <h2 className="section-header__name">Doświadczenie</h2>
        {/*<Line />*/}
      </header>
      <div className="experience__jobs">
        {cv.work.map((job, idx) => (
          <div key={idx} className="experience__job job">
            <p className="experience__position">{job.position}</p>
            <p className="experience__company">{job.company}</p>
            <div className='experience__period'>
              <span className="experience__startDate">{job.startDate}</span>
              <span className="experience__endDate">{job.endDate}</span>
            </div>
            <p className="experience__summary">{job.summary}</p>
            <div className="experience__highlights">
              {job.highlights.map((highlight, idx) => (
                <p key="idx" className="experience__highlight">{highlight}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


const About = (props) => {
  return (
    <section className="cv__item cv__item--about">
      <header className="section-header">
        <h2 className="section-header__name">O mnie</h2>
        {/*<Line />*/}
      </header>
      <p className="about__text">{cv.basics.summary}</p>
    </section>
  )
}

const Skills = (props) => {
  return (
    <section className="cv__item cv__item--skills">
      <header className="section-header">
        <h2 className="section-header__name">Umiejętności</h2>
        {/*<Line />*/}
      </header>
      <div className="skills__list">
        {cv.skills.map((skill, idx) => (
          <div key={idx} className="skills__skill">
            <p className="skills__name">
							<span className={`skills__icon skills__icon--${skill.icon} fab fa-${skill.icon}`}></span>
							{skill.name}
						</p>
            {/*<span className="skills__level">Poziom: {skill.level}</span>*/}
            {/*<div className="skills__keywords"></div>*/}
          </div>
        ))}
      </div>
    </section>
  )
}

const Education = (props) => {
  return (
    <section className="cv__item cv__item--education">
      <header className="section-header">
        <h2 className="section-header__name">Wykształcenie</h2>
        {/*<Line />*/}
      </header>
      <div className="education__list">
				{cv.education.map((institution, idx) => (
					<div key={idx} className="education__item">
						<span className="education__logo fab fa-android"></span>
						<div className="education__content">
							<p className="education__date">{institution.startDate} - {institution.endDate ? institution.endDate : '...'}</p>
							<div className="education__basics">
								<p className="education__institution">{institution.institution}</p>
								<p className="education__area">{institution.area}</p>
							</div>
							<p className="education__type">{institution.studyType} {institution.gpa}</p>
						</div>
					</div>
				))}
      </div>
    </section>
  )
}
