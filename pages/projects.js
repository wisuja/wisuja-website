import Head from "next/head";
import {
  About,
  Brand,
  Footer,
  Navigation,
  Repos,
  SocialMedia,
} from "../components";

export default function Projects({ repos }) {
  return (
    <div>
      <Head>
        <title>Projects | William Surya Jaya</title>
        <meta
          content="Projects | William Surya Jaya"
          property="og:title"
        ></meta>
        <meta content="https://wisuja.com/projects" property="og:url"></meta>
        <meta
          content="Projects | William Surya Jaya"
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
            <Navigation active="projects" />
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
        <Repos repos={repos} />
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps = async function () {
  const res = await fetch("https://api.github.com/users/wisuja/starred");

  const repos = await res.json();

  return {
    props: {
      repos,
    },
  };
};
