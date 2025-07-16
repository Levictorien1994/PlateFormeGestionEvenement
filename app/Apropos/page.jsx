import EventList from '@/components/EventList';
import styles from '@/components/EventList.module.css';

const eventsData = [
    {
        id: 1,
        image: '/medias/paysage.webp', // Chemin absolu depuis "public"
        title: 'KENFACK VICTORIEN',
        date: 'NEE LE 2015-02-15',
        description: 'Pationné de photographie, il debut sa carriere en temps que ..... et aujaourdhui il occupe le poste de preseident',
        link: '',
    },
    {
        id: 2,
        image: '/medias/paysage2.webp',
        title: 'Martel',
        date: '2025-03-15',
        description: 'specialiste de la nature elle est pationner par son travail.',
        link: '',
    },
    {
        id: 3,
        image: '/medias/portraits.webp',
        title: 'BELVANIE',
        date: '2021-03-15',
        description: 'speciliste des portraits',
        link: '',
    },
];
/**
 * @type {import { 'next'}.Metadata}
*/
export const metadata = {
    title: "A propos",
    description: "A propos de nous",
};
export default function Apropos() {
    return (
        <div>
            <h1 className={styles.title}>A propose de nous</h1>
            <EventList events={eventsData} ></EventList>
        </div>
    );
}
