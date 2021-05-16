import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Badge,
  Button,
} from 'reactstrap';
import moment from 'moment';

export default function Article({ article }) {
  return (
    <div className="col-sm-12 col-lg-4">
      <Card className="mb-3 card-dark">
        <CardImg
          top
          width="100%"
          height="200px"
          src={article.thumbnail}
          alt="Article image"
        />
        <CardBody>
          <CardTitle tag="h6">{article.title}</CardTitle>
          <CardSubtitle tag="p" className="mb-2">
            {moment(article.pubDate).format('MMMM Do, YYYY')}
          </CardSubtitle>
          <div className="mb-2">
            {article.categories.map((category) => (
              <Badge color="info" pill className="mx-1" key={category}>
                <span className="font-weight-normal">{category}</span>
              </Badge>
            ))}
          </div>
          <Button size="sm" className="btn-dark">
            <Link href={article.link} passHref={true}>
              <a target="_blank">Read</a>
            </Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
