import './contactus.css'

export function Contactus() {
    return (
        <>
            <head>
                <title>Contact Us</title>
            </head>

            <body>
            <div className="contact">
                <h1>Contact Us</h1>
                <h2 className="mt-2.5">Contact us for movies by filling out the form below. If you have any other stuff, email us at
                    oceanplus@oceanbluestream.com</h2>
                <form action="https://submit-form.com/dY5qR0N3q" className="form">
                    <label htmlFor="name" className="nametext">Name</label><br/>
                    <input type="text" id="name" name="name" placeholder="Name" className="field" required={true}/><br/>
                    <label htmlFor="email" className="emailtext">Email</label><br/>
                    <input type="email" id="email" name="email" placeholder="Email" className="field"
                           required={true}/><br/>
                    <label htmlFor="message" className="movietext">Movie link</label><br/>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        className="field textarea"
                        required={true}
                    ></textarea><br/>
                    <div
                        className="cf-turnstile"
                        data-sitekey="0x4AAAAAAAYxUbQvN-b9P7bk"
                        data-callback="javascriptCallback"
                    ></div>
                    <button type="submit" className="submit">Send</button>
                </form>
            </div>
            </body>
        </>
    )
}