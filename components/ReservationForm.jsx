"use client";

import { useState } from "react";
import FormInput from "@/components/FormInput.jsx";
import FormButton from "@/components/FormButton.jsx";

export default function ContactForm() {
    const [message, setMessage] = useState({ name: "", email: "", content: "" });

    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Message envoyé :", message);
        alert("reservation confirmé. veuillez prendre une copie de ce message  avant de fermer. Merci !");
        setMessage({ name: "", email: "" }); // Réinitialisation du formulaire
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <FormInput label="Nom" type="text" name="name" value={message.name} onChange={handleChange} />   
            <FormInput label="Email" type="email" name="email" value={message.email} onChange={handleChange} />
            <FormButton text="reserver" onClick={handleSubmit} />
        </form>
    );
}
