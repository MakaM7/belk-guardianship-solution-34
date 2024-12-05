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
      description: "Notre équipe de 45 agents spécialisés excelle dans la sécurité événementielle au Maroc et en France. Nous sécurisons plus de 200 événements annuels, des festivals traditionnels marocains aux événements culturels français, en passant par les grands salons internationaux à Casablanca et Paris. Notre expertise bilingue (français-arabe) et notre connaissance approfondie des protocoles de sécurité des deux pays nous permettent d'assurer une protection optimale pour des événements accueillant jusqu'à 50,000 personnes. Nous maintenons un taux de satisfaction client de 98% grâce à notre approche qui allie professionnalisme international et sensibilité culturelle locale.",
      icon: "🎭"
    },
    {
      title: "Surveillance 24/7",
      description: "Notre centre de surveillance ultra-moderne, basé à Casablanca avec une antenne à Paris, emploie 30 agents qualifiés surveillant plus de 1,000 caméras en temps réel. Nous protégeons 75 sites à travers le Maroc et la France, incluant des zones industrielles, des complexes commerciaux et des sites touristiques majeurs. Notre système de vidéosurveillance, conforme aux réglementations RGPD et aux lois marocaines sur la protection des données, intègre une IA avancée qui a permis de prévenir 150 incidents potentiels l'année dernière. Notre équipe bilingue assure une communication fluide 24/7 avec un temps de réponse moyen de 3 minutes.",
      icon: "👁️"
    },
    {
      title: "Protection Rapprochée",
      description: "Notre unité d'élite de protection rapprochée compte 15 agents hautement qualifiés, formés selon les standards français et marocains les plus stricts. Nos agents, anciens des forces spéciales marocaines et françaises, cumulent plus de 200 ans d'expérience combinée. Nous assurons la sécurité de dignitaires, d'hommes d'affaires et de personnalités publiques lors de leurs déplacements entre le Maroc et la France, avec plus de 1,000 missions réussies. Notre équipe maîtrise parfaitement l'arabe, le français et plusieurs dialectes locaux, garantissant une communication efficace dans toutes les situations.",
      icon: "🛡️"
    },
    {
      title: "Sécurité Mobile",
      description: "Notre service de sécurité mobile, opérant dans les principales villes du Maroc et de France, dispose d'une flotte de 10 véhicules équipés et de 25 agents mobiles effectuant plus de 100 rondes quotidiennes. Nous couvrons un périmètre de 150 km² à travers les zones urbaines et périurbaines, avec une présence particulière dans les zones industrielles de Tanger et les quartiers d'affaires parisiens. Nos équipes, formées aux spécificités sécuritaires des deux pays, maintiennent un temps d'intervention moyen de 8 minutes et une disponibilité de 99.9%. L'année dernière, nos patrouilles ont déjoué 80 tentatives d'intrusion grâce à notre connaissance approfondie du terrain.",
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