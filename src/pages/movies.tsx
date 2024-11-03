import './movies.css';
import MetaTags from "../components/MetaTags.tsx";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import {Link} from "react-router-dom"
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar.tsx";
import {AppSidebar} from "@/components/app-sidebar.tsx";


export function Movies() {
    return (
        <>

            <MetaTags
                title="Ocean+ - Movies"
                description="The movies page for Ocean+"
                image="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg"
                name="Ocean+"
            />
            <body>
            <SidebarProvider>
                <AppSidebar/>
                <SidebarTrigger/>
            </SidebarProvider>
                <div className="Headings">
                    <h1 className="leading-normal mb-16">Movies and shows!</h1>
                    <h3 className="text-4xl leading-normal">Most Popular</h3>
                    <Carousel className="dark mt-4 carousel"
                              plugins={[
                                  Autoplay({
                                      delay: 7500,
                                  }),
                              ]}
                              opts={{
                                  align: "start",
                                  loop: true,
                              }}
                    >
                        <CarouselContent>
                            <CarouselItem className="md:basis-full lg:basis-1/3"><Link to="/Rosie-gets-grounded-the-movie"><img src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Rosie-Movie-Poster00086400.png" alt="rosie"/></Link></CarouselItem>
                            <CarouselItem className="md:basis-full lg:basis-1/3"><Link to="/The-vyond-cinema-movie"><img src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/2af654d3dc827c1b17668c26ec853121b9f4ad32/src/pictures/The-Vyond-Cinema-Movie-ocean-poster-with-the-template00086400.png" alt="Vyond cinema"/></Link></CarouselItem>
                            <CarouselItem className="md:basis-full lg:basis-1/3"><Link to="/Ga-bricks-the-movie"><img src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/GA-bricks-the-movie-poster-ocean00086400.png" alt="gabricks"/></Link></CarouselItem>
                            <CarouselItem className="md:basis-full lg:basis-1/3"><Link to="/The-comedy-world-movie"><img src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Comedy-World-The-Movie-Ocean-Poster00086400.png" alt="Comedy world"/></Link></CarouselItem>
                            <CarouselItem className="md:basis-full lg:basis-1/3"><Link to="/Caillou-the-movie"><img src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Cailou-the-movie-thumbnail00086400.png" alt="caillou"/></Link></CarouselItem>
                            <CarouselItem className="md:basis-full lg:basis-1/3"><Link to="/Little-bills-valendies-movie"><img src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Littles-Bill-Valendies-Day-Movie-poster-ocean00086400.png" alt="Little bill"/></Link></CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    <h3 className="text-4xl leading-normal mt-4">Adventure</h3>
                    <Carousel className="dark mt-4 carousel"
                              plugins={[
                                  Autoplay({
                                      delay: 7000,
                                  }),
                              ]}
                              opts={{
                                  align: "start",
                                  loop: true,
                              }}
                    >
                        <CarouselContent>
                            <CarouselItem className="md:basis-full lg:basis-1/3"><Link to="/Goofus-and-Doofus-1"><img src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Goofus-Doofus-ocean-poster-with-the-template00086400.png" alt="goofusdoofus1"/></Link></CarouselItem>
                            <CarouselItem className="md:basis-full lg:basis-1/3"><Link to="/Caillou-the-movie"><img src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Cailou-the-movie-thumbnail00086400.png" alt="caillou"/></Link></CarouselItem>
                            <CarouselItem className="md:basis-full lg:basis-1/3"><Link to="/Its-Jack-Paul-Christmas"><img src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Its-Jack-Paul-Christmas-ocean-poster-with-the-template00086400.png" alt="jpxmas"/></Link></CarouselItem>
                            <CarouselItem className="md:basis-full lg:basis-1/3"><Link to="/Cftwcftl-the-movie-4"><img src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/CFTWCFTL-The-Movie-4-ocean-poster-with-the-template00086400.png" alt="cft4"/></Link></CarouselItem>
                            <CarouselItem className="md:basis-full lg:basis-1/3"><Link to="/Goofus-and-Doofus-2"><img src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Goofus-Doofus-2-ocean-poster-with-the-template00086400.png" alt="goofusdoofus2"/></Link></CarouselItem>
                            <CarouselItem className="md:basis-full lg:basis-1/3"><Link to="/Jack-Paul-Spooktacular"><img src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Jack-Paul-Spooktacular-ocean-poster-with-the-template00086400.png" alt="jpspooky"/></Link></CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    <Link to="/Movie-ratings">
                        <button className="button mt-10 w-[180px] h-[30px]">
                            Movie age ratings
                        </button>
                    </Link>
                </div>
            </body>
        </>
    )
}