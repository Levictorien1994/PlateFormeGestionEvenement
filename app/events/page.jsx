import EventList from '@/components/EventList';
import styles from '@/components/EventList.module.css';

const eventsData = [
    {
        id: 1,
        image: '/medias/portrait2.png', // Chemin absolu depuis "public"
        title: 'Atelier Portrait',
        date: '2025-01-28',
        description: 'Maîtrisez l’art de la retouche photo professionnelle.',
        link: '/events/event1', // Lien vers la page `Event1`
    },
    {
        id: 2,
        image: '/medias/paysage2.webp', // Chemin absolu depuis "public"
        title: 'Photo en Plein Air',
        date: '2025-02-15',
        description: 'Découvrez la lumière naturelle et les paysages.',
        link: '/events/event2', // Lien vers la page `Event1`
    },
];

/**
 * @type {import { 'next'}.Metadata}
 */
export const metadata = {
    title: "evenement",
    description: "cette page presente nos different evenemnt",
};
export default function Evenements() {
    return (
        <div>
            <h1 className={styles.title}>Nos Événements</h1>
                <EventList events={eventsData} ></EventList>
        </div>     
    );
}
