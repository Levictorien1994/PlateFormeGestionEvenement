
import SectionFormulaire from "@/components/SectionFormulaire.jsx";
import ReservationForm from "@/components/ReservationForm.jsx";
/**
 * @type {import { 'next'}.Metadata}
 */
export const metadata = {
    title: "Réservation - Plateforme Photo",
    description: "Réservez votre séance photo avec nos professionnels pour capturer vos plus beaux moments.",
};

export default function reservation() {
    return (
        <SectionFormulaire title="Réserver Maintenant">
            <p>Remplissez le formulaire ci-dessous pour réserver.</p>
            <ReservationForm /> {/* Utilisation du module ReservationForm */}
        </SectionFormulaire>
    );
}
