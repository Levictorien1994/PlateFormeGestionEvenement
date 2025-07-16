import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from './layout.module.css';
import "./globals.css";
export const metadata = {
    title: "Photographie Événementiels",
    description: "Ce projet consiste à développer une interface web interactive pour présenter et promouvoir des ateliers de photographie, tels que des formations sur les portraits et les paysages.",
};
export default function RootLayout({ children }) {
    return <html lang="en">
        <body className={styles.body} >
            <Header />

            <main className={styles.main}>
                {children}
            </main>

            <Footer />
        </body>
    </html>

}
