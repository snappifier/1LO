import React, { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import App from './App.jsx';

const queryClient = new QueryClient();

const LazySpeedInsights = lazy(() =>
    import('@vercel/speed-insights/react').then(mod => ({ default: mod.SpeedInsights }))
);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
            <Suspense fallback={null}>
                <LazySpeedInsights />
            </Suspense>
        </QueryClientProvider>
    </StrictMode>
);
