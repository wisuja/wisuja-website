import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

import styles from '../styles/navigation.module.css';

export default function Navigation({ active }) {
  return (
    <>
      <div className="line mt-2">&nbsp;</div>
      <Navbar className={styles.navbar}>
        <Nav className={styles.nav}>
          <NavItem>
            <NavLink
              href="/"
              className={active == 'home' ? 'font-weight-bold' : ''}
              title="Home page"
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="/projects#projects"
              className={active == 'projects' ? 'font-weight-bold' : ''}
              title="See William's projects"
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="/blog#blog"
              className={active == 'blog' ? 'font-weight-bold' : ''}
              title="See William's blog"
            >
              Blog
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <div className="line mb-2">&nbsp;</div>
    </>
  );
}
