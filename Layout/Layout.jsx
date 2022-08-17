import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "./Layout.module.sass"

const Layout = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <Navbar/>
            <div className={styles.container}>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;