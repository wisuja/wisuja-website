import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Badge,
  Button,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

export default function ArticleDetail({ article }) {
  return (
    <div className="row">
      <div className="col-sm-12 mb-3">
        <Button size="sm" className="btn-dark">
          <Link href="/blog#blog" passHref={true}>
            <a>
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Back to Blog
            </a>
          </Link>
        </Button>
      </div>
      <div className="col-sm-12">
        <Card className="mb-3 card-dark">
          <CardBody>
            <CardTitle tag="h4">{article.title}</CardTitle>
            <CardSubtitle tag="p" className="mb-2">
              {moment(article.pubDate).format('MMMM Do, YYYY')}
            </CardSubtitle>
            <div className="mb-3">
              {article.categories.map((category) => (
                <Badge color="info" pill className="mx-1" key={category}>
                  <span className="font-weight-normal">{category}</span>
                </Badge>
              ))}
            </div>
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            ></div>
            <Button size="sm" className="btn-dark">
              <Link href={article.guid} passHref={true}>
                <a target="_blank">Read on Medium</a>
              </Link>
            </Button>
          </CardBody>
        </Card>
      </div>
      <div className="col-sm-12 mb-3">
        <Button size="sm" className="btn-dark">
          <Link href="/blog#blog" passHref={true}>
            <a>
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Back to Blog
            </a>
          </Link>
        </Button>
      </div>
    </div>
  );
}
