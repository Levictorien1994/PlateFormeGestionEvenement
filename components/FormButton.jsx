"use client";

import styles from './FormButton.module.css';

export default function FormButton({ text, onClick }) {
    return (
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    );
}
