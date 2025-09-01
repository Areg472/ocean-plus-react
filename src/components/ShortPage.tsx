import MetaTags from "@/components/MetaTags.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import "../pages/moviepage.css";
import { motion } from "motion/react";
import SearchPage from "@/components/SearchPage.tsx";

export function ShortPage({
  creator = "",
  year = "",
  title = "",
  shortLink = "",
}) {
  const top = title == "Carlos Birthday Gone Wrong";
  const bottom = title == "Steamboat Willie";
  const shortTitleLow = title?.toLowerCase();
  return (
    <>
      <MetaTags
        title={`Ocean+ - ${title}`}
        description={`Watch ${shortTitleLow} on Ocean+ for free!`}
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
                </Accordion>
              </div>
              <div className="relative pt-[56.25%]">
                <iframe
                  src={shortLink}
                  loading="lazy"
                  className="absolute top-0 h-full w-full border-0"
                  allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </body>
    </>
  );
}
