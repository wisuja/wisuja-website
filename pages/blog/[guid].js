import Head from 'next/head';
import {
  About,
  ArticleDetail,
  Brand,
  Footer,
  Navigation,
  SocialMedia,
} from '../../components';

export default function BlogDetail({ article }) {
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
        <ArticleDetail article={article} />
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wisuja'
  );

  const articles = await res.json();

  const article = articles.items.find((item) => {
    return item.guid == 'https://medium.com/p/' + context.params.guid;
  });

  return {
    props: {
      article,
    },
  };
};
