import { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';

interface HelmetWrapperProps {
    children: ReactNode;
}

const HelmetWrapper = ({ children }: HelmetWrapperProps) => {
    return (
        <HelmetProvider>
            {children}
        </HelmetProvider>
    );
};

export default HelmetWrapper;
