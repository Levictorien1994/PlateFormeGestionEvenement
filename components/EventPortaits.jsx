// importatation des composantes EventCard
import EventCard from './EventCard';
import captureImage from '@/public/EventsMedias/captureImage.jpg';

/*declaration des composante de EventPortraits*/
export default function EventPortraits() {
    return (
        <EventCard
            title="Maîtrisez l'art de capturer des portraits authentiques et captivants"
            description="Découvrez l'art de la photographie de portrait dans un cadre inspirant..."
            date="17 février 2025"
            location="Studio Lumière, OTTAWA"
            price="50 $"
            videos={["/EventsMedias/PortraitsVideo.mp4", "/EventsMedias/cadrePhotos.mp4"]}
            image={captureImage}
            reservationLink="/Reservation"
        />
    );
}
