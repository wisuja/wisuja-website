import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'reactstrap';
import { About, Brand, Footer, Navigation, SocialMedia } from '../components';

export default function NotFoundError() {
  return (
    <div>
      <Head>
        <title>William Surya Jaya - Blog</title>
        <meta content="William Surya Jaya - Blog" property="og:title"></meta>
        <meta content="https://wisuja.github.io/blog" property="og:url"></meta>
        <meta
          content="William Surya Jaya - Blog"
          property="og:site_name"
        ></meta>
      </Head>
      <header className="container mt-3">
        <div className="row">
          <div className="col-12">
            <Brand />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Navigation active="blog" />
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
            <h4 className="text-center text-danger">Page not found.</h4>
          </div>
          <div className="col-12">
            <h6 className="text-center">
              Please refer to the following links.
            </h6>
          </div>
          <div
            className="col-12 d-flex justify-content-center align-items-center"
            style={{ gap: '1rem' }}
          >
            <Button size="sm" className="btn-dark">
              <Link href="/">
                <a>Home</a>
              </Link>
            </Button>
            <Button size="sm" className="btn-dark">
              <Link href="/projects#projects">
                <a>Projects</a>
              </Link>
            </Button>
            <Button size="sm" className="btn-dark">
              <Link href="/blog#blog">
                <a>Blog</a>
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
