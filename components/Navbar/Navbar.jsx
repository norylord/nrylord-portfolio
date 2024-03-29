import React from 'react';
import styles from './Navbar.module.sass'
import FcHome from 'react-icons/fa';
import Link from "next/link";
import {useRouter} from "next/router";

const Navbar = () => {
    const router = useRouter()
    return (
        <div className={styles.navbar}>
            <Link href='/'><h3 className={`${styles.navbar__item} ${router.asPath === '/' ? styles.active : null}`}>Главная</h3></Link>
            <Link href='/projects'><h3 className={`${styles.navbar__item} ${router.asPath === '/projects' ? styles.active : null}`}>Проекты</h3></Link>
            <a className={styles.navbar__item} target="_blank" href="https://github.com/nrylord"
               rel="noopener noreferrer"><h3
                style={{fontWeight: 300}}>GitHub</h3></a>
            <a className={styles.navbar__item} target="_blank" href="https://t.me/norylord" rel="noopener noreferrer">
                <h3
                    style={{fontWeight: 300}}>Telegram</h3></a>
        </div>
    );
};

export default Navbar;