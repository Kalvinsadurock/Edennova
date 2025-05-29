import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Car, Cpu, BarChart, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Automotive() {
  const challenges = [
    "Complex vehicle architectures with thousands of components",
    "Shortened development cycles with increased quality demands",
    "Integration of electric and autonomous vehicle technologies",
    "Supply chain complexity and global manufacturing coordination",
    "Regulatory compliance across multiple markets"
  ];

  const solutions = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI-Driven Design Optimization",
      description: "Leverage machine learning to optimize vehicle designs for performance, safety, and manufacturability.",
      benefits: ["40% reduction in design iterations", "Improved crash test performance", "Weight optimization for EVs"]
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Predictive Maintenance Systems",
      description: "IoT-enabled predictive maintenance that reduces downtime and extends vehicle lifecycle.",
      benefits: ["30% reduction in warranty costs", "Improved customer satisfaction", "Extended component lifecycles"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Digital Twin Integration",
      description: "Create comprehensive digital twins for vehicles, enabling virtual testing and optimization.",
      benefits: ["50% reduction in physical prototypes", "Real-time performance monitoring", "Accelerated testing cycles"]
    }
  ];

  const capabilities = [
    "Autonomous Vehicle Development Support",
    "Electric Powertrain Optimization",
    "Connected Vehicle Platform Integration",
    "Advanced Driver Assistance Systems (ADAS)",
    "Lightweight Materials Analysis",
    "Crash Simulation and Safety Optimization"
  ];

  const metrics = [
    { value: "35%", label: "Faster Time-to-Market" },
    { value: "40%", label: "Reduction in Development Costs" },
    { value: "99.2%", label: "Quality Compliance Rate" },
    { value: "25%", label: "Improvement in Fuel Efficiency" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Automotive manufacturing technology"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-accent-cyan rounded-lg flex items-center justify-center mr-4">
                <Car className="w-8 h-8 text-navy-900" />
              </div>
              <h1 className="font-bold text-4xl md:text-6xl">Automotive PLM</h1>
            </div>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Accelerate vehicle development with AI-driven design optimization, predictive maintenance, 
              and supply chain intelligence for next-generation mobility solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-bold text-4xl text-navy-900 mb-6">Automotive Industry Challenges</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The automotive industry faces unprecedented complexity in developing next-generation vehicles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Complex automotive engineering"
                className="rounded-2xl shadow-lg w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent-cyan mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-slate-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI-Driven Solutions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-bold text-4xl text-navy-900 mb-6">Edennova's AI-Driven Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform automotive development with intelligent PLM solutions designed for the modern vehicle ecosystem
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-emerald rounded-lg flex items-center justify-center mb-4 text-white">
                      {solution.icon}
                    </div>
                    <CardTitle className="text-xl text-navy-900">{solution.title}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <ArrowRight className="w-4 h-4 text-accent-emerald mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specific Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-bold text-4xl text-navy-900 mb-6">Specialized Automotive Capabilities</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our deep automotive expertise enables us to deliver solutions that address 
                the unique challenges of modern vehicle development and manufacturing.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-3 bg-slate-50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-accent-emerald mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium text-navy-900">{capability}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Electric vehicle development"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quantifiable Benefits */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-bold text-4xl mb-6">Proven Results</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our automotive clients achieve measurable improvements in efficiency, quality, and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent-cyan mb-2">{metric.value}</div>
                <div className="text-slate-300 text-lg">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-bold text-4xl text-navy-900 mb-6">Success Story</h2>
          </motion.div>

          <Card className="max-w-4xl mx-auto overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Automotive success story"
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl text-navy-900 mb-4">
                    Global Auto Manufacturer Reduces Development Time by 35%
                  </CardTitle>
                  <CardDescription className="text-base">
                    Leading automotive OEM transforms their product development process with 
                    AI-powered PLM integration, achieving significant improvements in efficiency and quality.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Development Time:</span>
                      <span className="font-semibold text-accent-emerald">-35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Quality Issues:</span>
                      <span className="font-semibold text-accent-emerald">-60%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Cost Savings:</span>
                      <span className="font-semibold text-accent-emerald">$50M annually</span>
                    </div>
                  </div>
                  <Link href="/case-studies">
                    <Button className="w-full bg-accent-emerald text-white hover:bg-accent-cyan">
                      Read Full Case Study
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-4xl text-navy-900 mb-6">Ready to Accelerate Your Automotive Innovation?</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Discover how AI-powered PLM can transform your vehicle development process and 
              give you a competitive edge in the evolving automotive landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-accent-emerald text-white hover:bg-accent-cyan">
                  Request Demo
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white">
                  Explore All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
