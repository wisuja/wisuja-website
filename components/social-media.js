import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import styles from '../styles/social-media.module.css';

export default function SocialMedia() {
  return (
    <>
      <div className="my-4 line colored-line"></div>
      <div className="d-flex justify-content-around align-items-center">
        <Link href="https://www.github.com/wisuja" passHref={true}>
          <a className={styles.a} target="_blank" title="William's Github">
            <FontAwesomeIcon icon={faGithub} className="mx-1" />
          </a>
        </Link>
        <Link href="https://www.instagram.com/wisuja" passHref={true}>
          <a className={styles.a} target="_blank" title="William's Instagram">
            <FontAwesomeIcon icon={faInstagram} className="mx-1" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/wisuja" passHref={true}>
          <a className={styles.a} target="_blank" title="William's Linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="mx-1" />
          </a>
        </Link>
        <Link href="https://www.medium.com/@wisuja" passHref={true}>
          <a className={styles.a} target="_blank" title="William's Medium">
            <FontAwesomeIcon icon={faMedium} className="mx-1" />
          </a>
        </Link>
      </div>
      <div className="my-4 line colored-line"></div>
    </>
  );
}
