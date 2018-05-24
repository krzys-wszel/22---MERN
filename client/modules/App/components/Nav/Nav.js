import React from 'react';
import { Link } from 'react-router';
import styles from './nav.css'

const Nav = () => (
    <li className={styles['nav']}>
        <Link className={styles['nav-item']} to="/home">Home</Link>
        <Link className={styles['nav-item']} to="/">Posts</Link>
        <Link className={styles['nav-item']} to="/about">About</Link>
    </li>
);

export default Nav;
