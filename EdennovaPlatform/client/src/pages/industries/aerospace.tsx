import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Plane, Shield, Settings, BarChart, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Aerospace() {
  const challenges = [
    "Stringent regulatory compliance across multiple jurisdictions",
    "Complex certification processes for safety-critical systems",
    "Long development cycles with high quality requirements",
    "Supply chain complexity with specialized components",
    "Integration of legacy systems with modern technologies"
  ];

  const solutions = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Regulatory Compliance Management",
      description: "Automated compliance tracking and documentation for FAA, EASA, and other regulatory bodies.",
      benefits: ["99.8% compliance rate", "50% faster certification", "Automated audit trails"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Advanced Simulation & Testing",
      description: "AI-enhanced simulation capabilities for complex aerospace systems and components.",
      benefits: ["60% reduction in physical testing", "Improved safety validation", "Cost-effective prototyping"]
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Configuration Management",
      description: "Comprehensive configuration control for complex aerospace programs and variants.",
      benefits: ["Real-time change tracking", "Version control automation", "Multi-variant management"]
    }
  ];

  const capabilities = [
    "Aircraft Systems Integration",
    "Propulsion System Optimization",
    "Avionics Development Support",
    "Materials & Structures Analysis",
    "Flight Test Data Management",
    "Maintenance & Overhaul Planning"
  ];

  const metrics = [
    { value: "99.8%", label: "Compliance Rate" },
    { value: "45%", label: "Faster Certification" },
    { value: "30%", label: "Cost Reduction" },
    { value: "60%", label: "Testing Efficiency" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Aerospace engineering systems"
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
              <div className="w-16 h-16 bg-accent-gold rounded-lg flex items-center justify-center mr-4">
                <Plane className="w-8 h-8 text-navy-900" />
              </div>
              <h1 className="font-bold text-4xl md:text-6xl">Aerospace & Defense</h1>
            </div>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Mission-critical PLM solutions ensuring compliance, safety, and performance excellence 
              in aerospace and defense applications with AI-enhanced design validation.
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
            <h2 className="font-bold text-4xl text-navy-900 mb-6">Aerospace Industry Challenges</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The aerospace and defense sector demands the highest standards of safety, reliability, and performance
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
                src="https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Aerospace facility engineering"
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
                    <CheckCircle className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-1" />
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
            <h2 className="font-bold text-4xl text-navy-900 mb-6">Edennova's Mission-Critical Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized PLM solutions designed for the unique requirements of aerospace and defense programs
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
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-gold to-accent-emerald rounded-lg flex items-center justify-center mb-4 text-white">
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
              <h2 className="font-bold text-4xl text-navy-900 mb-6">Specialized Aerospace Capabilities</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our aerospace expertise spans the full spectrum of aircraft and defense systems development, 
                from initial design through production and maintenance.
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
                src="https://images.unsplash.com/photo-1569629465691-467de9e3e83a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Aerospace engineering facility"
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
            <h2 className="font-bold text-4xl mb-6">Mission-Critical Results</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our aerospace clients achieve exceptional performance in safety, compliance, and operational efficiency
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
                <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-2">{metric.value}</div>
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
                src="https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Aerospace success story"
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl text-navy-900 mb-4">
                    Defense Contractor Achieves 99.8% Compliance Rate
                  </CardTitle>
                  <CardDescription className="text-base">
                    Leading aerospace company transforms their compliance management with 
                    AI-powered PLM, ensuring regulatory adherence while accelerating certification.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Compliance Rate:</span>
                      <span className="font-semibold text-accent-emerald">99.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Certification Time:</span>
                      <span className="font-semibold text-accent-emerald">-45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Documentation Errors:</span>
                      <span className="font-semibold text-accent-emerald">-80%</span>
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
            <h2 className="font-bold text-4xl text-navy-900 mb-6">Ready to Elevate Your Aerospace Programs?</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Discover how mission-critical PLM solutions can enhance your aerospace and defense 
              operations while ensuring the highest standards of safety and compliance.
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
