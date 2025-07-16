import EventPortraits from '@/components/EventPortaits';
/**
 * @type {import { 'next'}.Metadata}
 */
export const metadata = {
    title: "event1",
    description: "bienvenu dans l'univers des paysages",
};
export default function Event1Details() {
    return (
        <div>
            <EventPortraits />
        </div>
    );
}
