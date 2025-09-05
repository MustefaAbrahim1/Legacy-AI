import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter Preview',
    price: 'Free',
    priceDescription: 'to get started',
    features: [
      'AI-powered draft generation',
      'Preview of the first few pages',
      'One design theme',
      'Web-based preview link',
    ],
    cta: 'Start for Free',
    href: '/create',
    primary: false,
  },
  {
    name: 'Premium Full Book',
    price: '$49',
    priceDescription: 'one-time payment',
    features: [
      'Everything in Starter, plus:',
      'Full book generation (up to 200 pages)',
      'Access to all premium themes',
      'Editable project on POD platform',
      'High-resolution PDF for printing',
      'Priority support',
    ],
    cta: 'Go Premium',
    href: '/create',
    primary: true,
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
      <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
        {tiers.map((tier) => (
          <Card key={tier.name} className={tier.primary ? 'border-primary shadow-2xl' : ''}>
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl">{tier.name}</CardTitle>
              <p className="text-4xl font-bold">{tier.price}</p>
              <CardDescription>{tier.priceDescription}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{feature}</span>
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
