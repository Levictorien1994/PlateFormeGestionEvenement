import EventList from '@/components/EventList';
import styles from '@/components/EventList.module.css';

const eventsData = [
    {
        priority: "true",
        id: 1,
        image: '/medias/portrait2.png', // Chemin absolu depuis "public"
        title: 'Nos differents portrait',
        date: 'derniere mise a jour:11/12/2024',
        description: 'Nos portait retrassse le parcour extraordinaire de notre structure de puis sa creation a nos jour',
        link: '',
    },
    {
        id: 2,
        image: '/medias/paysage.webp',
        title: 'Nos Meilleur paysage',
        date: ' dernier mise a jour:12-11-2024',
        description: 'specialiste de la nature elle est pationner par son travail.',
        link: '',
    },

];
/**
 * @type {import { 'next'}.Metadata}
 */
export const metadata = {
    title: "Galerie",
    description: "decouvre l'univers de notre galerie ",
};
export default function Galerie() {
    return (
        <div>
            <h1 className={styles.title}>Decouvrez l'ensemble de nos galerie photos</h1>
            <EventList events={eventsData} ></EventList>
        </div>
    );
}
