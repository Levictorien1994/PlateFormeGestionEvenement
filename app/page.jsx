import styles from "./page.module.css";
import Image from 'next/image';
import camera from '@/public/photogra-icon.png';
import caVideo from '@/public/video-icon.png';
import edAndRetouche from '@/public/idition-icon.png';
import creation from '@/public/creation-icon.png';
import portrait from '@/public/medias/portraits.webp';
import paysage from '@/public/medias/paysage.webp';
import macro from '@/public/medias/macro.webp';
import "./globals.css";

/**
 * @type {import { 'next'}.Metadata}
 */
export const metadata = {
    title: "Accueil//photo",
    description: "bienvenue sur la page d'accueil",
};
export default function Accueil() {
    return <>
        <section className={styles.carousel}>
            <div className={styles.carouselContainer}>
                {/* Vidéo 1 */}
                <div className={styles.carouselItems}>
                    <video autoPlay muted loop className={styles.carouselVideo}>
                        <source src="/medias/hero.mp4" type="video/mp4" />
                    </video>
                    <div >
                        <p className={styles.welcomeText}>
                            "La photographie, c'est la poésie de la lumière."
                        </p>
                    </div>
                </div>
                {/* Vidéo 2 */}
                <div className={styles.carouselItem}>
                    <video autoPlay muted loop className={styles.carouselVideo}>
                        <source src="/medias/video2.mp4" type="video/mp4" />
                    </video>
                    <div >
                        <p className={styles.welcomeText}>
                            "Chaque instant mérite d'être capturé."
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className={styles.servicesSection}>
            <h1 className={styles.sectionTitle}>Nos Services</h1>
            <p className={styles.sectionDescription}>Découvrez les activités a l'ordre lors de nos differents evenements.</p>
            <div className={styles.cardsSection}>
                <div className={styles.card}>
                    <Image src={camera} alt="Photographie Professionnelle" width={20} height={20} className={styles.icon} />
                    <h2>Photographie Professionnelle</h2>
                    <p>Comment immortalisez vos moments avec des photos de qualité supérieure.</p>
                    <button className={styles.ctaButton}>En savoir plus</button>
                </div>
                <div className={styles.card}>
                    <Image src={caVideo} alt="Production Vidéo" className={styles.icon} />
                    <h2>Production Vidéo</h2>
                    <p>Apprenez à capturer vos événements en vidéo avec un montage cinématique.</p>
                    <button className={styles.ctaButton}>En savoir plus</button>
                </div>
                <div className={styles.card}>
                    <Image src={edAndRetouche} alt="Édition & Retouche" className={styles.icon} />
                    <h2>Édition & Retouche</h2>
                    <p>Apprendre a retoucher  des photos et vidéos comme des experts.</p>
                    <button className={styles.ctaButton}>En savoir plus</button>
                </div>
                <div className={styles.card}>
                    <Image src={creation} alt="Création de Contenu" className={styles.icon} />
                    <h2>Création de Contenu</h2>
                    <p>Concevez du contenu personnalisé pour vos réseaux sociaux.</p>
                    <button className={styles.ctaButton}>En savoir plus</button>
                </div>
            </div>
        </section>

        {/* Making-of */}
        <section className={styles.makingOf}>
            <h1 className={styles.sectionTitle}>Making-of</h1>
            <p className={styles.sectionDescription}>
                Découvrez les coulisses de nos créations photographiques et apprenez
                comment nous réalisons nos chefs-d'œuvre visuels.
            </p>
            <video controls className={styles.makingOfVideo}>
                <source src="/medias/making-of.mp4" type="video/mp4" />
            </video>
        </section>

        <section className={styles.themes}>
            <h1 className={styles.sectionTitle}>Découvrez Nos Thèmes</h1>
            <p className={styles.sectionDescription}>
                Explorez les univers captivants que nous mettons à votre disposition pour des moments inoubliables.
            </p>
            <div className={styles.themesGrid}>
                {/* Thème Portrait */}
                <div className={styles.themeItem}>
                    <div className={styles.themeOverlay}>
                        <h2>Portraits:</h2>
                        <p> Capturez l'âme de vos sujets à travers nos portraits artistiques.</p>
                    </div>
                    <Image src={portrait} alt="Portraits" width={300} height={200} className={styles.themeImage} />
                    <button className={styles.ctaButton}>En savoir plus</button>
                </div>
                {/* Thème Paysages */}
                <div className={styles.themeItem}>
                    <div className={styles.themeOverlay}>
                        <h2>Paysages:</h2>
                        <p> Découvrez la beauté naturelle avec nos clichés époustouflants.</p>
                    </div>
                    <Image src={paysage} alt="Paysages" width={300} height={200} className={styles.themeImage} />
                    <button className={styles.ctaButton}>En savoir plus</button>
                </div>
                {/* Thème Macro */}
                <div className={styles.themeItem}>
                    <div className={styles.themeOverlay}>
                        <h2>Macro:</h2>
                        <p>Plongez dans les détails avec nos images macro impressionnantes.</p>
                    </div>
                    <Image src={macro} alt="Macro" className={styles.themeImage} />
                    <button className={styles.ctaButton}>En savoir plus</button>
                </div>
            </div>
        </section>
    </>


}

