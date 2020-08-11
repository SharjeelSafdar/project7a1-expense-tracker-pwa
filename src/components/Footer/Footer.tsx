import React from 'react';
// Icons
import { IconContext } from 'react-icons';
import { FaGithub, FaFacebookSquare } from 'react-icons/fa';
// Styles
import styles from './Footer.module.css';

// This component will be displaed at the bottom of webapp.
const Footer = () => {
    return (
        <div className={styles.container}>
            <h2>Expense Tracker App</h2>
            <p>Made By</p>
            <h3>Mian Muhammad Sharjeel Safdar</h3>
            <IconContext.Provider value={{ color: "white", size: "2rem", }}>
                <div className={styles.socialIcons}>
                <a 
                        href="https://github.com/SharjeelSafdar/project7a1-expense-tracker-pwa" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaGithub className={styles.socialIcon} title="Contact Us" />
                    </a>
                    <a 
                        href="https://web.facebook.com/mian.safdar.3386" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaFacebookSquare className={styles.socialIcon} title="Contact Us" />
                    </a>
                </div>
            </IconContext.Provider>
        </div>
    );
}

export default Footer;