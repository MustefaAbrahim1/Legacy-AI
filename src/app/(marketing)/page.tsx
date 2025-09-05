import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UploadCloud, Bot, SquarePen as Edit } from 'lucide-react';
import { ShowcaseCarousel } from './ShowcaseCarousel';
import { TestimonialsCarousel, testimonials } from './TestimonialsCarousel';

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

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-accent/50">
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
      <section id="how-it-works" className="w-full py-24">
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

      {/* Showcase Section */}
      <section id="showcase" className="w-full py-24 bg-accent/50 overflow-hidden">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Beautiful Designs, Enduring Tributes</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore a collection of our beautifully crafted memorial books.
            </p>
          </div>
           <ShowcaseCarousel />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="feedback" className="w-full py-24 bg-background overflow-hidden">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Loved by Families Like Yours</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See what others have created and hear about their experiences.
            </p>
          </div>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Themes Section */}
      <section className="w-full py-24 bg-accent/50">
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
