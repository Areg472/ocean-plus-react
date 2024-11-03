import {
    Category,
    Component,
    Variant,
    Palette,
} from "@react-buddy/ide-toolbox";
import {Switch} from "@/components/ui/switch.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {Label} from "@/components/ui/label.tsx";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import MetaTags from "@/components/MetaTags.tsx";
import {Navbar} from "@/components/navbar.tsx";
import {Footer} from "@/components/footer.tsx";
import {AppSidebar} from "@/components/app-sidebar.tsx";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";


export const PaletteTree = () => (
    <Palette>
        <Category name="ShadCN">
            <Component name="Switch">
                <Variant>
                    <Switch/>
                </Variant>
            </Component>
            <Component name="Tabs">
                <Variant>
                    <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="password">Password</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">Make changes to your account here.</TabsContent>
                        <TabsContent value="password">Change your password here.</TabsContent>
                    </Tabs>
                </Variant>
            </Component>
            <Component name="Label">
                <Variant>
                    <Label htmlFor="email">Your email address</Label>
                </Variant>
            </Component>
            <Component name="Card">
                <Variant>
                    <Card>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </Variant>
            </Component>
            <Component name="Avatar">
                <Variant>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Variant>
            </Component>
            <Component name="Carousel">
                <Variant>
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem>...</CarouselItem>
                            <CarouselItem>...</CarouselItem>
                            <CarouselItem>...</CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </Variant>
            </Component>
            <Component name="Button">
                <Variant>
                    <Button variant="outline">Button</Button>
                </Variant>
            </Component>
            <Component name="Accordion">
                <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Hi1
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                        Hi2
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                        Hi3
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            </Component>
        </Category>
        <Category name="My Components">
            <Component name="Meta">
                <Variant>
                    <MetaTags
                        title='Ocean+ - Homepage'
                        description='The place to watch Vyond content!'
                        image='https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg'
                        name='Ocean+'
                    />
                </Variant>
            </Component>
            <Component name="Navbar">
                <Variant>
                    <Navbar/>
                </Variant>
            </Component>
            <Component name="Footer">
                <Variant>
                    <Footer/>
                </Variant>
            </Component>
            <Component name="Movies Sidebar">
                <Variant>
                    <SidebarProvider>
                        <AppSidebar/>
                        <SidebarTrigger/>
                    </SidebarProvider>
                </Variant>
            </Component>
        </Category>
    </Palette>
);