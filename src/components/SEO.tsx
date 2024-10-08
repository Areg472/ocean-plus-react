import { Helmet } from 'react-helmet';

interface SEOProps {
    title: string;
    description: string;
    name: string;
    type: string;
    image?: string;
}

export function SEO({ title, description, name, type, image }: SEOProps) {
    return (
        <Helmet>
            { /* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description}/>
            { /* End standard metadata tags */}

            { /* Facebook tags */}
            <meta property="og:type" content={type}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={image}/>
            { /* End Facebook tags */}

            { /* Twitter tags */}
            <meta name="twitter:card" content={type}/>
            <meta name="twitter:creator" content={name}/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={image}/>
            { /* End Twitter tags */}
        </Helmet>
    );
}
