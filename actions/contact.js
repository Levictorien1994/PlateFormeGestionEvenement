"use server"
export async function contactServeur(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const content = formData.get("content");

    let newFormState = {
        name: { erreur: null, valeur: "" },
        email: { erreur: null, valeur: "" },
        content: { erreur: null, valeur: "" }
    };

    let erreur = false;

    // Validation des champs
    if (!name) {
        erreur = true;
        newFormState.name.erreur = "Le nom est requis.";
    }

    if (!email) {
        erreur = true;
        newFormState.email.erreur = "L'adresse email est requise.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        erreur = true;
        newFormState.email.erreur = "L'adresse email est invalide.";
    }

    if (!content) {
        erreur = true;
        newFormState.content.erreur = "Le message est requis.";
    } else if (content.length < 10) {
        erreur = true;
        newFormState.content.erreur = "Le message doit contenir au moins 10 caractères.";
    }

    //  Si une erreur est détectée, on retourne l'état mis à jour avec un code 400
    if (erreur) {
        return [true, newFormState, 400];
    }

    // Envoi des données à l'API
    const response = await fetch("/api/submit-form", {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        return [true, newFormState, response.status];
    }

    // Succès : on vide le formulaire
    return [false, {
        name: { erreur: null, valeur: "" },
        email: { erreur: null, valeur: "" },
        content: { erreur: null, valeur: "" }
    }];
}
