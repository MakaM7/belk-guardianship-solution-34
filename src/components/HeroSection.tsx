import { Button } from "./ui/button";
import { ContactForm } from "./ContactForm";
import { QuoteForm } from "./QuoteForm";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/lovable-uploads/9a1b2553-a6f2-41dc-a97f-193fa30777b4.png',
    '/lovable-uploads/b9059b3d-eba2-4327-b044-f1f50af7319c.png',
    '/lovable-uploads/dba83afd-4a2b-41b1-8e6c-c4a211f3c790.png',
    '/lovable-uploads/cc3d5e57-52e8-494e-bb2a-50c2b6aaa568.png',
    '/lovable-uploads/4c2f6a14-9c51-4ddd-ac00-a004dc4e851e.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {images.map((img, index) => (
        <div
          key={img}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: currentImageIndex === index ? 1 : 0,
            zIndex: currentImageIndex === index ? 1 : 0
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/60 z-[2]" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
          BELK GARDIENNAGE
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-primary">
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