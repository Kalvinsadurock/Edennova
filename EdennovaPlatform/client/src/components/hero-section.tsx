import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronDown, Cpu, Network } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
        >
          <source src="/api/placeholder-video" type="video/mp4" />
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
            alt="AI neural network data visualization"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 video-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            <span className="block">Innovating the</span>
            <span className="block gradient-text">Future PLM</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming Product Lifecycles with AI-Powered 3DEXPERIENCE Solutions for
            Automotive, Aerospace, and Oil & Gas Industries
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-accent-emerald text-white hover:bg-accent-cyan text-lg px-8 py-4 glow-effect"
              >
                Explore Solutions
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-navy-900 text-lg px-8 py-4"
              >
                Watch Demo
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <div className="w-16 h-16 bg-accent-cyan/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Cpu className="w-8 h-8 text-accent-cyan" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        >
          <div className="w-20 h-20 bg-accent-emerald/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Network className="w-10 h-10 text-accent-emerald" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-white" />
      </motion.div>
    </section>
  );
}
