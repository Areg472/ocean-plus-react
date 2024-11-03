import MetaTags from "@/components/MetaTags.tsx";
import {Navbar} from "@/components/navbar.tsx";
import {Footer} from "@/components/footer.tsx";

export function Fourofour() {
    return(
        <>

            <MetaTags
                title='Ocean+ - 404'
                description='WHY R U HERE?!'
                image='https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg'
                name='Ocean+'
            />
            <Navbar/>
            <body>
                <div className="Headings">
                    <h1 className="text-3xl">Hello, alien. Click on the button below to go back.</h1>
                    <a href="https://oceanbluestream.com/homepage"><button className="button mt-6">The button</button></a>
                </div>
            </body>
            <Footer/>
        </>
    )
}