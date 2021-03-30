import {
  faBook,
  faDesktop,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';
import { About, Brand, Footer, Navigation, SocialMedia } from '../components';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>William Surya Jaya</title>
        <meta content="William Surya Jaya" property="og:title"></meta>
        <meta content="https://wisuja.github.io" property="og:url"></meta>
        <meta content="William Surya Jaya" property="og:site_name"></meta>
      </Head>
      <header className="container mt-3">
        <div className="row">
          <div className="col-12">
            <Brand />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Navigation active="home" />
          </div>
        </div>
      </header>
      <main className="container">
        <div className="row">
          <About />
        </div>
        <div className="row">
          <div className="col-12">
            <SocialMedia />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2>
              <u>What I do</u>
            </h2>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-sm-12 col-lg-4 my-5">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <FontAwesomeIcon icon={faDesktop} color="white" size="2x" />
              <br />
              <h6 className="font-weight-bold">Code</h6>
              <span className="font-weight-light">Code, code, and code.</span>
              <span className="font-weight-light">
                This is what I do everyday.
              </span>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4 my-5">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <FontAwesomeIcon icon={faBook} color="white" size="2x" />
              <br />
              <h6 className="font-weight-bold">Study</h6>
              <span className="font-weight-light">
                As a college student, I'm also studying Information Systems
                materials.
              </span>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4 my-5">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <FontAwesomeIcon icon={faPencilAlt} color="white" size="2x" />
              <br />
              <h6 className="font-weight-bold">Write</h6>
              <span className="font-weight-light">
                One of my favourite activity to do.
              </span>
              <span className="font-weight-light">
                I can put ideas and thoughts into my writings.
              </span>
            </div>
          </div>
        </div>
        <div className="line">&nbsp;</div>
        <div className="row mt-3">
          <div className="col-12 text-center mt-3">
            <h3>I occasionally take on freelance opportunities.</h3>
            <p className="font-weight-normal">
              Have an exciting project where you need some help?
            </p>
            <p className="font-weight-normal">
              Send me over a{' '}
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=williamsj26.wsj@gmail.com"
                passHref={true}
              >
                <a target="_blank" className="highlighted">
                  message
                </a>
              </Link>
              , or hit me up on social media!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
