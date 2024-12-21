import MetaTags from "@/components/MetaTags.tsx";
import { AppSidebar } from "@/components/app-sidebar.tsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "./moviepage.css";
import { motion } from "motion/react";

export function Cailloumovie() {
  return (
    <>
      <MetaTags
        title="Ocean+ - Caillou the movie"
        description="Watch caillou the movie on Ocean+ for free!"
        image="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg"
        name="Ocean+"
      />
      <body>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
      </SidebarProvider>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
      >
        <div>
          <h1 className="issue leading-normal">Caillou The Movie</h1>
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
                  Created by Anti-Animations
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
                  The genres are:
                  Animation/Action/Adventure/Comedy/Drama/Thriller/Crime
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          </Accordion>
          <iframe
            frameBorder="0"
            className="theframe mt-14"
            src="https://mega.nz/embed/lxZ3hZ4J#D1JQqquI75mhQGD6TRyEwjD4MQ0LOdh5p4CaQ0Wn9Ac"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
      </body>
    </>
  );
}
