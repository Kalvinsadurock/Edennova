import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
  buttonText: string;
  accentColor: "cyan" | "gold" | "emerald";
}

export default function IndustryCard({
  title,
  description,
  icon,
  features,
  image,
  buttonText,
  accentColor,
}: IndustryCardProps) {
  const getAccentClasses = () => {
    switch (accentColor) {
      case "cyan":
        return "bg-accent-cyan";
      case "gold":
        return "bg-accent-gold";
      case "emerald":
        return "bg-accent-emerald";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 text-white card-hover"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-300"
      />
      <div className="relative z-10 p-8">
        <div className="flex items-center mb-6">
          <div className={`w-12 h-12 ${getAccentClasses()} rounded-lg flex items-center justify-center mr-4`}>
            {icon}
          </div>
          <h3 className="font-bold text-2xl">{title}</h3>
        </div>
        
        <p className="text-slate-300 mb-6 line-clamp-3">{description}</p>
        
        <ul className="space-y-2 mb-8 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="w-4 h-4 text-accent-emerald mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Button className="w-full bg-accent-emerald text-white hover:bg-accent-cyan transition-colors">
          {buttonText}
        </Button>
      </div>
    </motion.div>
  );
}
