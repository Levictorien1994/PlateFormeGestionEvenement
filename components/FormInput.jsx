"use client";
import styles from './FormInput.module.css';

export default function FormInput({ label, type, name, value, onChange, error }) {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor={name}>{label}</label>
            <input
                id={name}
                className={styles.input}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required
            />
            {error && <p className={styles.error}>{error}</p>} {/* Afficher l'erreur */}
        </div>
    );
}