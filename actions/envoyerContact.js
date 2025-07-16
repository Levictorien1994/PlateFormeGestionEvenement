"use server";

import { contactServeur } from "@/actions/contact";

/**
 * @param {Object} previousFormState 
 * @param {FormData} formData 
 * @returns {Object} 
 */
export async function envoyerContact(previousFormState, formData) {
    let [erreur, newFormState, statusCode] = await contactServeur(formData);

    if (erreur) {
        newFormState.name.valeur = formData.get("name");
        newFormState.email.valeur = formData.get("email");
        newFormState.content.valeur = formData.get("content");

        return {
            ...newFormState,
            successMessage: "",
            errorMessage: `Erreur ${statusCode}: veuillez remplir correctement tous les champs.`,
        };
    } else {
        return {
            ...newFormState,
            successMessage: "Votre message a bien été envoyé !",
            errorMessage: "",
        };
    }
}
