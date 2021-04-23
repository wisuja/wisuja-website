import React from 'react';
import {
  faBook,
  faDesktop,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Info() {
  return (
    <div>
      <div className="row mt-3">
        <div className="col-12 text-center">
          <h2>What I do</h2>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-sm-12 col-lg-4 my-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <FontAwesomeIcon icon={faDesktop} color="white" size="2x" />
            <br />
            <h6 className="font-weight-bold">Code</h6>
            <span className="font-weight-light">Code, code, and code.</span>
            <span className="font-weight-light">
              This is what I do everyday.
            </span>
          </div>
        </div>
        <div className="col-sm-12 col-lg-4 my-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <FontAwesomeIcon icon={faBook} color="white" size="2x" />
            <br />
            <h6 className="font-weight-bold">Study</h6>
            <span className="font-weight-light">
              As a college student, I'm also studying Information Systems
              materials.
            </span>
          </div>
        </div>
        <div className="col-sm-12 col-lg-4 my-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <FontAwesomeIcon icon={faPencilAlt} color="white" size="2x" />
            <br />
            <h6 className="font-weight-bold">Write</h6>
            <span className="font-weight-light">
              One of my favourite activity to do.
            </span>
            <span className="font-weight-light">
              I can put ideas and thoughts into my writings.
            </span>
          </div>
        </div>
      </div>
      <div className="line">&nbsp;</div>
    </div>
  );
}
