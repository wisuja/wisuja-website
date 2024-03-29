import Head from "next/head";
import {
  About,
  Articles,
  Brand,
  Footer,
  Navigation,
  SocialMedia,
} from "../../components";

export default function Blog({ articles }) {
  return (
    <div>
      <Head>
        <title>Blog | William Surya Jaya</title>
        <meta content="Blog | William Surya Jaya" property="og:title"></meta>
        <meta content="https://wisuja.com/blog" property="og:url"></meta>
        <meta
          content="Blog | William Surya Jaya"
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
        <Articles articles={articles} />
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wisuja"
  );

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
