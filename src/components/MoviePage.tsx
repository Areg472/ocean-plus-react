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

export function MoviePage({
  creator = "",
  title = "",
  year = 0,
  genres = "",
  movieLink = "",
}) {
  const movieTitleLow = title?.toLowerCase();

  const top = title == "Caillou The Movie";
  const bottom = title == "Unhappy 25 Years Little Brat";

  {
    /*
  let motionEnter = 100;
  let motionExit = -100;

  if (title == "Caillou The Movie" || title == "Carlos Birthday Gone Wrong") {
    motionEnter = -100;
  }

  if (title == "Unhappy 25 Years Little Brat" || title == "Steamboat Willie") {
    motionExit = 100;
  }
*/
  }

  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  const isSpooky = title == "Jack Paul Spooktacular";

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
                    <iframe
                      frameBorder="0"
                      className="theframe"
                      src="https://mega.nz/embed/ttBH1A5K#Oi2Zpd-Wq4S05rc3HFUmGbIXLSJ6jvwbyD7ON9pzYCE"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <iframe
                      frameBorder="0"
                      className="theframe"
                      src="https://mega.nz/embed/c8pUBbxA#c8Rc9M8EPOzmltE6xyg26b_H65zzF1E-0ZC9MPsht-E"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>
            ) : (
              <iframe
                frameBorder="0"
                className="theframe mt-14"
                src={movieLink}
                allowFullScreen
              ></iframe>
            )}
          </div>
        </motion.div>
      </body>
    </>
  );
}
