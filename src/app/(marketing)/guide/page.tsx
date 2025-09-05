import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
  {
    step: 1,
    title: "Upload Your Content",
    description: "Begin by gathering all the precious memories. This can be anything from a full obituary, personal anecdotes, heartfelt stories, and poems. Our system is designed to handle text and images, allowing you to create a rich and comprehensive tribute. Simply paste the text and upload photos in our editor.",
    image: "https://picsum.photos/800/600",
    imageHint: "document upload",
  },
  {
    step: 2,
    title: "AI Generates the Draft",
    description: "Once your content is uploaded, our advanced AI ghostwriter gets to work. It intelligently analyzes the text, organizes the stories, and structures the content into a flowing narrative. In just a few minutes, you will receive a complete draft of your memorial book, including chapter suggestions and photo placements.",
    image: "https://picsum.photos/800/600",
    imageHint: "artificial intelligence",
  },
  {
    step: 3,
    title: "Review, Edit, and Finalize",
    description: "Review the AI-generated preview. If you're happy with the draft, you can choose a pricing plan to unlock the full book. You'll receive an editable project link for a leading print-on-demand platform where you can make final adjustments, perfect the layout, and order your beautifully printed copies. Or, download a high-resolution PDF to print yourself.",
    image: "https://picsum.photos/800/600",
    imageHint: "book printing",
  },
];

export default function GuidePage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center space-y-4 mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">How Legacy AI Works</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We've simplified the process of creating a heartfelt memorial book into three easy steps.
        </p>
      </div>

      <div className="space-y-24">
        {steps.map((step, index) => (
          <div
            key={step.step}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <h2 className="font-headline text-3xl font-bold">{step.title}</h2>
              </div>
              <p className="text-muted-foreground text-lg">{step.description}</p>
            </div>
            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <Image
                src={step.image}
                alt={step.title}
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
                data-ai-hint={step.imageHint}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-24">
        <h2 className="font-headline text-3xl font-bold mb-4">Ready to Create a Lasting Memory?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Start preserving the legacy of your loved one today. The first preview is on us.
        </p>
        <Button size="lg" asChild>
          <Link href="/create">Get Started for Free</Link>
        </Button>
      </div>
    </div>
  );
}
