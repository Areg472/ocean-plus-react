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
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {useState} from "react";

export function Jpspooktacular()
{
    const [isChecked, setIsChecked] = useState(false)

    const handleSwitchChange = () => {
        setIsChecked(!isChecked)
    }

    return(
        <>
            <MetaTags
                title="Ocean+ - Jack Paul Spooktacular"
                description="Watch Jack Paul Spooktacular on Ocean+ for free!"
                image="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg"
                name="Ocean+"
            />
            <body>
            <SidebarProvider>
                <AppSidebar/>
                <SidebarTrigger/>
            </SidebarProvider>
            <div>
                <h1 className="leading-normal issue">Jack Paul Spooktacular</h1>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Who is the creator of this movie?</AccordionTrigger>
                        <AccordionContent className="accord">
                            Created by Rosie Bros Studios
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
                            The genres are: Adventure/Horror/Comedy/Crossover
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center space-x-2 p-4">
                        <Label htmlFor="iframe-switch" className="text-sm font-medium">
                            2D
                        </Label>
                        <Switch id="iframe-switch" checked={isChecked} onCheckedChange={handleSwitchChange}/>
                        <Label htmlFor="iframe-switch" className="text-sm font-medium">
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
            </div>
            </body>

        </>
    )
}