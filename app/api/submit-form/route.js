
import { NextResponse } from "next/server";

export async function POST(request) {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const content = formData.get("content");
    const errors = {};

    if (!name) {
        errors.name = "Le nom est requis.";
    }

    if (!email) {
        errors.email = "L'adresse email est requise.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "L'adresse email est invalide.";
    }

    if (!content) {
        errors.content = "Le message est requis.";
    } else if (content.length < 10) {
        errors.content = "Le message doit contenir au moins 10 caractères.";
    }

    if (Object.keys(errors).length > 0) {
        return NextResponse.json({ errors }, { status: 400 });
    }

    console.log("Données reçues :", { name, email, content });
    return NextResponse.json({ success: true });
}
