import { getStrapiMedia } from './fetcher.jsx';

// Obiekt który będzie przechowywał zdjęcia
export const images = {};

// Funkcja do pobierania i organizowania zdjęć
export const fetchAndOrganizeStrapiImages = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/upload/files`, );

        if (!response.ok) {
            throw new Error('Błąd podczas pobierania zdjęć');
        }

        const files = await response.json();

        // Organizuj zdjęcia po nazwach
        files.forEach(file => {
            const fileName = file.name.toLowerCase();
            const url = getStrapiMedia(file.url);

            // Dodaj oryginalną nazwę
            images[file.name] = url;

            // Dodaj wersję bez rozszerzenia (dla łatwiejszego dostępu)
            const nameWithoutExtension = file.name.split('.').slice(0, -1).join('.');
            if (nameWithoutExtension && nameWithoutExtension !== file.name) {
                images[nameWithoutExtension] = url;
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