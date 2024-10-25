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
                <div className="Headings">
                    <h1 className="leading-normal">Movies and shows!</h1>
                    <Carousel className="dark mt-4 carousel"
                              plugins={[
                                  Autoplay({
                                      delay: 4000,
                                  }),
                              ]}
                              opts={{
                                  align: "start",
                                  loop: true,
                              }}
                    >
                        <CarouselContent>
                            <CarouselItem className="md:basis-full lg:basis-1/3"><img src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Cailou-the-movie-thumbnail00086400.png" alt="caillou"/></CarouselItem>
                            <CarouselItem className="md:basis-full lg:basis-1/3"><img src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/CFTWCFTL-The-Movie-ocean-poster-with-the-template00086400.png" alt="cft1"/></CarouselItem>
                            <CarouselItem className="md:basis-full lg:basis-1/3"><img src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/CFTWCFTL-The-Movie-4-ocean-poster-with-the-template00086400.png" alt="cft4"/></CarouselItem>
                            <CarouselItem className="md:basis-full lg:basis-1/3"><img src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/CFTWCFTL-The-Movie-5-ocean-poster-with-the-template00086400.png" alt="cft5"/></CarouselItem>
                            <CarouselItem className="md:basis-full lg:basis-1/3"><img src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Goofus-Doofus-ocean-poster-with-the-template00086400.png" alt="gd1"/></CarouselItem>
                            <CarouselItem className="md:basis-full lg:basis-1/3"><img src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/Goofus-Doofus-2-ocean-poster-with-the-template00086400.png" alt="gd2"/></CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </body>
        </>
    )
}