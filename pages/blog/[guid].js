import Head from "next/head";
import {
  About,
  ArticleDetail,
  Brand,
  Footer,
  Navigation,
  SocialMedia,
} from "../../components";
import NotFoundError from "../404";

export default function BlogDetail({ isError, article }) {
  if (isError) return <NotFoundError />;
  return (
    <div>
      <Head>
        <title>{article.title} | William Surya Jaya</title>
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
        <ArticleDetail article={article} />
      </main>
      <Footer />
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wisuja"
  );

  const articles = await res.json();

  const guids = articles.items.map((item) => {
    return item.guid.replace("https://medium.com/p/", "");
  });

  const paths = guids.map((guid) => ({
    params: {
      guid: guid,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wisuja"
  );

  const articles = await res.json();

  let article = articles.items.find((item) => {
    return item.guid == "https://medium.com/p/" + context.params.guid;
  });

  let isError = false;
  if (article == undefined) {
    isError = true;
    article = null;
  }

  return {
    props: {
      isError,
      article,
    },
  };
};
