import React from 'react';
import styles from './Navbar.module.sass'
import FcHome from 'react-icons/fa';
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link href='/'><h3 className={styles.navbar__item}>Главная</h3></Link>
            <Link href='/projects'><h3 className={styles.navbar__item}>Проекты</h3></Link>
            <a className={styles.navbar__item} href="https://github.com/nrylord"><h3
                style={{fontWeight: 300}}>GitHub</h3></a>
            <a className={styles.navbar__item} href="https://t.me/norylord"><h3
                style={{fontWeight: 300}}>Telegram</h3></a>
        </div>
    );
};

export default Navbar;