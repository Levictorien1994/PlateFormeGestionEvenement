"use client";

import { useActionState } from "react";
import { envoyerContact } from "@/actions/envoyerContact"; // ✅ Import de l'action serveur
import FormInput from "@/components/FormInput.jsx";
import FormButton from "@/components/FormButton.jsx";

/**
 * Composant du formulaire de contact.
 */
export default function ContactForm() {
    const [formState, formAction] = useActionState(envoyerContact, {
        name: { erreur: null, valeur: "" },
        email: { erreur: null, valeur: "" },
        content: { erreur: null, valeur: "" },
        successMessage: "",
        errorMessage: "",
    });

    return (
        <form action={formAction} className="contact-form" noValidate>

            {/* Champs du formulaire avec gestion des erreurs */}
            <FormInput id="name" label="Nom" type="text" name="name" 
                defaultValue={formState.name.valeur} 
                error={formState.name.erreur} 
                />
            <FormInput id="email" label="Email" type="email" name="email" 
                defaultValue={formState.email.valeur} 
                error={formState.email.erreur} 
                />
            <FormInput id="message" label="Message" type="text" name="content" 
                defaultValue={formState.content.valeur} 
                error={formState.content.erreur} 
                />
            {/* Affichage des messages de succès ou d'erreur */}
            {formState.successMessage && <p className="success-message">{formState.successMessage}</p>}
            {formState.errorMessage && <p className="error-message">{formState.errorMessage}</p>}
            
            <FormButton text="Envoyer" />
        </form>
    );
}
