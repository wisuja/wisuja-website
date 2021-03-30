import React from 'react';
import Link from 'next/link';

import { useMediaQuery } from 'react-responsive';

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
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  let size = isMobile ? 'sm' : 'lg';

  return (
    <>
      <div className="my-3 line"></div>
      <div className="px-5 d-flex justify-content-between align-items-center">
        <Link href="https://www.facebook.com/wisujaaa" passHref={true}>
          <a className={styles.a} target="_blank">
            <FontAwesomeIcon icon={faFacebook} size={size} />
          </a>
        </Link>
        <Link href="https://www.instagram.com/wisuja" passHref={true}>
          <a className={styles.a} target="_blank">
            <FontAwesomeIcon icon={faInstagram} size={size} />
          </a>
        </Link>
        <Link href="https://www.github.com/wisuja" passHref={true}>
          <a className={styles.a} target="_blank">
            <FontAwesomeIcon icon={faGithub} size={size} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/wisuja" passHref={true}>
          <a className={styles.a} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size={size} />
          </a>
        </Link>
        <Link
          href="https://mail.google.com/mail/?view=cm&fs=1&to=williamsj26.wsj@gmail.com"
          passHref={true}
        >
          <a className={styles.a} target="_blank">
            <FontAwesomeIcon icon={faEnvelope} size={size} />
          </a>
        </Link>
        <Link href="https://www.medium.com/@wisuja" passHref={true}>
          <a className={styles.a} target="_blank">
            <FontAwesomeIcon icon={faMedium} size={size} />
          </a>
        </Link>
        <Link href="https://www.twitter.com/wisuja_" passHref={true}>
          <a className={styles.a} target="_blank">
            <FontAwesomeIcon icon={faTwitter} size={size} />
          </a>
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCGPYbOGwATGG-0A53hANYeQ"
          passHref={true}
        >
          <a className={styles.a} target="_blank">
            <FontAwesomeIcon icon={faYoutube} size={size} />
          </a>
        </Link>
      </div>
      <div className="my-3 line"></div>
    </>
  );
}
