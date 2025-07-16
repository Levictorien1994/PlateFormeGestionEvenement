import Image from 'next/image';
import Link from 'next/link';
import styles from './EventList.module.css';
export default function EventList({ events }) {
    return (
        <section className={styles.eventList}>
            <div className={styles.grid}>
                {events.map((event) => (
                    <div key={event.id} className={styles.card}>
                        {/* Image de l'événement */}
                        <Image
                            priority=" "
                            src={event.image}
                            alt={event.title}
                            width={300}
                            height={200}
                            className={styles.cardImage}
                        />
                        {/* Titre et description */}
                        <h2 className={styles.cardTitle}>{event.title}</h2>
                        <p className={styles.cardDate}>{event.date}</p>
                        <p className={styles.cardDescription}>{event.description}</p>
                        {/* Bouton avec un lien  */}
                        <Link href={event.link}>
                            <button className={styles.cardButton}>Voir les détails </button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
