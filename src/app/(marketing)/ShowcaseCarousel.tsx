'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function ShowcaseCarousel() {
    return (
        <Carousel
        plugins={[
            Autoplay({
            delay: 3000,
            stopOnInteraction: true,
            }),
        ]}
        opts={{
            loop: true,
            align: "start",
        }}
        className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto"
        >
        <CarouselContent className="-ml-4">
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Image src="https://picsum.photos/600/800" alt="Showcase book 1" width={600} height={800} className="rounded-lg shadow-xl" data-ai-hint="book design" />
            </CarouselItem>
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
            <Image src="https://picsum.photos/600/800" alt="Showcase book 2" width={600} height={800} className="rounded-lg shadow-xl" data-ai-hint="book layout" />
            </CarouselItem>
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
            <Image src="https://picsum.photos/600/800" alt="Showcase book 3" width={600} height={800} className="rounded-lg shadow-xl" data-ai-hint="book cover design" />
            </CarouselItem>
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Image src="https://picsum.photos/600/800" alt="Showcase book 4" width={600} height={800} className="rounded-lg shadow-xl" data-ai-hint="elegant book" />
            </CarouselItem>
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
            <Image src="https://picsum.photos/600/800" alt="Showcase book 5" width={600} height={800} className="rounded-lg shadow-xl" data-ai-hint="modern book" />
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
        </Carousel>
    )
}
