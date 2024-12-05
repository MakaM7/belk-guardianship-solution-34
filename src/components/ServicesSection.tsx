import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

export function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const controls = useAnimation();

  const services = [
    {
      title: "Sécurité Événementielle",
      description: "Fort d'une équipe de 45 agents spécialisés en sécurité événementielle, nous assurons la protection de plus de 200 événements par an. Notre expertise couvre des festivals accueillant jusqu'à 50,000 personnes, des conférences d'entreprise, et des événements sportifs majeurs. Avec un taux de satisfaction client de 98% et une moyenne de 0 incident majeur sur les 3 dernières années, notre équipe maintient des standards de sécurité exceptionnels tout en préservant une atmosphère accueillante.",
      icon: "🎭"
    },
    {
      title: "Surveillance 24/7",
      description: "Notre centre de surveillance ultramoderne, opéré par 30 agents qualifiés, monitore plus de 1,000 caméras en temps réel. Nous protégeons actuellement 75 sites différents, avec un temps de réponse moyen de 3 minutes en cas d'alerte. Notre système de vidéosurveillance AI-powered a permis de prévenir 150 incidents potentiels l'année dernière, représentant une économie moyenne de 500,000€ pour nos clients.",
      icon: "👁️"
    },
    {
      title: "Protection Rapprochée",
      description: "Notre unité d'élite de 15 agents de protection rapprochée, tous anciens des forces spéciales ou de la protection diplomatique, cumule plus de 200 ans d'expérience combinée. Nous assurons la sécurité de 20 VIP en continu, avec plus de 1,000 missions réussies à l'international. Notre équipe maîtrise 8 langues différentes et maintient une certification annuelle aux dernières techniques de protection.",
      icon: "🛡️"
    },
    {
      title: "Sécurité Mobile",
      description: "Avec une flotte de 10 véhicules équipés et 25 agents mobiles, nous effectuons plus de 100 rondes quotidiennes. Notre service de patrouille couvre un périmètre de 150 km² et intervient sur 50 sites différents. Le temps moyen d'intervention est de 8 minutes, avec une disponibilité de 99.9%. Nos équipes mobiles ont permis de déjouer 80 tentatives d'intrusion l'année dernière, démontrant l'efficacité de notre approche préventive.",
      icon: "🚓"
    }
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + services.length) % services.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 animate-aurora"></div>
      
      <style>
        {`
          @keyframes aurora {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-aurora {
            animation: aurora 15s linear infinite;
            background-size: 200% 200%;
          }
        `}
      </style>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
        
        <div className="relative h-[500px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full max-w-3xl"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 shadow-xl">
                <div className="text-6xl mb-6 flex justify-center">{services[currentIndex].icon}</div>
                <h3 className="text-2xl font-bold text-center mb-6">{services[currentIndex].title}</h3>
                <p className="text-center text-lg leading-relaxed">{services[currentIndex].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 z-10"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 z-10"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-4 flex gap-2 justify-center">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}