//importation des modules et liens
import Image from 'next/image';
import styles from './EventCard.module.css';
import Link from 'next/link';
//definition de la composante EventCard
export default function EventCard({
    title,
    description,
    date,
    location,
    price,
    videos,
    image,
    reservationLink
}) {
    return (
        <>    {/*  Carrousel Vidéo */}
            <section className={styles.carousel}>
                <div className={styles.carouselContainer}>
                    {videos.map((video, index) => (
                        <div key={index} className={styles.carouselItems}>
                            <video autoPlay muted loop className={styles.carouselVideo}>
                                <source src={video} type="video/mp4" />
                            </video>
                            <div >
                                <p className={styles.welcomeText}>
                                    "Chaque image raconte une histoire."
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/*  Details de l'evenement */}
            <section className={styles.retouche}>
                <h1 className={styles.sectionTitle}>{title}</h1>
                <p className={styles.sectionDescription}>{description}</p>
                <p className={styles.eventDetails}>
                    <strong>Date:</strong> {date} | <strong>Lieu:</strong> {location} | <strong>Prix:</strong> {price}
                </p>
                <video controls className={styles.retoucheVideo}>
                    <source src={videos[0]} type="video/mp4" />
                </video>
            </section>

            <section className={styles.retouche}>
                <Image src={image} alt="Illustration de l'événement" width={300} height={200} className={styles.themeImage} />
                <p className={styles.sectionDescription}>
                    Pourquoi participer ? Chaque événement est une opportunité unique d'apprentissage et de partage.
                </p>
            </section>

            <section className={styles.reserveSection}>
                <Link href={reservationLink} className={styles.reserveLink}>Réservez votre place maintenant </Link>
            </section>
        </>
    );
}
