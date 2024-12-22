import "./contactus.css";
import Turnstile, { useTurnstile } from "react-turnstile";
import MetaTags from "../components/MetaTags.tsx";
import { Navbar } from "@/components/navbar.tsx";
import { Footer } from "@/components/footer.tsx";
import { motion } from "motion/react";

declare global {
  interface Window {
    heap: {
      identify: (uniqueId: string, properties?: object) => void;
      addUserProperties: (properties: object) => void;
    };
  }
}

export function Contactus() {
  const turnstile = useTurnstile();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;

    if (typeof window.heap !== "undefined") {
      window.heap.identify(name);

      window.heap.addUserProperties({
        name: name,
        email: email,
      });
    }

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
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8"
        >
          <div className="contact text-center w-full max-w-md mx-auto">
            <h1>Contact Us</h1>
            <h2 className="mt-2.5">
              Contact us for movies by filling out the form below. If you have any
              other stuff, email us at oceanplus@oceanbluestream.com
            </h2>
            <form
              onSubmit={handleSubmit}
              action="https://submit-form.com/dY5qR0N3q"
              className="form"
            >
              <label htmlFor="name" className="nametext">
                Name
              </label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="field otherfield rounded-md"
                required={true}
              />
              <br />
              <label htmlFor="email" className="emailtext">
                Email
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="field otherfield rounded-md"
                required={true}
              />
              <br />
              <label htmlFor="message" className="movietext">
                Movie link
              </label>
              <br />
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="field textarea mb-2.5 rounded-md"
                required={true}
              ></textarea>
              <br />
              <Turnstile
                sitekey="0x4AAAAAAAYxUbQvN-b9P7bk"
                onVerify={(token) => {
                  fetch("/Contact-Us", {
                    method: "POST",
                    body: JSON.stringify({ token }),
                  }).then((response) => {
                    if (!response.ok)
                      turnstile.return("Turnstile token successfuly validated.");
                  });
                }}
              />
              <button type="submit" className="submit">
                Send
              </button>
            </form>
          </div>

        </motion.div>
        <Footer />
      </div>
    </>
  );
}
