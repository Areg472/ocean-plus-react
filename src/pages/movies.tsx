import './movies.css';
import MetaTags from "../components/MetaTags.tsx";

export function Movies() {
    return (
        <>

            <MetaTags
                title="Ocean+ - Movies"
                description="The movies page for Ocean+"
                image="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg"
                name="Ocean+"
            />
            <body>
                <div className="Headings">
                    <h1 className="leading-normal">Movies and shows!</h1>
                </div>
            </body>
        </>
    )
}