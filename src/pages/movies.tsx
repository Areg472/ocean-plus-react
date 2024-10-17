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
                    <div className="row-1 space-x-2.5 mt-2">
                        <div className="col-1">
                            <img src="https://github.com/Areg472/ocean-plus-react/blob/main/src/pictures/Cailou-the-movie-thumbnail00086400.png?raw=true" alt="Caillou movie"/>
                        </div>
                        <div className="col-2">
                            <img src="https://github.com/Areg472/ocean-plus-react/blob/main/src/pictures/CFTWCFTL-The-Movie-ocean-poster-with-the-template00086400.png?raw=true" alt="cftwcftl movie 123"/>
                        </div>
                        <div className="col-3">
                            <img src="https://github.com/Areg472/ocean-plus-react/blob/main/src/pictures/CFTWCFTL-The-Movie-4-ocean-poster-with-the-template00086400.png?raw=true" alt="cftwcftl movie 4"/>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}