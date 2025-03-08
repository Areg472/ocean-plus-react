import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.tsx";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

interface CarouselImage {
  src: string;
  alt: string;
  link: string;
}

interface CarouselSectionProps {
  title: string;
  images: CarouselImage[];
  delay?: number;
}

export default function CarouselSection({
  title,
  images,
  delay = 7500,
}: CarouselSectionProps) {
  return (
    <>
      <h3 className="text-4xl leading-normal">{title}</h3>
      <Carousel
        className="carousel dark relative mt-4 px-4 md:px-12 lg:px-10"
        plugins={[
          Autoplay({
            delay,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-full lg:basis-1/3">
              <Link to={image.link}>
                <img src={image.src} alt={image.alt} />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 md:top-1/2 md:left-2 lg:-left-8" />
        <CarouselNext className="absolute right-2 md:top-1/2 md:right-2 lg:-right-8" />
      </Carousel>
    </>
  );
}
