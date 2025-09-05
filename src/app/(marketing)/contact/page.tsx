import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <main className="container py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have questions about our process, pricing, or custom orders? We're here to help. Fill out the form, and a member of our team will get back to you shortly.
          </p>
          <div className="space-y-2 pt-4">
            <h3 className="font-semibold">Email Support</h3>
            <p className="text-muted-foreground">
              <a href="mailto:support@legacyai.com" className="hover:text-primary transition-colors">
                support@legacyai.com
              </a>
            </p>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
