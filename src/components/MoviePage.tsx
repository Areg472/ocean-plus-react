import MetaTags from "@/components/MetaTags.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "../pages/moviepage.css";
import { motion } from "motion/react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import SearchPage from "@/components/SearchPage.tsx";

export function MoviePage({
  creator = "",
  title = "",
  year = 0,
  genres = "",
  movieLink = "",
  movieLink_2 = "",
}) {
  const movieTitleLow = title?.toLowerCase();

  const top = title == "Caillou The Movie";
  const bottom = title == "Unhappy 25 Years Little Brat";

  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  const isSpooky = title == "Jack Paul Spooktacular";
  const isCaillou = title == "Caillou The Movie";
  const isVyondCinema = title == "The Vyond Cinema Movie";
  const isLittleBill = title == "Little Bill's Valendies Movie";
  const isJPChristmas = title == "It's Jack Paul Christmas";
  const isCarlo = title == "Carlos Birthday Gone Wrong";
  const isCFT123 = title == "CFTWCFTL The Movie 123";
  const isCFT4 = title == "CFTWCFTL The Movie 4";
  const isCFT5 = title == "CFTWCFTL The Movie 5";
  const isGABRICKS = title == "GA Bricks The Movie";
  const isGoofus = title == "Goofus & Doofus";
  const isGoofus2 = title == "Goofus & Doofus 2";

  return (
    <>
      <MetaTags
        title={`Ocean+ - ${title}`}
        description={`Watch ${movieTitleLow} on Ocean+ for free!`}
        image="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg"
        name="Ocean+"
      />
      <body>
        <motion.div
          initial={{ opacity: 0, y: top ? 100 : -100 }}
          transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: bottom ? -100 : 100 }}
        >
          <div className="px-4 md:px-6 lg:px-8">
            <h1 className="issue text-center leading-normal lg:text-left">
              {title}
            </h1>
            <div className="mt-2 mb-2 flex justify-center">
              <SearchPage />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="w-full">
                <Accordion type="single" collapsible>
                  <motion.div
                    whileHover={{ scale: 1.045 }}
                    transition={{ ease: ["circInOut"] }}
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        Who is the creator of this movie?
                      </AccordionTrigger>
                      <AccordionContent className="accord">
                        Created by {creator}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.045 }}
                    transition={{ ease: ["circInOut"] }}
                  >
                    <AccordionItem value="item-2">
                      <AccordionTrigger>When was it released?</AccordionTrigger>
                      <AccordionContent className="accord">
                        It was released in {year}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.045 }}
                    transition={{ ease: ["circInOut"] }}
                  >
                    <AccordionItem value="item-3">
                      <AccordionTrigger>What are the genres?</AccordionTrigger>
                      <AccordionContent className="accord">
                        The genres are: {genres}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                </Accordion>
              </div>
              <div className="w-full">
                {isSpooky ? (
                  <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center space-x-2 p-4">
                      <Label
                        htmlFor="iframe-switch"
                        className="mb-1 text-sm font-medium"
                      >
                        2D
                      </Label>
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Switch
                          id="iframe-switch"
                          checked={isChecked}
                          onCheckedChange={handleSwitchChange}
                        />
                      </motion.div>
                      <Label
                        htmlFor="iframe-switch"
                        className="mb-1 text-sm font-medium"
                      >
                        3D
                      </Label>
                    </div>
                    <div className="w-full">
                      {isChecked ? (
                        <div className="relative pt-[56.25%]">
                          <iframe
                            src={movieLink_2}
                            loading="lazy"
                            className="absolute top-0 h-full w-full border-0"
                            allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
                            allowFullScreen
                          ></iframe>
                        </div>
                      ) : (
                        <div className="relative pt-[56.25%]">
                          <iframe
                            src={movieLink}
                            loading="lazy"
                            className="absolute top-0 h-full w-full border-0"
                            allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
                            allowFullScreen
                          ></iframe>
                        </div>
                      )}
                    </div>
                  </div>
                ) : isCaillou ||
                  isVyondCinema ||
                  isLittleBill ||
                  isCarlo ||
                  isCFT123 ||
                  isCFT4 ||
                  isCFT5 ||
                  isGABRICKS ||
                  isGoofus ||
                  isGoofus2 ||
                  isJPChristmas ? (
                  <div className="relative pt-[56.25%]">
                    <iframe
                      src={movieLink}
                      loading="lazy"
                      className="absolute top-0 h-full w-full border-0"
                      allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="relative pt-[56.25%]">
                    <iframe
                      frameBorder="0"
                      className="absolute top-0 h-full w-full border-0"
                      src={movieLink}
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </body>
    </>
  );
}
