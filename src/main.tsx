import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import {StrictMode} from "react";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "@/dev";
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '37e3dcd2-6459-48f8-96c4-1292a1aab76a',
    clientToken: 'pub027789559e0e7b3b2407604a07a2edbb',
    site: 'us5.datadoghq.com',
    service: 'ocean+',
    env: '<ENV_NAME>',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <DevSupport
                ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
            >
            <App />
            </DevSupport>
        </HelmetProvider>
    </StrictMode>
)
