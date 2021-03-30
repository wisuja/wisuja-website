import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/about.module.css';

export default function About() {
  return (
    <>
      <div className="mt-3 col-sm-12 col-lg-4">
        <img
          src="/images/profile.jpg"
          className="img-fluid"
          alt="Profile Picture"
        />
      </div>
      <div className="mt-3 col-sm-12 offset-lg-1 col-lg-7 text-justify">
        <h1 className={styles.hi}>Hi there!</h1>
        <p>
          My name is William Surya Jaya, a.k.a{' '}
          <span className="highlighted">wisuja</span>. I currently work as a
          software developer for a game company. This year, I’m 21 years old.
        </p>
        <p>
          I’m interested in software development field (web, mobile or even
          desktop) and also AI. I’ve been doing some personal projects in my
          free time.
        </p>
        <p>
          <i>
            Fastlearner. <span className="highlighted">Organized</span>.
            Focused.
          </i>
        </p>
        <p>
          I think these three words can describe me so much. Especially on
          <i className="highlighted"> Organized</i> part, I really like details
          (
          <i>
            <s>you can consider me having an OCD</s>
          </i>
          ).
        </p>
        <p>
          I also like to connect with new people, so I’ll be waiting for you to
          hit me up!
        </p>
        <a
          href="/documents/CV_William Surya Jaya.pdf"
          download
          className="btn btn-sm btn-dark"
          title="Download William's CV"
        >
          <FontAwesomeIcon icon={faDownload} className="mr-2"></FontAwesomeIcon>
          Download CV
        </a>
      </div>
    </>
  );
}
