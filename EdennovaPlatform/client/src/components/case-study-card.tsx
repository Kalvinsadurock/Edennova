import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface CaseStudyCardProps {
  title: string;
  summary: string;
  industry: string;
  category: string;
  image: string;
  onReadMore: () => void;
}

export default function CaseStudyCard({
  title,
  summary,
  industry,
  category,
  image,
  onReadMore,
}: CaseStudyCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "automotive":
        return "bg-accent-cyan/10 text-accent-cyan";
      case "aerospace":
        return "bg-accent-gold/10 text-accent-gold";
      case "oil & gas":
        return "bg-accent-emerald/10 text-accent-emerald";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-slate-100"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Badge className={getCategoryColor(category)}>{category}</Badge>
        </div>
        
        <h3 className="font-semibold text-xl text-navy-900 mb-3">{title}</h3>
        
        <p className="text-slate-600 mb-4 line-clamp-3">{summary}</p>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-slate-500">{industry}</div>
          <Button
            variant="ghost"
            className="text-accent-emerald hover:text-accent-cyan p-0 h-auto"
            onClick={onReadMore}
          >
            Read More →
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
