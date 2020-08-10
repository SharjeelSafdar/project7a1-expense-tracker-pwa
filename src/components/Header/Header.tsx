import React from 'react';
import styles from './Header.module.css';

// This component will be displayed at the top of the webapp.
const Header = () => (
    <div className={styles.container}>
        <img 
            className={styles.logo}
            src="/images/logo.png" 
            alt="App Logo" 
            title="My Expense Tracker Logo"
        />
        <h2 className={styles.title}>
            My Expense Tracker
        </h2>
    </div>
);

export default Header;