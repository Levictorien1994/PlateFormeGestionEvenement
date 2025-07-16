// importatation des composantes EventCard
import EventCard from './EventCard';
import captureImage from '@/public/EventsMedias/captureImage.jpg';
/*declaration des composante de EventPaysage*/
export default function EventPaysage() {
    return (
        <EventCard
            title="Plongez dans l'univers de la photographie des paysages et sublimez vos clichés."
            description="Découvrez l'art de la photographie de paysage dans un cadre inspirant..."
            date="16 février 2025"
            location="Studio Lumière, OTTAWA"
            price="50 $"
            videos={["/EventsMedias/paysagevideo.mp4", "/EventsMedias/video.mp4"]}
            image={captureImage}
            reservationLink="/Reservation"
        />
    );
}
