import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import HelmetWrapper from "./components/HelmetWrapper.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetWrapper>
            <App />
        </HelmetWrapper>
    </StrictMode>
)
