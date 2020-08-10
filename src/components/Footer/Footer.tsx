import React from 'react';
// Styles
import styles from './Footer.module.css';

// This component will be displaed at the bottom of webapp.
const Footer = () => {
    return (
        <div className={styles.container}>
            <h2>My Expense Tracker</h2>
            <h5>Made By</h5>
            <h3>Mian Muhammad Sharjeel Safdar</h3>
            <h4>
                <a  href="https://www.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Git Repository Link
                </a>
            </h4>
        </div>
    );
}

export default Footer;