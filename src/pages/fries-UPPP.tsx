import MetaTags from "@/components/MetaTags.tsx";
import { Navbar } from "@/components/navbar.tsx";
import { Footer } from "@/components/footer.tsx";

export function Friesup() {
  return (
    <>
      <MetaTags
        title="Ocean+ - FRIES UPPPPP🍟🍟🍟"
        description="i don't think im sane"
        image="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg"
        name="Ocean+"
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="me-fries text-center">
            <h1>FRIES UPPPPPPP 🍟🍟🍟🍟</h1>
            <h1>FREE FRIES FOR EVERYONE!!!</h1>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
