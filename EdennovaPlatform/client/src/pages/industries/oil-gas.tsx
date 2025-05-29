import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Fuel, BarChart, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function OilGas() {
  const challenges = [
    "Complex asset management across global operations",
    "Safety and environmental compliance requirements",
    "Aging infrastructure and modernization needs",
    "Energy transition and sustainability pressures",
    "Operational efficiency in volatile market conditions"
  ];

  const solutions = [
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Asset Lifecycle Management",
      description: "Comprehensive digital asset management for optimized performance and extended lifecycles.",
      benefits: ["Extended asset lifespan", "Reduced maintenance costs", "Improved reliability"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "AI-powered predictive maintenance and operational optimization for critical infrastructure.",
      benefits: ["50% reduction in unplanned downtime", "Predictive failure detection", "Optimized maintenance schedules"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sustainability Integration",
      description: "Environmental impact monitoring and sustainable technology integration for energy transition.",
      benefits: ["Carbon footprint reduction", "ESG compliance tracking", "Clean energy integration"]
    }
  ];

  const capabilities = [
    "Upstream Exploration & Production",
    "Midstream Pipeline Management",
    "Downstream Refining Operations",
    "Environmental Impact Assessment",
    "Safety & Risk Management",
    "Energy Transition Planning"
  ];

  const metrics = [
    { value: "$50M", label: "Annual Cost Savings" },
    { value: "40%", label: "Efficiency Improvement" },
    { value: "25%", label: "Emission Reduction" },
    { value: "60%", label: "Downtime Prevention" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Oil and gas industrial facilities"
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
              <div className="w-16 h-16 bg-accent-emerald rounded-lg flex items-center justify-center mr-4">
                <Fuel className="w-8 h-8 text-navy-900" />
              </div>
              <h1 className="font-bold text-4xl md:text-6xl">Oil & Gas</h1>
            </div>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Optimize complex energy operations with intelligent asset management, 
              predictive analytics, and sustainable technology integration for the energy transition.
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
            <h2 className="font-bold text-4xl text-navy-900 mb-6">Oil & Gas Industry Challenges</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The energy sector faces complex operational challenges while navigating the transition to sustainable energy
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
                src="https://images.unsplash.com/photo-1605126803808-2ad0a6ad772b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Oil and gas processing facility"
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
                    <CheckCircle className="w-6 h-6 text-accent-emerald mr-3 flex-shrink-0 mt-1" />
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
            <h2 className="font-bold text-4xl text-navy-900 mb-6">Edennova's Energy Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Intelligent PLM solutions designed for the complex operational requirements of the energy sector
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
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-emerald to-accent-gold rounded-lg flex items-center justify-center mb-4 text-white">
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
              <h2 className="font-bold text-4xl text-navy-900 mb-6">Comprehensive Energy Capabilities</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our oil & gas expertise covers the entire value chain, from exploration and production 
                to refining and distribution, with a focus on sustainable operations.
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
                src="https://images.unsplash.com/photo-1578661996442-748d4ada84f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern energy facility"
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
            <h2 className="font-bold text-4xl mb-6">Operational Excellence Results</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our energy clients achieve significant improvements in operational efficiency, cost management, and sustainability
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
                <div className="text-4xl md:text-5xl font-bold text-accent-emerald mb-2">{metric.value}</div>
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
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Oil and gas success story"
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl text-navy-900 mb-4">
                    Energy Giant Cuts Maintenance Costs by $50M Annually
                  </CardTitle>
                  <CardDescription className="text-base">
                    Global energy company transforms asset management with predictive analytics, 
                    preventing critical failures and optimizing performance across operations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Cost Savings:</span>
                      <span className="font-semibold text-accent-emerald">$50M annually</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Unplanned Downtime:</span>
                      <span className="font-semibold text-accent-emerald">-60%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Asset Performance:</span>
                      <span className="font-semibold text-accent-emerald">+40%</span>
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
            <h2 className="font-bold text-4xl text-navy-900 mb-6">Ready to Optimize Your Energy Operations?</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Discover how intelligent PLM solutions can enhance your oil & gas operations 
              while supporting your sustainability and energy transition goals.
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
