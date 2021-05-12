import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Badge,
  Button,
} from 'reactstrap';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Repo({ repo }) {
  return (
    <div className="col-12">
      <Card className="mb-3 card-dark">
        <CardBody>
          <div className="d-flex justify-content-between align-items-center">
            <CardTitle tag="h5" className="mb-0">
              {repo.name.replace(/-/g, ' ')}
            </CardTitle>
            <CardSubtitle
              tag="p"
              className="font-weight-light"
              style={{ fontSize: '0.8rem' }}
            >
              {moment(repo.created_at).format('MMMM Do, YYYY')}
            </CardSubtitle>
          </div>
          <div className="my-2">
            <Badge color="dark" pill className="py-1 px-2">
              <span className="font-weight-light">{repo.language}</span>
            </Badge>
          </div>
          <CardText className="text-justify">{repo.description}</CardText>
          <Button color="dark" className="mr-1" size="sm">
            <Link href={repo.html_url} passHref={true}>
              <a target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="1x"
                  color="white"
                  className="mr-1"
                />
                <span>Github</span>
              </a>
            </Link>
          </Button>
          {repo.homepage !== null && repo.homepage !== '' ? (
            <Button color="dark" size="sm">
              <Link href={repo.homepage} passHref={true}>
                <a target="_blank">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    size="1x"
                    color="white"
                    className="mr-1"
                  />
                  Website
                </a>
              </Link>
            </Button>
          ) : (
            ''
          )}
        </CardBody>
      </Card>
    </div>
  );
}
