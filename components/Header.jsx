"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '@/public/logo.jpg';
import homeIcon from '@/public/home-icon.png';
import infoIcon from '@/public/info-icon.png';
import calendarIcon from '@/public/event-icon.png';
import envelopeIcon from '@/public/contact-icone.png';
import galleryIcon from '@/public/gallery-icon.png';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture du menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Inverse l'état du menu
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                {/* Logo */}
                <div className={styles.logoWrapper}>
                    <Image src={logo} alt="Logo de PhotoEvents" width={50} height={50} />
                    <h1 className={styles.logoText}>
                        Photo<span className={styles.gradientText}>Events</span>
                    </h1>
                </div>

                {/* Menu Hamburger*/}
                <button className={styles.hamburger} onClick={toggleMenu}>
                    ☰
                </button>

                {/* Navigation */}
                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link href="/" className={styles.navLink}>
                                <Image src={homeIcon} alt="Accueil" width={20} height={20} className={styles.icon} />
                                Accueil
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/Apropos" className={styles.navLink}>
                                <Image src={infoIcon} alt="Apropos" width={20} height={20} className={styles.icon} />
                                À propos
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/events" className={styles.navLink}>
                                <Image src={calendarIcon} alt="Événements" width={20} height={20} className={styles.icon} />
                                Événements
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/Contact" className={styles.navLink}>
                                <Image src={envelopeIcon} alt="Contact" width={20} height={20} className={styles.icon} />
                                Contact
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/Galerie" className={styles.navLink}>
                                <Image src={galleryIcon} alt="Galerie" width={20} height={20} className={styles.icon} />
                                Galerie
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}