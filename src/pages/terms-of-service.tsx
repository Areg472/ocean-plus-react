import { Navbar } from "@/components/navbar.tsx";
import { Footer } from "@/components/footer.tsx";
import MetaTags from "@/components/MetaTags.tsx";

export function TermsOfService() {
  return (
    <>
      <MetaTags
        title="Ocean+ - Privacy Polivy"
        description="Privacy policy for Ocean+...!"
        image="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg"
        name="Ocean+"
      />
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="flex-1 flex items-center justify-center py-8">
          <div className="container text-center">
            <p className="text-2xl leading-loose">
              This is the TOS for the Ocean+ discord bot
            </p>
            <p className="text-2xl leading-loose">
              Don't use the bot to break rules in a server, don't use the bot to
              do stuff against Discord's TOS.
            </p>
            <p className="text-2xl leading-loose">
              Don't use the bot to create NSFW content.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
