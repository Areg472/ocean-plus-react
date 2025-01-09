import MetaTags from "@/components/MetaTags.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import "../pages/moviepage.css";
import { motion } from "motion/react";

export function Jpchristmas() {
  return (
    <>
      <MetaTags
        title="Ocean+ - It's Jack Paul Christmas"
        description="Watch It's Jack Paul Christmas on Ocean+ for free!"
        image="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg"
        name="Ocean+"
      />
      <body>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
        >
          <div>
            <h1 className="issue leading-normal">It's Jack Paul Christmas</h1>
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
                    Created by Rosie Bros Studios
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
                    It was released in 2022
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
                    The genres are: Animation/Adventure/Comedy/Fantasy/Christmas
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            </Accordion>
            <iframe
              frameBorder="0"
              className="theframe mt-14"
              src="https://mega.nz/embed/RopzACCK#f8Ota8_CIRUn9nv58idK5RhvZnZJWKGwC9nyx5QfFGU"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </body>
    </>
  );
}
