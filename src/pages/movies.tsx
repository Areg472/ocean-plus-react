import "./movies.css";
import MetaTags from "../components/MetaTags.tsx";
import CarouselSection from "@/components/carousel";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function Movies() {
  const popularMovies = [
    {
      src: "https://utfs.io/f/thKihuQxhYcPR9qV068jPw6fdIECzMhtipamGqxBYSHgKr9L",
      alt: "math-warfare",
      link: "/Math-warfare",
    },
    {
      src: "https://utfs.io/f/thKihuQxhYcPULaG6TMKZeI96M7cYWXw5LuFxkzjOQmv0ghA",
      alt: "Veyshal movie",
      link: "/The-veyshal-movie",
    },
    {
      src: "https://utfs.io/f/thKihuQxhYcPLxIb067sUfwWMR5jlKuYe27zh6kLtx3rGyTm",
      alt: "unhappybrat",
      link: "/Unhappy-25-Years-Little-Brat",
    },
    {
      src: "https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Comedy-World-The-Movie-Ocean-Poster00086400.png",
      alt: "Comedy world",
      link: "/The-comedy-world-movie",
    },
    {
      src: "https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Cailou-the-movie-thumbnail00086400.png",
      alt: "caillou",
      link: "/Caillou-the-movie",
    },
    {
      src: "https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Littles-Bill-Valendies-Day-Movie-poster-ocean00086400.png",
      alt: "Little bill",
      link: "/Little-bills-valendies-movie",
    },
  ];

  const adventureMovies = [
    {
      src: "https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Goofus-Doofus-ocean-poster-with-the-template00086400.png",
      alt: "goofusdoofus1",
      link: "/Goofus-and-Doofus-1",
    },
    {
      src: "https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Cailou-the-movie-thumbnail00086400.png",
      alt: "caillou",
      link: "/Caillou-the-movie",
    },
    {
      src: "https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Its-Jack-Paul-Christmas-ocean-poster-with-the-template00086400.png",
      alt: "jpxmas",
      link: "/Its-Jack-Paul-Christmas",
    },
    {
      src: "https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/CFTWCFTL-The-Movie-4-ocean-poster-with-the-template00086400.png",
      alt: "cft4",
      link: "/Cftwcftl-the-movie-4",
    },
    {
      src: "https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Goofus-Doofus-2-ocean-poster-with-the-template00086400.png",
      alt: "goofusdoofus2",
      link: "/Goofus-and-Doofus-2",
    },
    {
      src: "https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Jack-Paul-Spooktacular-ocean-poster-with-the-template00086400.png",
      alt: "jpspooky",
      link: "/Jack-Paul-Spooktacular",
    },
  ];

  return (
    <>
      <MetaTags
        title="Ocean+ - Movies"
        description="The movies page for Ocean+"
        image="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg"
        name="Ocean+"
      />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
      >
        <div className="Headings text-center">
          <h1 className="mb-16 leading-normal">Movies and shows!</h1>

          <CarouselSection
            title="Most Popular"
            images={popularMovies}
            delay={7500}
          />

          <CarouselSection
            title="Adventure"
            images={adventureMovies}
            delay={7000}
          />

          <div className="flex w-full justify-center">
            <Link
              to="/Movie-ratings"
              className="flex w-[250px] items-center justify-center"
            >
              <button className="button mt-10 h-[30px] cursor-pointer justify-center">
                Movie age ratings
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
