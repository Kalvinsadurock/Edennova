import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function Services() {
  const coreCapabilities = [
    {
      icon: 'fas fa-brain',
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms provide predictive insights and automated optimization.',
    },
    {
      icon: 'fas fa-cube',
      title: '3DEXPERIENCE Integration',
      description: 'Seamless integration with existing 3DEXPERIENCE environments and workflows.',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Compliance & Security',
      description: 'Enterprise-grade security and industry-specific compliance management.',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization of product development processes.',
    },
    {
      icon: 'fas fa-users',
      title: 'Change Management',
      description: 'Comprehensive training and support for digital transformation initiatives.',
    },
    {
      icon: 'fas fa-sync',
      title: 'Digital Twin Technology',
      description: 'Real-time digital representations enabling simulation and predictive maintenance.',
    },
  ];

  const industries = [
    {
      name: 'Automotive',
      icon: 'fas fa-car',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      description: 'Accelerate vehicle development with AI-driven solutions for predictive maintenance, quality optimization, and supply chain intelligence.',
      href: '/automotive',
      benefits: ['45% faster development cycles', '30% quality improvement', '25% cost reduction'],
    },
    {
      name: 'Aerospace & Defense',
      icon: 'fas fa-plane',
      image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      description: 'Mission-critical PLM solutions ensuring compliance, traceability, and performance optimization for aerospace applications.',
      href: '/aerospace',
      benefits: ['50% compliance efficiency', '35% risk reduction', '40% faster certification'],
    },
    {
      name: 'Oil & Gas',
      icon: 'fas fa-oil-well',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      description: 'Optimize operations and safety with AI-powered asset management, predictive maintenance, and environmental monitoring.',
      href: '/oil-gas',
      benefits: ['60% asset utilization', '45% maintenance cost reduction', '30% safety improvement'],
    },
  ];

  const openContactModal = () => {
    const event = new CustomEvent('openContactModal');
    window.dispatchEvent(event);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6">
            AI-Powered <span className="text-gradient">PLM Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your product lifecycle management with intelligent automation, 
            predictive analytics, and industry-specific AI solutions built on 3DEXPERIENCE.
          </p>
          <Button
            onClick={openContactModal}
            className="bg-cyan text-navy-900 px-8 py-4 text-lg font-semibold hover:bg-cyan/90 transition-all duration-300 hover:scale-105"
          >
            Schedule Consultation
          </Button>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-navy-900 mb-6">
              Core <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our comprehensive suite of AI-powered PLM capabilities designed to accelerate innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((capability, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan to-emerald rounded-lg flex items-center justify-center mb-6">
                    <i className={`${capability.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-navy-900 mb-4">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3DEXPERIENCE Integration */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-poppins font-bold text-navy-900 mb-6">
                Built on <span className="text-gradient">3DEXPERIENCE</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our AI solutions are deeply integrated with the 3DEXPERIENCE platform, ensuring 
                seamless compatibility with your existing PLM infrastructure while adding 
                intelligent capabilities that transform how you manage product lifecycles.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check text-emerald text-xl mr-4"></i>
                  <span className="text-gray-700">Native 3DEXPERIENCE integration</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-emerald text-xl mr-4"></i>
                  <span className="text-gray-700">Backward compatibility with existing data</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-emerald text-xl mr-4"></i>
                  <span className="text-gray-700">Enterprise-grade security and scalability</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-emerald text-xl mr-4"></i>
                  <span className="text-gray-700">Cloud and on-premise deployment options</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="3D CAD engineering dashboards"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-navy-900 mb-6">
              Industry <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Specialized AI-powered PLM solutions tailored for mission-critical industries
            </p>
          </div>

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <i className={`${industry.icon} text-cyan text-4xl mr-4`}></i>
                    <h3 className="text-3xl font-poppins font-bold text-navy-900">{industry.name}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <i className="fas fa-check text-emerald text-lg mr-3"></i>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={industry.href}>
                    <Button className="bg-navy-900 text-white hover:bg-navy-800 transition-all duration-300">
                      Learn More About {industry.name} Solutions
                      <i className="fas fa-arrow-right ml-2"></i>
                    </Button>
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Capabilities */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Cross-Industry <span className="text-gradient">Innovation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our AI capabilities transcend industry boundaries, enabling knowledge transfer and 
              best practice sharing across automotive, aerospace, and energy sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan to-emerald rounded-lg flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-exchange-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-poppins font-semibold text-white mb-4">Knowledge Transfer</h3>
                <p className="text-gray-300">
                  AI models trained across industries enable cross-pollination of best practices 
                  and innovative solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald to-gold rounded-lg flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-network-wired text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-poppins font-semibold text-white mb-4">Unified Platform</h3>
                <p className="text-gray-300">
                  Single platform approach enables seamless collaboration across different 
                  industry divisions within large organizations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-cyan rounded-lg flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-rocket text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-poppins font-semibold text-white mb-4">Accelerated Innovation</h3>
                <p className="text-gray-300">
                  Leverage insights and innovations from one industry to accelerate development 
                  in another, reducing time-to-market.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-cyan to-emerald text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Ready to Transform Your PLM?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover how our AI-powered solutions can accelerate your product development 
            and deliver measurable business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={openContactModal}
              className="bg-white text-navy-900 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              className="border-white text-white px-8 py-4 text-lg font-medium hover:bg-white/10 transition-all duration-300"
            >
              Download Solution Brief
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
