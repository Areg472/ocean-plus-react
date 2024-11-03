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

export function Nightshiftsurvival()
{
    return(
        <>
            <MetaTags
                title="Ocean+ - Nightshift Survival"
                description="Watch Nightshift Survival on Ocean+ for free!"
                image="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg"
                name="Ocean+"
            />
            <body>
            <SidebarProvider>
                <AppSidebar/>
                <SidebarTrigger/>
            </SidebarProvider>
            <div>
                <h1 className="leading-normal issue">Nightshift Survival</h1>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Who is the creator of this movie?</AccordionTrigger>
                        <AccordionContent className="accord">
                            Created by RichsmondBlazer Studios
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>When was it released?</AccordionTrigger>
                        <AccordionContent className="accord">
                            It was released in 2023
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What are the genres?</AccordionTrigger>
                        <AccordionContent className="accord">
                            The genres are: Supernatural/Horror/Adventure/Thriller/Mystery
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <iframe frameBorder="0"
                        className="mt-14 theframe"
                        src="https://mega.nz/embed/d0YGkBgD#s9FyBYuHq3Qq0Og20lPW0-9wo4XDDSjYc2qBHnSING0"
                        allowFullScreen></iframe>
            </div>
            </body>

        </>
    )
}