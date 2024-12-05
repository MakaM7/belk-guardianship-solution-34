import { Star } from "lucide-react";

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
  return (
    <section className="py-20 bg-background" id="reviews">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Ce Que Disent Nos Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.logo}
                  alt={`${review.company} logo`}
                  className="h-12 w-auto mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{review.company}</h3>
                  <p className="text-sm text-muted-foreground">{review.author}</p>
                  <p className="text-xs text-muted-foreground">{review.position}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-card-foreground">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}