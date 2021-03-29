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
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="/projects"
              className={active == 'projects' ? 'font-weight-bold' : ''}
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="/writings"
              className={active == 'writings' ? 'font-weight-bold' : ''}
            >
              Writings
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <div className="line mb-2">&nbsp;</div>
    </>
  );
}
