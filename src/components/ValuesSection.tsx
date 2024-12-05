import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Ear, Heart, Sparkles } from "lucide-react";

const values = [
  {
    title: "Écoute",
    description: "Proximité et attention aux besoins de nos clients",
    icon: Ear
  },
  {
    title: "Respect",
    description: "Le fondement de toute relation durable",
    icon: Heart
  },
  {
    title: "Audace",
    description: "Innovation et recherche constante d'excellence",
    icon: Sparkles
  }
];

export function ValuesSection() {
  return (
    <section className="py-12 bg-secondary relative overflow-hidden" id="values">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Nos Valeurs</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-white/80 text-lg">Les principes qui guident nos actions au quotidien</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 h-full">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border-primary/20 text-white hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col"
            >
              <CardHeader className="flex-1 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary mb-4">{value.title}</CardTitle>
                <CardContent className="flex-1 flex items-center">
                  <p className="text-center text-white/90 text-lg leading-relaxed">{value.description}</p>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}