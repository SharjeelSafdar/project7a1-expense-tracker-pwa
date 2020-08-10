import React from 'react';
// Styles
import styles from './Header.module.css';
// Images
import logo from '../../images/logo.svg';

// This component will be displayed at the top of the webapp.
const Header = () => (
    <div className={styles.container}>
        <img 
            className={styles.logo}
            src={logo} 
            alt="App Logo" 
            title="My Expense Tracker Logo"
        />
        <h2 className={styles.title}>
            My Expense Tracker
        </h2>
    </div>
);

export default Header;