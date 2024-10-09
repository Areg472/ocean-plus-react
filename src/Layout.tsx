import {Navbar} from "./components/navbar.tsx"
import {Outlet} from "react-router-dom"
import {Footer} from "./components/footer.tsx"
import { HelmetProvider } from 'react-helmet-async';

export function Layout() {
    return (
        <HelmetProvider>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </HelmetProvider>
    )
}