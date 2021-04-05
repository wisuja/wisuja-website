import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import styles from "../styles/social-media.module.css";

export default function SocialMedia() {
  return (
    <>
      <div className="my-4 line colored-line"></div>
      <div className="d-flex justify-content-around align-items-center">
        {/* <Link href="https://www.facebook.com/wisujaaa" passHref={true}>
          <a className={styles.a} target="_blank" title="William's Facebook">
            <FontAwesomeIcon icon={faFacebook} className="mx-1" />
          </a>
        </Link> */}
        <Link href="https://www.instagram.com/wisuja" passHref={true}>
          <a className={styles.a} target="_blank" title="William's Instagram">
            <FontAwesomeIcon icon={faInstagram} className="mx-1" />
          </a>
        </Link>
        <Link href="https://www.github.com/wisuja" passHref={true}>
          <a className={styles.a} target="_blank" title="William's Github">
            <FontAwesomeIcon icon={faGithub} className="mx-1" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/wisuja" passHref={true}>
          <a className={styles.a} target="_blank" title="William's Linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="mx-1" />
          </a>
        </Link>
        {/* <Link
          href="https://mail.google.com/mail/?view=cm&fs=1&to=williamsj26.wsj@gmail.com"
          passHref={true}
        >
          <a className={styles.a} target="_blank" title="William's Mail">
            <FontAwesomeIcon icon={faEnvelope} className="mx-1" />
          </a>
        </Link> */}
        <Link href="https://www.medium.com/@wisuja" passHref={true}>
          <a className={styles.a} target="_blank" title="William's Medium">
            <FontAwesomeIcon icon={faMedium} className="mx-1" />
          </a>
        </Link>
        {/* <Link href="https://www.twitter.com/wisuja_" passHref={true}>
          <a className={styles.a} target="_blank" title="William's Twitter">
            <FontAwesomeIcon icon={faTwitter} className="mx-1" />
          </a>
        </Link> */}
        {/* <Link
          href="https://www.youtube.com/channel/UCGPYbOGwATGG-0A53hANYeQ"
          passHref={true}
        >
          <a className={styles.a} target="_blank" title="William's Youtube">
            <FontAwesomeIcon icon={faYoutube} className="mx-1" />
          </a>
        </Link> */}
      </div>
      <div className="my-4 line colored-line"></div>
    </>
  );
}
