import React from 'react';
import Link from 'next/link';
import Article from './article';
import { Button } from 'reactstrap';

export default function Articles({ articles }) {
  const articleCountLimit = 6;

  return (
    <>
      <div className="row">
        <div className="col-12 text-justify">
          <h2>
            <u>Writings</u>
          </h2>
          <p>
            I like to share ideas and thoughts about personal development,
            minimalism and life. Feel free to check out my articles on{' '}
            <Link href="https://www.medium.com/@wisuja">
              <a className="highlighted">
                {' '}
                <u>Medium</u>
              </a>
            </Link>
            !
          </p>
        </div>
      </div>
      <div className="row">
        {articles.items.slice(0, articleCountLimit).map((article) => (
          <Article article={article} key={article.guid} />
        ))}
      </div>
      <Button color="light" size="sm">
        <Link href="https://www.medium.com/@wisuja" passHref={true}>
          <a target="_blank">See more on Medium</a>
        </Link>
      </Button>
    </>
  );
}
