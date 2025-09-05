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

export const testimonials = [
  {
    name: 'Sarah L.',
    plan: 'Advance',
    avatar: 'SL',
    image: 'https://picsum.photos/150/150',
    imageHint: 'woman portrait',
    feedback: "The AI writer captured my father's spirit perfectly. It was like it knew him. The process was so easy during a difficult time. The final book is something our family will treasure forever.",
  },
  {
    name: 'Michael B.',
    plan: 'Expert',
    avatar: 'MB',
    image: 'https://picsum.photos/150/150',
    imageHint: 'man portrait',
    feedback: "I was skeptical about an AI writing something so personal, but I was blown away. It took all our scattered stories and created a beautiful, cohesive narrative. The Expert plan was worth every penny for the extra design control.",
  },
  {
    name: 'Jessica & Tom H.',
    plan: 'Basic',
    avatar: 'JH',
    image: 'https://picsum.photos/150/150',
    imageHint: 'couple portrait',
    feedback: "We just wanted a simple, elegant way to remember our grandmother. The Basic plan was perfect. It gave us a wonderful starting point, and we were able to create a lovely tribute without much fuss.",
  },
  {
    name: 'David R.',
    plan: 'Advance',
    avatar: 'DR',
    image: 'https://picsum.photos/150/150',
    imageHint: 'gentleman portrait',
    feedback: "I'm not a writer, but I had so many stories about my wife. Legacy AI helped me organize them into a beautiful book that I could share with our children and grandchildren. The final product is professional and heartfelt.",
  },
  {
    name: 'Emily P.',
    plan: 'Expert',
    avatar: 'EP',
    image: 'https://picsum.photos/150/150',
    imageHint: 'lady portrait',
    feedback: "The one-on-one design consultation was fantastic. They helped me with the layout and photo selection, making the book even more special. It's a beautiful tribute to my sister.",
  },
];


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
        <CarouselContent>
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
