const partners = [
  { 
    name: "LFP France", 
    image: "/lovable-uploads/1e2e5694-62b9-4677-afec-82a962cd1e41.png",
    url: "https://www.magasins-u.com"
  },
  { 
    name: "Euro 2016", 
    image: "/lovable-uploads/453154d5-65ad-4442-9092-2db0fb6d3db6.png",
    url: "https://www.uefa.com"
  },
  { 
    name: "IRB Rugby World Cup", 
    image: "/lovable-uploads/bf476ba8-a179-496a-88f9-9942a8477603.png",
    url: "https://www.rugbyworldcup.com"
  },
  { 
    name: "Assistance Publique Hôpitaux de Marseille", 
    image: "/lovable-uploads/1e4f96b7-1269-4fe4-9ad2-8f03a0930e5b.png",
    url: "http://fr.ap-hm.fr"
  },
  { 
    name: "Festival de Cannes", 
    image: "/lovable-uploads/af10c8d8-5c39-4d69-afd4-9012eeacb56b.png",
    url: "https://www.festival-cannes.com"
  },
  { 
    name: "Super U", 
    image: "/lovable-uploads/31242936-8388-4579-a45d-46fb17820cf3.png",
    url: "https://avantscene.ma/index.php"
  },
  { 
    name: "New Yorker", 
    image: "/lovable-uploads/2b03483c-629a-45ae-ba42-c48eeb15f5c5.png",
    url: "https://www.newyorker.de"
  },
  { 
    name: "Auchan", 
    image: "/lovable-uploads/0a5d647e-b650-41ec-831c-8a27ba0001c7.png",
    url: "https://www.auchan.fr"
  },
  { 
    name: "Formula One", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/2560px-F1.svg.png",
    url: "https://www.formula1.com"
  },
  { 
    name: "Audi", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/2560px-Audi-Logo_2016.svg.png",
    url: "https://www.audi.com"
  },
  { 
    name: "Carrefour", 
    image: "/lovable-uploads/ce3e3cb3-fc41-4142-a442-fb4072e0cfd7.png",
    url: "https://www.carrefour.fr"
  },
  { 
    name: "IKEA", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/2560px-Ikea_logo.svg.png",
    url: "https://www.ikea.com"
  }
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-background" id="partners">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Partenaires</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <a 
              key={index} 
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 hover:scale-105 transition-transform"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="max-w-[150px] h-auto grayscale hover:grayscale-0 transition-all"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
