import {Navbar} from "./components/navbar.tsx"
import {Outlet} from "react-router-dom"
import {Footer} from "./components/footer.tsx"
import { SEO } from './components/SEO'

export function Layout() {
    return (
        <>
            <head>
                <SEO title='Ocean+'
                     description='The place for Vyond movies!'
                     name='Ocean+'
                     type='article'
                     twittercard='summary_large_image'
                     image={'https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg'}/>
            </head>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}