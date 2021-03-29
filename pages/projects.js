import Head from 'next/head';
import Link from 'next/link';
import { About, Brand, Navigation, SocialMedia } from '../components';
import styles from '../styles/projects.module.css';

export default function Projects() {
  return (
    <div>
      <Head>
        <title>William Surya Jaya - Projects</title>
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
            <Navigation active="projects"/>
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
      </main>
    </div>
  );
}
