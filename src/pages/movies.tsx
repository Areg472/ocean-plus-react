import "./movies.css";
import MetaTags from "../components/MetaTags.tsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function Movies() {
  return (
    <>
      <MetaTags
        title="Ocean+ - Movies"
        description="The movies page for Ocean+"
        image="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg"
        name="Ocean+"
      />
      <body>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
        >
          <div className="Headings text-center">
            <h1 className="mb-16 leading-normal">Movies and shows!</h1>
            <h3 className="text-4xl leading-normal">Most Popular</h3>
            <Carousel
              className="carousel dark mt-4 px-4 md:px-12 lg:px-10 relative"
              plugins={[
                Autoplay({
                  delay: 7500,
                }),
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                <CarouselItem className="md:basis-full lg:basis-1/3">
                  <Link to="/Math-warfare">
                    <img
                      src="https://utfs.io/f/thKihuQxhYcPR9qV068jPw6fdIECzMhtipamGqxBYSHgKr9L"
                      alt="math-warfare"
                    />
                  </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-full lg:basis-1/3">
                  <Link to="/The-vyond-cinema-movie">
                    <img
                      src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/2af654d3dc827c1b17668c26ec853121b9f4ad32/src/pictures/The-Vyond-Cinema-Movie-ocean-poster-with-the-template00086400.png"
                      alt="Vyond cinema"
                    />
                  </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-full lg:basis-1/3">
                  <Link to="/Unhappy-25-Years-Little-Brat">
                    <img
                      src="https://utfs.io/f/thKihuQxhYcPLxIb067sUfwWMR5jlKuYe27zh6kLtx3rGyTm"
                      alt="unhappybrat"
                    />
                  </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-full lg:basis-1/3">
                  <Link to="/The-comedy-world-movie">
                    <img
                      src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Comedy-World-The-Movie-Ocean-Poster00086400.png"
                      alt="Comedy world"
                    />
                  </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-full lg:basis-1/3">
                  <Link to="/Caillou-the-movie">
                    <img
                      src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Cailou-the-movie-thumbnail00086400.png"
                      alt="caillou"
                    />
                  </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-full lg:basis-1/3">
                  <Link to="/Little-bills-valendies-movie">
                    <img
                      src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Littles-Bill-Valendies-Day-Movie-poster-ocean00086400.png"
                      alt="Little bill"
                    />
                  </Link>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 md:left-2 md:top-1/2 lg:-left-8" />
              <CarouselNext className="absolute right-2 md:right-2 md:top-1/2 lg:-right-8" />
            </Carousel>
            <h3 className="mt-4 text-4xl leading-normal">Adventure</h3>
            <Carousel
              className="carousel dark mt-4 px-4 md:px-12 lg:px-10 relative"
              plugins={[
                Autoplay({
                  delay: 7000,
                }),
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                <CarouselItem className="md:basis-full lg:basis-1/3">
                  <Link to="/Goofus-and-Doofus-1">
                    <img
                      src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Goofus-Doofus-ocean-poster-with-the-template00086400.png"
                      alt="goofusdoofus1"
                    />
                  </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-full lg:basis-1/3">
                  <Link to="/Caillou-the-movie">
                    <img
                      src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Cailou-the-movie-thumbnail00086400.png"
                      alt="caillou"
                    />
                  </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-full lg:basis-1/3">
                  <Link to="/Its-Jack-Paul-Christmas">
                    <img
                      src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Its-Jack-Paul-Christmas-ocean-poster-with-the-template00086400.png"
                      alt="jpxmas"
                    />
                  </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-full lg:basis-1/3">
                  <Link to="/Cftwcftl-the-movie-4">
                    <img
                      src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/CFTWCFTL-The-Movie-4-ocean-poster-with-the-template00086400.png"
                      alt="cft4"
                    />
                  </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-full lg:basis-1/3">
                  <Link to="/Goofus-and-Doofus-2">
                    <img
                      src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Goofus-Doofus-2-ocean-poster-with-the-template00086400.png"
                      alt="goofusdoofus2"
                    />
                  </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-full lg:basis-1/3">
                  <Link to="/Jack-Paul-Spooktacular">
                    <img
                      src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Jack-Paul-Spooktacular-ocean-poster-with-the-template00086400.png"
                      alt="jpspooky"
                    />
                  </Link>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 md:left-2 md:top-1/2 lg:-left-8" />
              <CarouselNext className="absolute right-2 md:right-2 md:top-1/2 lg:-right-8" />
            </Carousel>
            <div className="flex justify-center w-full">
              <Link to="/Movie-ratings" className="flex w-[250px] items-center justify-center">
                <button className="button mt-10 justify-center h-[30px]">
                  Movie age ratings
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </body>
    </>
  );
}
