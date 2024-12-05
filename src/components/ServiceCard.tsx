import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 shadow-xl">
      <div className="text-6xl mb-6 flex justify-center">{icon}</div>
      <h3 className="text-2xl font-bold text-center mb-6">{title}</h3>
      <p className="text-center text-lg leading-relaxed">{description}</p>
    </div>
  );
};