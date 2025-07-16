// importation des module, icone et style
import Image from 'next/image';
import styles from './Footer.module.css';
import instagramIcon from '@/public/instagram-icon.png';
import facebookIcon from '@/public/facebook-icon.png';
import Link from 'next/link';
import likeIcon from '@/public/like-icon.png';
import shareIcon from '@/public/share-icon.png';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* liens vers Apropos*/}
            <div className={styles.section}>
                <Link href="/Apropos" className={styles.navLink}>
                    À propos
                </Link>
            </div>
            {/* Mention de copyright */}
            <div className={styles.section}>
                <p>&copy; 2025 Martel, Victorien et Kévine. Tous droits réservés.</p>
            </div>
            {/* liens vers les reseau sociaux */}
            <div className={styles.section}>
                <div className={styles.socialIcons}>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <Image src={instagramIcon} alt="Instagram" width={30} height={30} />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <Image src={facebookIcon} alt="Facebook" width={30} height={30} />
                    </a>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.interactions}>
                    <Image src={likeIcon} alt="Aimer" width={30} height={30} />
                    <Image src={shareIcon} alt="Partager" width={30} height={30} />
                </div>
            </div>
        </footer>
    );
}
