import './contactus.css'
import Turnstile, {useTurnstile} from "react-turnstile";
import MetaTags from "../components/MetaTags.tsx";
import {Navbar} from "@/components/navbar.tsx";
import {Footer} from "@/components/footer.tsx";

// Add Heap declaration
declare global {
    interface Window {
        heap: {
            identify: (uniqueId: string, properties?: object) => void;
        }
    }
}

export function Contactus() {
    const turnstile = useTurnstile();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const name = formData.get('name') as string;

        // Identify user in Heap
        if (typeof window.heap !== 'undefined') {
            window.heap.identify(email, {
                name: name,
                email: email
            });
        }

        // Submit form
        e.currentTarget.submit();
    };

    return (
        <>
            <MetaTags
                title="Ocean+ - Contact Us"
                description="The contact us for Ocean+"
                image="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg"
                name="Ocean+"
            />
            <Navbar/>
            <body>
            <div className="contact">
                <h1>Contact Us</h1>
                <h2 className="mt-2.5">Contact us for movies by filling out the form below. If you have any other stuff, email us at
                    oceanplus@oceanbluestream.com</h2>
                <form onSubmit={handleSubmit} action="https://submit-form.com/dY5qR0N3q" className="form">
                    <label htmlFor="name" className="nametext">Name</label><br/>
                    <input type="text" id="name" name="name" placeholder="Name" className="field otherfield" required={true}/><br/>
                    <label htmlFor="email" className="emailtext">Email</label><br/>
                    <input type="email" id="email" name="email" placeholder="Email" className="field otherfield"
                           required={true}/><br/>
                    <label htmlFor="message" className="movietext">Movie link</label><br/>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        className="field textarea mb-2.5"
                        required={true}
                    ></textarea><br/>
                    <Turnstile
                        sitekey="0x4AAAAAAAYxUbQvN-b9P7bk"
                        onVerify={(token) => {
                            fetch("/Contact-Us", {
                                method: "POST",
                                body: JSON.stringify({ token }),
                            }).then((response) => {
                                if (!response.ok) turnstile.return('Turnstile token successfuly validated.');
                            });
                        }}
                    />
                    <button type="submit" className="submit">Send</button>
                </form>
            </div>
            </body>
            <Footer/>
        </>
    )
}