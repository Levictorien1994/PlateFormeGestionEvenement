import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css"

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: "Contact",
    description: "Contactez-nous pour toute information.",
};

export default function Contact() {
    return (
        <section className={styles.contactContainer}>
            <h1>Contactez-nous</h1>
            <p>Remplissez le formulaire ci-dessous pour nous contacter.</p>
            <ContactForm />
        </section>
    );
}
