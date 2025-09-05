import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    priceDescription: 'to get started',
    features: [
      { text: 'AI-powered draft generation', included: true },
      { text: 'Web-based preview of first 2 pages', included: true },
      { text: 'Basic theme', included: true },
      { text: 'Full book generation', included: false },
      { text: 'Editable project link', included: false },
      { text: 'High-resolution PDF download', included: false },
      { text: 'Photo uploads', included: false },
    ],
    cta: 'Start for Free',
    href: '/create',
    primary: false,
  },
  {
    name: 'Basic',
    price: '$10',
    priceDescription: 'one-time payment',
    features: [
      { text: 'AI-powered draft generation', included: true },
      { text: 'Full book web preview', included: true },
      { text: 'Access to all themes', included: true },
      { text: 'Full book generation (up to 50 pages)', included: true },
      { text: 'Low-resolution PDF download', included: true },
      { text: 'Editable project link', included: false },
      { text: 'High-resolution PDF download', included: false },
      { text: 'Photo uploads', included: false },
    ],
    cta: 'Get Started',
    href: '/create',
    primary: false,
  },
  {
    name: 'Advance',
    price: '$30',
    priceDescription: 'one-time payment',
    features: [
      { text: 'Everything in Basic, plus:', included: true, isTitle: true },
      { text: 'Full book generation (up to 150 pages)', included: true },
      { text: 'Upload and place photos', included: true },
      { text: 'Editable project on POD platform', included: true },
      { text: 'High-resolution PDF for printing', included: true },
      { text: 'Priority support', included: true },
    ],
    cta: 'Choose Advance',
    href: '/create',
    primary: true,
  },
  {
    name: 'Expert',
    price: '$50',
    priceDescription: 'one-time payment',
    features: [
      { text: 'Everything in Advance, plus:', included: true, isTitle: true },
      { text: 'Full book generation (unlimited pages)', included: true },
      { text: 'Advanced editing & layout control', included: true },
      { text: 'One-on-one design consultation', included: true },
      { text: 'Hardcover print option facilitation', included: true },
    ],
    cta: 'Go Expert',
    href: '/create',
    primary: false,
  },
];

export default function PricingPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center space-y-4 mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Simple, Transparent Pricing</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Choose the plan that's right for you. Start with a free preview and upgrade when you're ready.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
        {tiers.map((tier) => (
          <Card key={tier.name} className={`flex flex-col ${tier.primary ? 'border-primary shadow-2xl' : ''}`}>
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl">{tier.name}</CardTitle>
              <p className="text-4xl font-bold">{tier.price}</p>
              <CardDescription>{tier.priceDescription}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature.text} className="flex items-start">
                     {feature.isTitle ? 
                      <span className="font-semibold col-span-2">{feature.text}</span> :
                      <>
                        {feature.included ? <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" /> : <X className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0 mt-1" />}
                        <span className={!feature.included ? 'text-muted-foreground line-through' : ''}>{feature.text}</span>
                      </>
                    }
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant={tier.primary ? 'default' : 'secondary'}>
                <Link href={tier.href}>{tier.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
