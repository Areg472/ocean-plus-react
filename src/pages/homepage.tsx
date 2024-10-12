import './homepage.css';
import {Link} from "react-router-dom"
import MetaTags from "../components/MetaTags.tsx";

export function Homepage() {
    return (
        <>
            <MetaTags
                title='Ocean+ - Homepage'
                description='The place to watch Vyond content!'
                image='https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg'
                name='Ocean+'
            />
            <body className="body">
            <div className="Headings">
                <h1 className="mb-4 leading-normal">Vyond movies and shows.</h1>
                <h2 className="mb-1.5 leading-normal">Anywhere, anytime, for free, no restrictions.</h2>
                <Link to="/Movies"><input className="oplusbuttons leading-loose mt-4" type="button" value="Access As Guest"/></Link>
            </div>
            </body>
        </>
    )
}
