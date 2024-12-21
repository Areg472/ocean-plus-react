import "./homepage.css";
import { Link } from "react-router-dom";
import MetaTags from "../components/MetaTags.tsx";
import { Navbar } from "@/components/navbar.tsx";
import { Footer } from "@/components/footer.tsx";

export function Homepage() {
  return (
    <>
      <MetaTags
        title="Ocean+ - Homepage"
        description="The place to watch Vyond content!"
        image="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg"
        name="Ocean+"
      />
      <Navbar />
      <body className="body">
        <div className="Headings">
          <h1 className="mb-4 leading-normal">Vyond movies and shows.</h1>
          <h2 className="mb-1.5 leading-normal">
            Anywhere, anytime, for free, no restrictions.
          </h2>
          <div className="buttonscont space-x-3">
            <Link to="/Movies">
              <input
                className="oplusbuttons mt-4 leading-loose"
                type="button"
                value="Access the website"
              />
            </Link>
            <Link to="/Privacy-policy">
              <input
                className="oplusbuttons mt-4 leading-loose"
                type="button"
                value="Privacy Policy"
              />
            </Link>
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
}
