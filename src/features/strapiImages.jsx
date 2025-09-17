import { getStrapiMedia } from './fetcher.jsx';

// Obiekt który będzie przechowywał zdjęcia
export const images = {};

// Funkcja do pobierania i organizowania zdjęć
export const fetchAndOrganizeStrapiImages = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/upload/files`);

        if (!response.ok) {
            throw new Error('Błąd podczas pobierania zdjęć');
        }

        const files = await response.json();

        // Organizuj zdjęcia po nazwach
        files.forEach(file => {
            const nameWithoutExtension = file.name.split('.').slice(0, -1).join('.').toLowerCase();

            // oryginał
            if (file.url) {
                images[nameWithoutExtension] = getStrapiMedia(file.url);
            }

            // dodatkowe formaty
            if (file.formats) {
                Object.entries(file.formats).forEach(([formatName, formatData]) => {
                    if (formatData?.url) {
                        images[`${nameWithoutExtension}_${formatName}`] = getStrapiMedia(formatData.url);
                    }
                });
            }
        });

        console.log('✅ Załadowano zdjęcia z Strapi:', Object.keys(images));
        return images;

    } catch (error) {
        console.error('❌ Błąd podczas ładowania zdjęć:', error);
        return {};
    }
};

// Automatycznie wykonaj fetch przy imporcie
fetchAndOrganizeStrapiImages();

// Eksportuj obiekt zdjęć
export default images;
