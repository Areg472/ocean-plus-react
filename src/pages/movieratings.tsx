import MetaTags from "@/components/MetaTags.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./movieratings.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Navbar } from "@/components/navbar.tsx";
import { Footer } from "@/components/footer.tsx";

export function Movieratings() {
  return (
    <>
      <MetaTags
        title="Ocean+ - Movie Ratings"
        description="Our movie ratings for Ocean+"
        image="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg"
        name="Ocean+"
      />
      <Navbar />
      <body>
        <div className="dark">
          <Card className="w-[320px] lg:w-[442px]">
            <CardHeader>
              <CardTitle>Our ratings</CardTitle>
              <CardDescription>
                We use special age ratings for our movies, created by us.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>The ratings are:</p>
              <Carousel
                className="mt-4 w-[280px] lg:w-[393px]"
                orientation="horizontal"
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  <CarouselItem>
                    <img
                      alt="aicon"
                      src={
                        "https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/aicon.png"
                      }
                      className="one"
                    />
                    <p className="onep">Everyone</p>
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={
                        "https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/7icon.png"
                      }
                      className="one"
                      alt="7icon"
                    />
                    <p className="onep">7y olds</p>
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={
                        "https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/ticon.png"
                      }
                      className="one"
                      alt="ticon"
                    />
                    <p className="onep">Teens(13+)</p>
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={
                        "https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/micon.png"
                      }
                      className="one"
                      alt="micon"
                    />
                    <p className="onep">Mature(17+)</p>
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={
                        "https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/xicon.png"
                      }
                      className="one"
                      alt="xicon"
                    />
                    <p className="onep">Adults(18+)</p>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hm" />
                <CarouselNext className="hm2" />
              </Carousel>
            </CardContent>
            <CardFooter>
              <p></p>
            </CardFooter>
          </Card>
        </div>
      </body>
      <Footer />
    </>
  );
}
