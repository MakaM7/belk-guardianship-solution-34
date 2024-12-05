import { Button } from "./ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section className="py-12 bg-secondary text-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Contactez Nous</h2>
          <div className="space-y-3 mb-6">
            <p className="flex items-center justify-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span>+212 7 043 256 36</span>
            </p>
            <p className="flex items-center justify-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-primary" />
              <span>belkgardiennage@gmail.com</span>
            </p>
            <p className="flex items-center justify-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Siège Social/Résidence El Kaoutar 5 Mag N°4 Bir Rami, Kénitra</span>
            </p>
          </div>
          <ContactForm 
            trigger={
              <Button 
                size="sm" 
                variant="outline" 
                className="bg-primary/20 hover:bg-primary/30 border-primary"
              >
                Envoyez un message
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
}