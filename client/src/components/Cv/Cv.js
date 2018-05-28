import React from 'react';

import './Cv.css'

import cv from './cv.data';

const Cv = (props) => (
  <div className="cv">
    <CvTemplate />
    <section className="cv__download">
      {/*<h2 className="download__header">Pobierz w pdf</h2>*/}
      <button className="cv__btn">pobierz w pdf</button>
    </section>
  </div>
);

export default Cv;

const CvTemplate = () => (
  <div className="cv__template">
    <Basics />
    <About />
    <WorkExperience />
    <Skills />
    <Education />
  </div>
)

const Basics = (props) => {
  const basics = cv.basics
  return (
    <section className="cv__item cv__item--basics basics">
        <img className="basics__image" src={basics.picture} alt="profile"/>
        <div className="basics__info">
          <h2 className="basics__name">{basics.name}</h2>
          <p className="basics__label">{basics.label}</p>
          <div className="basics__contact">
            <p className="basics__phone">{basics.phone}</p>
            <p className="basics__website">{basics.website}</p>
            <p className="basics__language">{cv.languages[0].language}</p>
          </div>
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

const About = (props) => {
  return (
    <section className="cv__item cv__item--about">
      <header className="section-header">
        <h2 className="section-header__name">O mnie</h2>
      </header>
      <p className="about__text">{cv.basics.summary}</p>
    </section>
  )
}

const WorkExperience = (props) => {
  return (
    <section className="cv__item cv__item--experience experience">
      <header className="section-header">
        <h2 className="setion-header__name">Doświadczenie</h2>
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

const Skills = (props) => {
  return (
    <section className="cv__item cv__item--skills">
      <header className="section-header">
        <h2 className="setion-header__name">Umiejętności</h2>
      </header>
      <div className="skills__list">
        {cv.skills.map((skill, idx) => (
          <div key={idx} className="skills__skill">
            <h3 className="skills__name">{skill.name}</h3>
            <span className="skills__level">Poziom: {skill.level}</span>
            <div className="skills__keywords">
              {skill.keywords.map((keyword, idx) => (
                <span key={idx} className="skills__keyword">{keyword}</span>
              ))}
            </div>
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
        <h2 className="setion-header__name">Wykształcenie</h2>
      </header>
      <div className="education__list">
          {cv.education.map((institution, idx) => (
            <div key={idx} className="education__item">
              <div className="education__basics">
                <span className="education__institution">{institution.institution}</span>
                <span className="education__area">{institution.area}</span>
              </div>
              <p className="education__date">{institution.startDate} - {institution.endDate ? institution.endDate : '...'}</p>
              <p className="education__type">{institution.studyType} {institution.gpa}</p>
            </div>
          ))}
      </div>
    </section>
  )
}
