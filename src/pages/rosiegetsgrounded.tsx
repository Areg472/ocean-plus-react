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

export function Rosiegetsgrounded() {
  return (
    <>
      <MetaTags
        title="Ocean+ - Rosie Gets Grounded The Movie"
        description="Watch Rosie Gets Grounded The Movie on Ocean+ for free!"
        image="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg"
        name="Ocean+"
      />
      <body>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
      </SidebarProvider>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
      >
        <div>
          <h1 className="issue leading-normal">
            Rosie Gets Grounded The Movie
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
                  Created by Jett Kingston
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
                  It was released in 2024
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
                  The genres are: Crime/Comedy/Fantasy/Adventure
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          </Accordion>
          <iframe
            frameBorder="0"
            className="theframe mt-14"
            src="https://mega.nz/embed/1p5CWDjI#rGfD5LO--Bpbcsgm7ipJepflVaa-0T6pk4kBtL42rT8"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
      </body>
    </>
);
}
