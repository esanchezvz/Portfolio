import React from 'react';
import styles from './under-construction.module.scss';
import logo from '../../img/logo.svg';
import GithubIcon from '../../img/github-icon.svg';
import LinkedInIcon from '../../img/linkedin-icon.svg';
import MailIcon from '../../img/mail-icon.svg';

const UnderConstructionPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt='Logo' />
      </div>

      <h1 className={styles.headline}>Under Construction</h1>
      <p className={styles.slogan}>
        Hi there! I'm <b>Esteban Sánchez Vázquez</b> a Fullstack developer from Mexico City <br />
        I'm currently building my portfolio to display some cool projects I've built.
      </p>

      <div className={styles.buttons}>
        <a
          href='https://www.linkedin.com/in/esteban-sanchez-vazquez'
          target='_blank'
          rel='noopener noreferrer'
        >
          {/* <img src={linkedInIcon} alt='LinkedIn Icon' /> */}
          <LinkedInIcon />
        </a>
        <a href='https://www.github.com/esanchezvz' target='_blank' rel='noopener noreferrer'>
          {/* <img src={githubIcon} alt='GitHub Icon' /> */}
          <GithubIcon />
        </a>
        <a href='mailto:esteban.sanvaz@gmail.com'>
          <MailIcon />
          {/* <img src={mailIcon} alt='Mail Icon' /> */}
        </a>
      </div>
    </div>
  );
};

export default UnderConstructionPage;

// <button className='btn btn--primary'>click me!</button>
// <button className='btn btn--secondary'>click me!</button>
// <button className='btn btn--tertiary'>click me!</button>
