import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';

export default function Home() {
  const openContactModal = () => {
    const event = new CustomEvent('openContactModal');
    window.dispatchEvent(event);
  };

  const valueProps = [
    {
      icon: 'fas fa-brain',
      title: 'Pioneering AI Integration',
      description: 'Advanced AI algorithms seamlessly integrated with 3DEXPERIENCE platform for unprecedented insights.',
      gradient: 'from-cyan to-emerald',
    },
    {
      icon: 'fas fa-industry',
      title: 'Deep Industry Expertise',
      description: 'Decades of combined experience across automotive, aerospace, and energy sectors.',
      gradient: 'from-emerald to-gold',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Tangible Business ROI',
      description: 'Proven track record of delivering 30-50% efficiency gains and cost reductions.',
      gradient: 'from-gold to-cyan',
    },
    {
      icon: 'fas fa-handshake',
      title: 'Strategic Partner',
      description: 'Long-term digital transformation partnerships that evolve with your business needs.',
      gradient: 'from-navy-800 to-cyan',
    },
  ];

  const industries = [
    {
      name: 'Automotive',
      icon: 'fas fa-car',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      description: 'Accelerate vehicle development with AI-driven predictive maintenance, quality optimization, and supply chain intelligence.',
      capabilities: ['Predictive Quality Analytics', 'Digital Twin Simulation', 'Supply Chain Optimization'],
      href: '/automotive',
    },
    {
      name: 'Aerospace & Defense',
      icon: 'fas fa-plane',
      image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      description: 'Mission-critical PLM solutions ensuring compliance, traceability, and performance optimization for aerospace applications.',
      capabilities: ['Compliance Management', 'Performance Analytics', 'Risk Assessment AI'],
      href: '/aerospace',
    },
    {
      name: 'Oil & Gas',
      icon: 'fas fa-oil-well',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      description: 'Optimize operations and safety with AI-powered asset management, predictive maintenance, and environmental monitoring.',
      capabilities: ['Asset Optimization', 'Safety Monitoring', 'Environmental Compliance'],
      href: '/oil-gas',
    },
  ];

  const caseStudies = [
    {
      title: 'Global Automaker Reduces Development Time',
      industry: 'Automotive',
      metrics: '45% Efficiency Gain',
      excerpt: 'Implementation of AI-powered predictive analytics resulted in significant improvements in quality control and supply chain optimization.',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      category: 'automotive',
    },
    {
      title: 'Defense Contractor Enhances Compliance',
      industry: 'Aerospace',
      metrics: '30% Cost Reduction',
      excerpt: 'Advanced AI monitoring systems improved regulatory compliance while reducing operational overhead and risk exposure.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      category: 'aerospace',
    },
    {
      title: 'Energy Giant Optimizes Asset Performance',
      industry: 'Oil & Gas',
      metrics: '25% Safety Improvement',
      excerpt: 'Intelligent asset monitoring and predictive maintenance transformed operational efficiency and safety standards.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      category: 'oil-gas',
    },
  ];

  const insights = [
    {
      title: 'The Future of AI in Product Lifecycle Management',
      type: 'AI & PLM',
      date: 'Dec 15, 2024',
      excerpt: 'Exploring how artificial intelligence is revolutionizing traditional PLM processes and creating new opportunities for innovation.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
    },
    {
      title: 'Digital Transformation in Automotive Manufacturing',
      type: 'Whitepaper',
      date: 'Dec 10, 2024',
      excerpt: 'Comprehensive guide to implementing AI-powered PLM solutions in automotive production environments.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
    },
    {
      title: 'ROI Strategies for PLM Digital Transformation',
      type: 'Webinar',
      date: 'Dec 5, 2024',
      excerpt: 'Join our experts for insights on measuring and maximizing return on investment in PLM modernization initiatives.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 bg-navy-900">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video opacity-60"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <img
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="AI neural networks visualization"
              className="hero-video opacity-60"
            />
          </video>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 gradient-overlay"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-poppins font-bold text-white mb-6 leading-tight">
              Intelligent <span className="text-gradient">PLM</span>.<br />
              Accelerated <span className="text-gradient">Industries</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transforming Product Lifecycles with AI-Powered 3DEXPERIENCE.<br />
              <span className="text-cyan font-medium">Innovating the Future PLM</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={openContactModal}
                className="bg-cyan text-navy-900 px-8 py-4 text-lg font-semibold hover:bg-cyan/90 transition-all duration-300 hover:scale-105 animate-glow hover-glow bounce-in"
              >
                Request Demo
              </Button>
              <Link href="/case-studies">
                <Button
                  variant="outline"
                  className="glass-morphism px-8 py-4 text-lg font-medium hover:bg-white/20 transition-all duration-300 border-white/20 bg-[#00ffff] text-[#001629] hover-scale fade-in-up"
                >
                  Watch Case Study
                </Button>
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <i className="fas fa-chevron-down text-white text-2xl"></i>
          </div>
        </div>
      </section>

      {/* Why Edennova Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-navy-900 mb-6">
              Why <span className="text-gradient">Edennova</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We bridge the gap between cutting-edge AI technology and industry-specific PLM expertise,
              delivering transformational solutions that drive measurable business outcomes across automotive,
              aerospace, and energy sectors.
            </p>
          </div>

          {/* Value Propositions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <Card key={index} className="bg-white shadow-lg hover-lift stagger-fade group cursor-pointer">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${prop.gradient} rounded-lg flex items-center justify-center mb-6 rotate-on-hover`}>
                    <i className={`${prop.icon} text-white text-2xl transition-transform duration-300 group-hover:scale-110`}></i>
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-navy-900 mb-4 group-hover:text-cyan transition-colors duration-300">{prop.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{prop.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pillars Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-navy-900 mb-6">
              Industry <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized AI-powered PLM solutions tailored for mission-critical industries
            </p>
          </div>

          {/* Industry Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group relative overflow-hidden bg-white shadow-xl hover-lift transition-all duration-500 stagger-fade">
                <div className="relative overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent"></div>
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <i className={`${industry.icon} text-cyan text-3xl mr-4 float`}></i>
                    <h3 className="text-2xl font-poppins font-bold text-navy-900 group-hover:text-cyan transition-colors duration-300">{industry.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">{industry.description}</p>
                  <ul className="space-y-2 mb-8 text-sm text-gray-500">
                    {industry.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-center group-hover:text-gray-600 transition-colors duration-300">
                        <i className="fas fa-check text-emerald mr-2 pulse-on-hover"></i>
                        {capability}
                      </li>
                    ))}
                  </ul>
                  <Link href={industry.href} className="inline-flex items-center text-cyan font-semibold hover:text-emerald transition-all duration-300 hover-scale">
                    Learn More <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Impact Section */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Proven <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering measurable results across industry leaders
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-poppins font-bold text-cyan mb-2">45%</div>
              <div className="text-gray-300">Efficiency Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-poppins font-bold text-emerald mb-2">30%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-poppins font-bold text-gold mb-2">25%</div>
              <div className="text-gray-300">Faster Time-to-Market</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-poppins font-bold text-cyan mb-2">50+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
          </div>


        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-navy-900 mb-6">
              Success <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world transformations powered by intelligent PLM
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-white shadow-lg overflow-hidden hover-lift group cursor-pointer stagger-fade">
                <div className="relative overflow-hidden">
                  <img src={study.image} alt={study.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 hover-scale ${
                      study.category === 'automotive' ? 'bg-cyan/10 text-cyan group-hover:bg-cyan group-hover:text-white' :
                      study.category === 'aerospace' ? 'bg-emerald/10 text-emerald group-hover:bg-emerald group-hover:text-white' :
                      'bg-gold/10 text-yellow-700 group-hover:bg-gold group-hover:text-navy-900'
                    }`}>
                      {study.industry}
                    </span>
                    <span className="text-emerald font-semibold bounce-in">{study.metrics}</span>
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-navy-900 mb-3 group-hover:text-cyan transition-colors duration-300">{study.title}</h3>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">{study.excerpt}</p>
                  <Link href="/case-studies" className="inline-flex items-center text-cyan font-semibold hover:text-emerald transition-all duration-300 hover-glow">
                    Read Full Case Study <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button className="bg-navy-900 text-white px-8 py-4 text-lg font-semibold hover:bg-navy-800 transition-all duration-300 hover:scale-105">
                View All Case Studies →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-navy-900 mb-6">
              Latest <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with expert perspectives on AI-powered PLM innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {insights.map((insight, index) => (
              <article key={index} className="group cursor-pointer">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                      insight.type === 'AI & PLM' ? 'bg-cyan/10 text-cyan' :
                      insight.type === 'Whitepaper' ? 'bg-emerald/10 text-emerald' :
                      'bg-gold/10 text-yellow-700'
                    }`}>
                      {insight.type}
                    </span>
                    <span className="text-gray-500 text-sm">{insight.date}</span>
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-navy-900 mb-3 group-hover:text-cyan transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                  <Link href="/insights" className="inline-flex items-center text-cyan font-semibold hover:text-emerald transition-colors">
                    Read Article <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link href="/insights">
              <Button className="bg-navy-900 text-white px-8 py-4 text-lg font-semibold hover:bg-navy-800 transition-all duration-300 hover:scale-105">
                View All Insights <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
            alt="AI neural networks data visualization"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Ready to Transform Your <span className="text-gradient">PLM</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how AI-powered 3DEXPERIENCE can accelerate your digital transformation.
            Download our comprehensive case study or schedule a personalized demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-cyan text-navy-900 px-8 py-4 text-lg font-semibold hover:bg-cyan/90 transition-all duration-300 hover:scale-105">
              Download Case Study
            </Button>
            <Button
              onClick={openContactModal}
              variant="outline"
              className="glass-morphism px-8 py-4 text-lg font-medium hover:bg-white/20 transition-all duration-300 border-white/20 text-[#001629] bg-[#00ffff]"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
