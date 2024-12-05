import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const services = [
    {
      title: "Sécurité Événementielle",
      description: "Protection professionnelle pour vos événements",
      icon: "🎭"
    },
    {
      title: "Surveillance 24/7",
      description: "Surveillance continue de vos locaux",
      icon: "👁️"
    },
    {
      title: "Protection Rapprochée",
      description: "Services de garde du corps personnalisés",
      icon: "🛡️"
    },
    {
      title: "Sécurité Mobile",
      description: "Patrouilles et interventions mobiles",
      icon: "🚓"
    }
  ];

  return (
    <section className="py-20 bg-secondary/5" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-transparent pointer-events-none" />
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.2
                    }
                  }
                }}
                className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{service.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}