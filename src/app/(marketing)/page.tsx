import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UploadCloud, Bot, Edit, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const features = [
  {
    icon: <UploadCloud className="h-10 w-10 text-primary" />,
    title: '1. Upload Memories',
    description: 'Easily gather stories, photos, and tributes from family and friends. Our platform accepts various formats to make compilation simple.',
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: '2. AI-Powered Draft',
    description: "Our intelligent AI ghostwriter weaves your collected memories into a beautiful, coherent narrative, creating a first draft in moments.",
  },
  {
    icon: <Edit className="h-10 w-10 text-primary" />,
    title: '3. Edit & Finalize',
    description: 'Review the AI-generated draft, make any personal edits, and choose from elegant themes before ordering your professionally printed book.',
  },
];

const testimonials = [
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
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-accent/50">
        <div className="container grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-20 lg:py-0">
          <div className="space-y-6 fade-in">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
              Honor a Life, Preserve a Legacy
            </h1>
            <p className="text-lg text-muted-foreground">
              Legacy AI helps you create beautiful, professionally crafted memorial books to celebrate the lives of your loved ones. Let our AI-powered ghostwriter turn your cherished memories into a timeless tribute.
            </p>
            <Button size="lg" asChild>
              <Link href="/create">Create a Memorial Book</Link>
            </Button>
          </div>
          <div className="fade-in [animation-delay:200ms]">
            <Image
              src="https://picsum.photos/800/600"
              alt="Beautifully bound memorial book on a table"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
              data-ai-hint="memorial book"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">A Simple Process to a Lasting Tribute</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Creating a memorial book is as easy as 1-2-3 with Legacy AI.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="text-center fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader>
                  <div className="mx-auto bg-accent/50 rounded-full h-20 w-20 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-headline">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase & Testimonials Section */}
      <section id="showcase" className="py-24 bg-background overflow-hidden">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Loved by Families Like Yours</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See what others have created and hear about their experiences.
            </p>
          </div>
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
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-24 bg-accent/50">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 fade-in">
            <Image
              src="https://picsum.photos/800/1000"
              alt="Elegant memorial book cover design"
              width={800}
              height={1000}
              className="rounded-lg shadow-2xl"
              data-ai-hint="book cover"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2 fade-in">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Professionally Designed Themes</h2>
            <p className="text-lg text-muted-foreground">
              Choose from a selection of classic, modern, and elegant themes to perfectly match the spirit of your loved one. Our designs ensure your memorial book is a work of art.
            </p>
            <Button variant="secondary" asChild>
              <Link href="/pricing">View Themes & Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
