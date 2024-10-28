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

export function Cailloumovie()
{
    return(
        <>
            <MetaTags
                title="Ocean+ - Caillou the movie"
                description="Watch caillou the movie on Ocean+ for free!"
                image="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg"
                name="Ocean+"
            />
            <body>
            <SidebarProvider>
                <AppSidebar/>
                <SidebarTrigger/>
            </SidebarProvider>
            <div className="basis-full">
                <h1 className="leading-normal w-[950px]">Caillou The Movie</h1>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Who is the author of this movie?</AccordionTrigger>
                        <AccordionContent className="accord">
                            Created by Anti-Animations
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>When was it released?</AccordionTrigger>
                        <AccordionContent className="accord">
                            It was released in 2022
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What are the genres?</AccordionTrigger>
                        <AccordionContent className="accord">
                            The genres are: Animation/Action/Adventure/Comedy/Drama/Thriller/Crime
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <iframe width="640" height="360" frameBorder="0"
                        className="mt-14 ml-[16%] theframe"
                        src="https://mega.nz/embed/lxZ3hZ4J#D1JQqquI75mhQGD6TRyEwjD4MQ0LOdh5p4CaQ0Wn9Ac"
                        allowFullScreen></iframe>
            </div>
            </body>

        </>
    )
}