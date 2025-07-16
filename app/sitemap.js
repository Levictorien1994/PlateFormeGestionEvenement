/**
 * @returns {import("next").MetadataRoute.Sitemap}
 */
export default function sitemap() {
    return [
        {
            url: 'http://localhost:3000/',
            lastModified: new Date(), // Date de dernière mise à jour
            changeFrequency: 'monthly', // Fréquence de mise à jour recommandée
            priority: 0.8 // Priorité pour les moteurs de recherche (1 = max, 0 = min)
        },
        {
            url: 'http://localhost:3000/Apropos',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.2
        },
        {
            url: 'http://localhost:3000/events',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/events/event1',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7
        },
        {
            url: 'http://localhost:3000/events/event2',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7
        },
        {
            url: 'http://localhost:3000/Contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3
        },
        {
            url: 'http://localhost:3000/Galerie',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/Reservation',
            lastModified: new Date(),
            changeFrequency: 'monthly',
        },
    ];
}