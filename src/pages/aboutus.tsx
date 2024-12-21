import { Navbar } from "@/components/navbar.tsx";
import { Footer } from "@/components/footer.tsx";
import {
  Cardareg,
  CardaregContent,
  CardaregHeader,
} from "@/components/ui/cardareg.tsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import {
  Cardleon,
  CardleonContent,
  CardleonHeader,
} from "@/components/ui/cardleon.tsx";
import {
  Cardveyshal,
  CardveyshalContent,
  CardveyshalHeader,
} from "@/components/ui/cardveyshal";
import {
  Cardcarlo,
  CardcarloContent,
  CardcarloHeader,
} from "@/components/ui/cardcarlo";
import { PenTool } from "lucide-react";
import MetaTags from "@/components/MetaTags.tsx";
import { GithubLanguages } from "@/components/githublanguages.tsx";
import { GlitchText } from "@/components/glitch.tsx";
import {
  Cardamon,
  CardamonContent,
  CardamonHeader,
} from "@/components/ui/cardamon";
import { motion } from "motion/react";

export function Aboutus() {
  return (
    <>
      <MetaTags
        title="Ocean+ - About Us"
        description="About the Ocean+ team and its contributors"
        image="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg"
        name="Ocean+"
      />
      <Navbar />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
      >
        <body>
        <div className="container">
          <GlitchText size="normal" text="About Us" className="mt-14" />
          <h3 className="mt-3 text-xl">Here is our team who develops Ocean+</h3>
          <div
            className="row mb-10 mt-4 flex-col justify-center space-y-6 md:mt-6 md:flex-row md:space-x-2 md:space-y-0 lg:space-x-14">
            <Cardareg className="card w-52 basis-full lg:basis-1/4">
              <CardaregHeader>
                <Avatar className="ml-[38px] md:ml-[22px] lg:ml-[38px]">
                  <AvatarImage
                    src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/uwuuu%20duck.png" />
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <h3 className="mr-1 text-xl">Areg</h3>
                <p>Main developer</p>
              </CardaregHeader>
              <CardaregContent>
                <a
                  href="https://aregus.me/"
                  className="ml-0 md:ml-4"
                  target="_blank"
                >
                  <button className="button w-24">My page</button>
                </a>
              </CardaregContent>
            </Cardareg>
            <Cardleon className="card w-52 basis-full lg:basis-1/4">
              <CardleonHeader>
                <Avatar className="ml-[38px] md:ml-[22px] lg:ml-[38px]">
                  <AvatarImage
                    src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/leon%20profile%20icon.jpg" />
                  <AvatarFallback>LE</AvatarFallback>
                </Avatar>
                <h3 className="mr-1 text-xl">Leon</h3>
                <p>2nd developer</p>
              </CardleonHeader>
              <CardleonContent>
                <a
                  href="https://www.youtube.com/@1leon000"
                  className="ml-0 md:ml-4"
                  target="_blank"
                >
                  <button className="button w-24">Youtube</button>
                </a>
              </CardleonContent>
            </Cardleon>
            <Cardveyshal className="card w-52 basis-full lg:basis-1/4">
              <CardveyshalHeader>
                <Avatar className="ml-[38px] md:ml-[22px] lg:ml-[38px]">
                  <AvatarImage
                    src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/veysshal%20profile%20icon.jpg" />
                  <AvatarFallback>VE</AvatarFallback>
                </Avatar>
                <h3 className="mr-1 text-xl">Veyshal</h3>
                <p>Founder</p>
              </CardveyshalHeader>
              <CardveyshalContent>
                <a
                  href="https://www.youtube.com/@veymations"
                  className="ml-0 md:ml-4"
                  target="_blank"
                >
                  <button className="button w-24">Youtube</button>
                </a>
              </CardveyshalContent>
            </Cardveyshal>
            <Cardcarlo className="card w-52 basis-full lg:basis-1/4">
              <CardcarloHeader>
                <Avatar className="ml-[38px] md:ml-[22px] lg:ml-[38px]">
                  <AvatarImage
                    src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/carlo%20pfp.jpg" />
                  <AvatarFallback>CR</AvatarFallback>
                </Avatar>
                <h3 className="mr-1 text-xl">Carlo</h3>
                <p>Editor</p>
              </CardcarloHeader>
              <CardcarloContent>
                <a
                  href="https://www.youtube.com/@CarloBear"
                  className="ml-0 md:ml-4"
                  target="_blank"
                >
                  <button className="button w-24">Youtube</button>
                </a>
              </CardcarloContent>
            </Cardcarlo>
          </div>
          <div
            className="row mb-10 mt-4 flex-col justify-center space-y-6 md:mt-6 md:flex-row md:space-x-2 md:space-y-0 lg:space-x-14">
            <Cardamon className="card w-52 basis-full md:basis-1/4">
              <CardamonHeader>
                <Avatar className="ml-[36px] md:ml-[28px] lg:ml-[60px]">
                  <PenTool size="60" className="ml-2 mt-4" />
                </Avatar>
                <h3 className="mr-1 text-xl">Amoniac</h3>
                <p>Designer</p>
              </CardamonHeader>
              <CardamonContent>
                <a
                  href="https://www.youtube.com/@Vino_Mikhail"
                  className="ml-0 md:ml-6"
                  target="_blank"
                >
                  <button className="button w-24">Youtube</button>
                </a>
              </CardamonContent>
            </Cardamon>
          </div>
          <GithubLanguages />
        </div>
        </body>
      </motion.div>

        <Footer />
      </>
      );
      }
