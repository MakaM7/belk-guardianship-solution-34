import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ValuesSection } from "@/components/ValuesSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ContactSection } from "@/components/ContactSection";
import { AboutSection } from "@/components/AboutSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { useEffect } from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Index = () => {
  useEffect(() => {
    console.log("Index page mounted");
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/26d050ae-77f6-48d3-adcd-50a887e89d9a.png" 
              alt="BELK Gardiennage" 
              className="h-20 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary">
                BELK
              </span>
              <span className="text-lg tracking-wider text-primary font-semibold">
                GARDIENNAGE
              </span>
            </div>
          </div>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  onClick={() => scrollToSection('services')}
                  className="bg-transparent hover:bg-primary/10"
                >
                  Services
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  onClick={() => scrollToSection('values')}
                  className="bg-transparent hover:bg-primary/10"
                >
                  Nos Valeurs
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  onClick={() => scrollToSection('partners')}
                  className="bg-transparent hover:bg-primary/10"
                >
                  Partenaires
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  onClick={() => scrollToSection('reviews')}
                  className="bg-transparent hover:bg-primary/10"
                >
                  Avis Clients
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  onClick={() => scrollToSection('about')}
                  className="bg-transparent hover:bg-primary/10"
                >
                  À Propos
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  onClick={() => scrollToSection('contact')}
                  className="bg-transparent hover:bg-primary/10"
                >
                  Contact
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="space-y-12">
        <HeroSection />
        <div id="services" className="relative overflow-hidden p-6">
          <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-xl">
            <ServicesSection />
          </div>
        </div>
        <div id="values" className="p-6">
          <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-xl">
            <ValuesSection />
          </div>
        </div>
        <div id="partners" className="p-6">
          <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-xl">
            <PartnersSection />
          </div>
        </div>
        <div id="reviews" className="relative overflow-hidden p-6">
          <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-xl">
            <ReviewsSection />
          </div>
        </div>
        <div id="about" className="p-6">
          <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-xl">
            <AboutSection />
          </div>
        </div>
        <div id="contact" className="p-6">
          <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-xl">
            <ContactSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;