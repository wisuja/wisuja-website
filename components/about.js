import Link from 'next/link';
import React from 'react';

import styles from '../styles/about.module.css';

export default function About() {
  return (
    <>
      <div className="mt-3 col-6 col-md-4 mx-auto">
        <img
          src="/images/profile.jpg"
          className="img-fluid rounded-circle"
          alt="Profile Picture"
        />
      </div>
      <div className="mt-3 col-sm-12 offset-lg-1 col-lg-7 my-auto">
        <h1 className={styles.hi}>Hi there!</h1>
        <p className="text-justify">
          I'm William, a full-stack web developer with 3+ years of experience in
          various industries. I'm specialized in backend development and have
          proficiency in Laravel and JavaScript. Highly interested in
          technological advancements and personal development.
        </p>
        <p>
          I also write articles for my blog on{' '}
          <Link href="https://www.medium.com/@wisuja">
            <a className="highlighted" target="_blank">
              <u>Medium</u>
            </a>
          </Link>
          . I usually write about tech, self development, and personal finance.
          These topics really intrigued me to be better each day.
        </p>
        <p>
          I also like to connect with new people, so I’ll be waiting for you to
          hit me up!
        </p>
      </div>
    </>
  );
}
