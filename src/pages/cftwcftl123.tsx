import MetaTags from "@/components/MetaTags.tsx";
import {AppSidebar} from "@/components/app-sidebar.tsx";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar.tsx";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import "./moviepage.css";
import {motion} from "motion/react";

export function Cftwcftl123()
{
    return(
        <>
            <MetaTags
                title="Ocean+ - CFTWCFTL The Movie 123"
                description="Watch CFTWCFTL The Movie 123 on Ocean+ for free!"
                image="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg"
                name="Ocean+"
            />
            <body>
            <SidebarProvider>
                <AppSidebar/>
                <SidebarTrigger/>
            </SidebarProvider>
            <div>
                <h1 className="leading-normal issue">CFTWCFTL The Movie 123</h1>
                <Accordion type="single" collapsible>
                    <motion.div whileHover={{scale: 1.045}}
                                transition={{ease: ["circInOut"]}}>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Who are the creators of this movie?</AccordionTrigger>
                            <AccordionContent className="accord">
                                Created by Veyshal & 1Leon
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.045}}
                                transition={{ease: ["circInOut"]}}>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>When was it released?</AccordionTrigger>
                            <AccordionContent className="accord">
                                It was released in 2022
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.045}}
                                transition={{ease: ["circInOut"]}}>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>What are the genres?</AccordionTrigger>
                            <AccordionContent className="accord">
                                The genres are: Animation/Action/Adventure/Comedy/Crime
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>
                </Accordion>
                <iframe frameBorder="0"
                        className="mt-14 theframe"
                        src="https://mega.nz/embed/N0AU3bhC#weuJr5LbTDpHubcVgBxBrecJCwZQ7RimlbU3r2TiB5w"
                        allowFullScreen></iframe>
            </div>
            </body>

        </>
    )
}