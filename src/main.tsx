import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import {StrictMode} from "react";
import { SpeedInsights } from '@vercel/speed-insights/react';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SpeedInsights />
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </StrictMode>
)
