import {Navbar} from "./components/navbar.tsx"
import {Outlet} from "react-router-dom"

export function Layout() {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}