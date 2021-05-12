import React from 'react';
import Link from 'next/link';

export default function CTA() {
  return (
    <div className="row mt-3">
      <div className="col-12 text-center mt-3">
        <h3>I occasionally take on freelance opportunities.</h3>
        <p className="font-weight-normal">
          Have an exciting project where you need some help?
        </p>
        <p className="font-weight-normal">
          Send me over a{' '}
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hi.wisuja@gmail.com"
            passHref={true}
          >
            <a target="_blank" className="highlighted" title="Mail to William">
              message
            </a>
          </Link>
          , or hit me up on social media!
        </p>
      </div>
    </div>
  );
}
