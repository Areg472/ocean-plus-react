import {Navbar} from "@/components/navbar.tsx";
import {Footer} from "@/components/footer.tsx";

export function Privacy() {
    return(
        <>
            <Navbar/>
            <body>
                <div className="container">
                    <p className="text-2xl leading-loose">
                        By using Ocean+ your session data will be collected by Heap.
                    </p>
                    <p className="text-2xl leading-loose">
                        We don't sell your data to third party companies.
                    </p>
                    <p className="text-2xl leading-loose">
                        By visiting any Ocean+ page your request info, Network service provider, Postal code(in some
                        countries), User Agent, IP address and request codes will be stored on a logging service for 3
                        days before deleted.
                    </p>
                    <p className="text-2xl leading-loose">
                        By visiting anything on Ocean+ for more than 30 seconds then your session will be recorded by
                        using Hotjar.
                    </p>
                </div>
            </body>
            <Footer/>
        </>
    )
}