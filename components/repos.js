import React from 'react';
import Link from 'next/link';
import Repo from './repo';
import { Button } from 'reactstrap';

export default function Repos({ repos }) {
  const reposCountLimit = 6;

  return (
    <>
      <div className="row" id="projects">
        <div className="col-12 text-justify">
          <h2>Projects I've worked on</h2>
          <p>
            These are some projects that I've worked on my own. Feel free to
            check out my{' '}
            <Link href="https://www.github.com/wisuja">
              <a className="highlighted">
                {' '}
                <u>Github</u>
              </a>
            </Link>
            !
          </p>
        </div>
      </div>
      <div className="row">
        {repos
          .filter((item) => item.name !== 'Video-Game-Sales')
          .sort((a, b) => (b.created_at > a.created_at ? 1 : -1))
          .slice(0, reposCountLimit)
          .map((repo) => (
            <Repo repo={repo} key={repo.node_id} />
          ))}
      </div>
      <Button size="sm" className="btn-dark">
        <Link href="https://www.github.com/wisuja" passHref={true}>
          <a target="_blank">See more on Github</a>
        </Link>
      </Button>
    </>
  );
}
