import {useState} from 'react';

const OptimizedImage = ({
                            src,
                            alt,
                            width,
                            height,
                            className = "",
                            loading = "lazy",
                            ...props
                        }) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div className={`image-container ${className}`} style={{width, height}}>
            <img
                src={src}
                alt={alt}
                loading={loading}
                decoding="async"
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
                style={{
                    opacity: loaded ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out'
                }}
                {...props}
            />

            {!loaded && !error && (
                <div className="image-skeleton" style={{width, height}}/>
            )}

            {error && (
                <div className="image-error" style={{width, height}}>
                    <span>Błąd ładowania obrazu</span>
                </div>
            )}
        </div>
    );
};

export default OptimizedImage;