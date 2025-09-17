import { useState } from 'react';

const OptimizedImage = ({
                            src,
                            alt,
                            className = "",
                            loading = "lazy",
                            onLoad,
                            onError,
                            ...props
                        }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleLoad = (e) => {
        setIsLoaded(true);
        onLoad && onLoad(e);
    };

    const handleError = (e) => {
        setHasError(true);
        onError && onError(e);
    };

    if (hasError) {
        return (
            <div className={`flex items-center justify-center bg-gray-100 text-gray-500 ${className}`}>
                <span>Błąd ładowania obrazu</span>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
            loading={loading}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            {...props}
        />
    );
};

export default OptimizedImage;