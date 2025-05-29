import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { Search, Filter, ArrowRight, TrendingUp, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function CaseStudies() {
  const [selectedFilter, setSelectedFilter] = useState("All Industries");
  const [searchTerm, setSearchTerm] = useState("");

  const filters = ["All Industries", "Automotive", "Aerospace", "Oil & Gas"];

  const caseStudies = [
    {
      id: 1,
      title: "Global Auto Manufacturer Reduces Development Time by 35%",
      summary: "Leading automotive OEM transforms product development process with AI-powered PLM integration, achieving significant improvements in efficiency and quality.",
      industry: "Automotive",
      category: "Automotive",
      challenge: "Complex vehicle development processes with lengthy iteration cycles",
      solution: "AI-powered design optimization and predictive analytics integration",
      metrics: { efficiency: "35%", cost: "$50M", quality: "60%" },
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["AI Integration", "Design Optimization", "Cost Reduction"],
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Defense Contractor Achieves 99.8% Compliance Rate",
      summary: "Aerospace company transforms compliance management with AI-powered PLM, ensuring regulatory adherence while accelerating certification processes.",
      industry: "Aerospace",
      category: "Aerospace",
      challenge: "Complex regulatory compliance across multiple jurisdictions",
      solution: "Automated compliance tracking and intelligent documentation management",
      metrics: { compliance: "99.8%", certification: "45%", errors: "80%" },
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Compliance Management", "Regulatory", "Automation"],
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Energy Giant Cuts Maintenance Costs by $50M Annually",
      summary: "Global energy company implements predictive maintenance system powered by digital twins, preventing critical failures and optimizing asset performance.",
      industry: "Oil & Gas",
      category: "Oil & Gas",
      challenge: "High maintenance costs and unplanned equipment downtime",
      solution: "Predictive analytics and digital twin implementation",
      metrics: { savings: "$50M", downtime: "60%", performance: "40%" },
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Predictive Maintenance", "Digital Twins", "Cost Savings"],
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Electric Vehicle Startup Accelerates Time-to-Market by 50%",
      summary: "Innovative EV manufacturer leverages AI-driven PLM to streamline development processes and compete with established automotive giants.",
      industry: "Automotive",
      category: "Automotive",
      challenge: "Rapid product development in competitive EV market",
      solution: "Integrated AI design assistance and automated testing workflows",
      metrics: { timeToMarket: "50%", development: "40%", testing: "65%" },
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Electric Vehicles", "Time-to-Market", "Innovation"],
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Commercial Aviation Company Reduces Certification Time by 40%",
      summary: "Major aircraft manufacturer streamlines certification processes through intelligent document management and automated compliance verification.",
      industry: "Aerospace",
      category: "Aerospace",
      challenge: "Lengthy aircraft certification and approval processes",
      solution: "AI-powered document analysis and compliance automation",
      metrics: { certification: "40%", documentation: "70%", approvals: "55%" },
      image: "https://images.unsplash.com/photo-1569629465691-467de9e3e83a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Aircraft Certification", "Document Management", "Process Optimization"],
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Offshore Platform Operator Improves Safety Metrics by 75%",
      summary: "Oil & gas operator implements comprehensive digital monitoring system, significantly improving safety outcomes and operational reliability.",
      industry: "Oil & Gas",
      category: "Oil & Gas",
      challenge: "Safety risks and environmental compliance in offshore operations",
      solution: "Real-time monitoring and predictive safety analytics",
      metrics: { safety: "75%", incidents: "85%", compliance: "95%" },
      image: "https://images.unsplash.com/photo-1578661996442-748d4ada84f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Safety Management", "Offshore Operations", "Environmental Compliance"],
      readTime: "12 min read"
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesFilter = selectedFilter === "All Industries" || study.category === selectedFilter;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-bold text-4xl md:text-6xl mb-6">Case Studies</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Real results from real clients across automotive, aerospace, and oil & gas industries. 
              Discover how AI-powered PLM transforms operations and delivers measurable ROI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(filter)}
                  className={selectedFilter === filter ? "bg-accent-cyan text-navy-900 hover:bg-accent-emerald" : ""}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 card-hover">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={getCategoryColor(study.category)}>
                        {study.category}
                      </Badge>
                      <div className="flex items-center text-sm text-slate-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-navy-900 line-clamp-2">
                      {study.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {study.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {Object.entries(study.metrics).slice(0, 3).map(([key, value]) => (
                        <div key={key} className="text-center p-2 bg-slate-50 rounded">
                          <div className="text-lg font-bold text-accent-emerald">{value}</div>
                          <div className="text-xs text-slate-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {study.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full bg-accent-emerald text-white hover:bg-accent-cyan group">
                      Read Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">No case studies found</h3>
              <p className="text-slate-500 mb-4">
                Try adjusting your search terms or filter criteria
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedFilter("All Industries");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-bold text-4xl mb-6">Collective Impact</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Across all our case studies, clients consistently achieve significant improvements in key performance metrics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <TrendingUp className="w-8 h-8" />, value: "40%", label: "Average Efficiency Gain" },
              { icon: <Users className="w-8 h-8" />, value: "200+", label: "Projects Completed" },
              { icon: <TrendingUp className="w-8 h-8" />, value: "$500M+", label: "Total Client Savings" },
              { icon: <Users className="w-8 h-8" />, value: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent-emerald/20 rounded-full flex items-center justify-center mx-auto mb-4 text-accent-emerald">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-accent-emerald mb-2">{stat.value}</div>
                <div className="text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="font-bold text-4xl text-navy-900 mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Join the growing list of industry leaders who have transformed their operations with 
              Edennova's AI-powered PLM solutions. Let's discuss your unique challenges and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-accent-emerald text-white hover:bg-accent-cyan">
                  Start Your Transformation
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
