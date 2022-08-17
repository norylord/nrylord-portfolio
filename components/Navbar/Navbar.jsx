import React from 'react';
import styles from './Navbar.module.sass'
import FcHome from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <h3 className={styles.navbar__item}>Главная</h3>
            <h3 className={styles.navbar__item}>Проекты</h3>
            <h3 className={styles.navbar__item}>GitHub</h3>
            <h3 className={styles.navbar__item}>Стек</h3>
        </div>
    );
};

export default Navbar;