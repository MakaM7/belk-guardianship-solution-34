import { Button } from "./ui/button";
import { ContactForm } from "./ContactForm";
import { QuoteForm } from "./QuoteForm";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1582135739786-3f32f33d973b?q=80&w=2940&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          BELK GARDIENNAGE
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Votre Partenaire de Confiance en Sécurité
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ContactForm 
            trigger={
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-primary/20 hover:bg-primary/30 border-primary"
              >
                Contactez-nous
              </Button>
            }
          />
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}