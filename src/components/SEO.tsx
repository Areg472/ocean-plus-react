import { Helmet } from 'react-helmet';

interface SEOProps {
    title: string;
    description: string;
    name: string;
    type: string;
    url?: string;
    image?: string;
    twittercard?: string;

}

export function SEO({ title, description, name, type, image, twittercard, url }: SEOProps) {
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
            <meta property="og:url" content={url}/>
            { /* End Facebook tags */}

            { /* Twitter tags */}
            <meta name="twitter:card" content={twittercard}/>
            <meta name="twitter:creator" content={name}/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={image}/>
            <meta name="twitter:url" content={url}/>


            { /* End Twitter tags */}
        </Helmet>
    );
}
