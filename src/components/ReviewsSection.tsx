import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    company: "LFP France",
    author: "Jean Michel",
    position: "Head of Security",
    content: "BELK Gardiennage a fourni une sécurité exceptionnelle lors de nos événements majeurs. Leur professionnalisme et leur attention aux détails sont remarquables.",
    rating: 5,
    logo: "/lovable-uploads/1e2e5694-62b9-4677-afec-82a962cd1e41.png"
  },
  {
    company: "Festival de Cannes",
    author: "Marie Laurent",
    position: "Event Director",
    content: "Une collaboration exceptionnelle pour la sécurité du Festival. L'équipe BELK comprend parfaitement les enjeux des événements de prestige.",
    rating: 5,
    logo: "/lovable-uploads/af10c8d8-5c39-4d69-afd4-9012eeacb56b.png"
  },
  {
    company: "Carrefour",
    author: "Pierre Dubois",
    position: "Regional Security Manager",
    content: "Depuis notre partenariat avec BELK, la sécurité de nos établissements s'est considérablement améliorée. Un service client exemplaire.",
    rating: 5,
    logo: "/lovable-uploads/ce3e3cb3-fc41-4142-a442-fb4072e0cfd7.png"
  },
  {
    company: "Auchan",
    author: "Sophie Martin",
    position: "Operations Director",
    content: "BELK Gardiennage offre un service de sécurité fiable et professionnel. Leur équipe est réactive et bien formée.",
    rating: 5,
    logo: "/lovable-uploads/0a5d647e-b650-41ec-831c-8a27ba0001c7.png"
  },
  {
    company: "Euro 2016",
    author: "Thomas Bernard",
    position: "Security Coordinator",
    content: "Une expertise incomparable dans la gestion de la sécurité des grands événements sportifs. BELK a dépassé toutes nos attentes.",
    rating: 5,
    logo: "/lovable-uploads/453154d5-65ad-4442-9092-2db0fb6d3db6.png"
  },
  {
    company: "IRB Rugby World Cup",
    author: "David Wilson",
    position: "Event Security Director",
    content: "BELK a assuré une sécurité impeccable pendant toute la durée de l'événement. Leur approche professionnelle et leur expertise sont inégalées.",
    rating: 5,
    logo: "/lovable-uploads/bf476ba8-a179-496a-88f9-9942a8477603.png"
  }
];

export function ReviewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-8 bg-background" id="reviews">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Ce Que Disent Nos Clients</h2>
        <div className="overflow-hidden">
          <motion.div
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-lg p-4 shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-3">
                  <img
                    src={review.logo}
                    alt={`${review.company} logo`}
                    className="h-10 w-auto mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-base">{review.company}</h3>
                    <p className="text-xs text-muted-foreground">{review.author}</p>
                    <p className="text-xs text-muted-foreground">{review.position}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-card-foreground text-sm">{review.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}