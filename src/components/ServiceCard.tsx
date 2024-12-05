import { motion } from 'framer-motion';
import { Shield, Eye, Theater, Car, GraduationCap, ClipboardCheck, Anchor, Lock } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const iconMap = {
  "🎭": Theater,
  "👁️": Eye,
  "🛡️": Shield,
  "🚓": Car,
  "📚": GraduationCap,
  "📋": ClipboardCheck,
  "⚓": Anchor,
  "🔒": Lock,
};

export const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  const IconComponent = iconMap[icon as keyof typeof iconMap];

  return (
    <div className="bg-background/50 backdrop-blur-sm rounded-xl p-8 border shadow-xl">
      <div className="text-6xl mb-6 flex justify-center">
        {IconComponent && (
          <IconComponent 
            className="w-16 h-16 text-primary" 
            strokeWidth={1.5}
          />
        )}
      </div>
      <h3 className="text-2xl font-bold text-center mb-6">{title}</h3>
      <p className="text-center text-lg leading-relaxed">{description}</p>
    </div>
  );
};