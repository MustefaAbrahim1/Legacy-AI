'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { testimonials } from './page';

interface TestimonialsCarouselProps {
    testimonials: typeof testimonials;
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
    return (
        <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="flex flex-col h-full">
                  <CardContent className="pt-6 flex-grow flex flex-col">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.imageHint} />
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <Badge variant="secondary">Used {testimonial.plan} Plan</Badge>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                    </div>
                    <blockquote className="text-muted-foreground italic border-l-2 pl-4 flex-grow">
                      "{testimonial.feedback}"
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    )
}
