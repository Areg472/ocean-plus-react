import MetaTags from "@/components/MetaTags.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import "../pages/moviepage.css";
import { motion } from "motion/react";

export function ShortPage({
  creator = "",
  year = 0,
  title = "",
  shortLink = "",
}) {
  const top = "Carlos Birthday Gone Wrong" == title;
  const bottom = "Steamboat Willie" == title;
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
          <div>
            <h1 className="issue leading-normal">{title}</h1>
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
            <iframe
              frameBorder="0"
              className="theframe mt-14"
              src={shortLink}
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </body>
    </>
  );
}
