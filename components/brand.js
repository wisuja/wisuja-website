import React from 'react';
import Link from 'next/link';

import styles from '../styles/brand.module.css';

export default function Brand() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Link href="/">
        <a className={styles.brand}>
          <span className="highlighted">Wi</span>
          lliam <span className="highlighted">Su</span>
          rya <span className="highlighted">Ja</span>
          ya
        </a>
      </Link>
    </div>
  );
}
