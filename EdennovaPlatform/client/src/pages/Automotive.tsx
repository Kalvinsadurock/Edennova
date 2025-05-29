import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Automotive() {
  const challenges = [
    {
      title: 'Accelerated Development Cycles',
      description: 'Pressure to reduce time-to-market while maintaining quality and safety standards.',
      icon: 'fas fa-clock',
    },
    {
      title: 'Supply Chain Complexity',
      description: 'Managing global supplier networks and ensuring component quality and availability.',
      icon: 'fas fa-link',
    },
    {
      title: 'Quality & Compliance',
      description: 'Meeting stringent automotive safety regulations and quality requirements.',
      icon: 'fas fa-shield-alt',
    },
    {
      title: 'Cost Optimization',
      description: 'Balancing innovation investments with competitive pricing pressures.',
      icon: 'fas fa-dollar-sign',
    },
  ];

  const solutions = [
    {
      title: 'Predictive Quality Analytics',
      description: 'AI-powered quality prediction identifies potential issues before they occur, reducing defects and warranty costs.',
      capabilities: [
        'Real-time quality monitoring',
        'Defect pattern recognition',
        'Supplier quality scoring',
        'Predictive maintenance alerts',
      ],
    },
    {
      title: 'Digital Twin Simulation',
      description: 'Virtual vehicle prototypes enable rapid testing and optimization without physical prototypes.',
      capabilities: [
        'Virtual crash testing',
        'Performance optimization',
        'Component interaction analysis',
        'Lifecycle simulation',
      ],
    },
    {
      title: 'Supply Chain Intelligence',
      description: 'AI-driven supply chain optimization ensures component availability and cost efficiency.',
      capabilities: [
        'Supplier risk assessment',
        'Demand forecasting',
        'Inventory optimization',
        'Alternative sourcing recommendations',
      ],
    },
  ];

  const benefits = [
    { metric: '45%', description: 'Faster development cycles' },
    { metric: '30%', description: 'Quality improvement' },
    { metric: '25%', description: 'Cost reduction' },
    { metric: '60%', description: 'Reduced prototype costs' },
  ];

  const caseStudy = {
    title: 'Global Automaker Achieves 45% Development Time Reduction',
    description: 'Leading automotive manufacturer implements AI-powered PLM transformation',
    challenges: [
      'Legacy PLM systems causing delays',
      'Quality issues discovered late in development',
      'Inefficient supplier collaboration',
    ],
    solutions: [
      'Implemented predictive quality analytics',
      'Deployed digital twin simulation platform',
      'Integrated AI-powered supply chain optimization',
    ],
    results: [
      '45% reduction in development time',
      '30% improvement in first-pass quality',
      '25% reduction in prototype costs',
      '$50M annual savings',
    ],
  };

  const openContactModal = () => {
    const event = new CustomEvent('openContactModal');
    window.dispatchEvent(event);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
            alt="Automotive manufacturing technology"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <i className="fas fa-car text-cyan text-5xl mr-4"></i>
                <h1 className="text-5xl md:text-6xl font-poppins font-bold">
                  Automotive <span className="text-gradient">PLM</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Accelerate vehicle development with AI-driven predictive maintenance, 
                quality optimization, and supply chain intelligence powered by 3DEXPERIENCE.
              </p>
              <Button
                onClick={openContactModal}
                className="bg-cyan text-navy-900 px-8 py-4 text-lg font-semibold hover:bg-cyan/90 transition-all duration-300"
              >
                Request Automotive Demo
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Automotive manufacturing technology"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-navy-900 mb-6">
              Automotive Industry <span className="text-gradient">Challenges</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Today's automotive manufacturers face unprecedented challenges in product development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan to-emerald rounded-lg flex items-center justify-center mx-auto mb-6">
                    <i className={`${challenge.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-navy-900 mb-4">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Driven Solutions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-navy-900 mb-6">
              AI-Driven <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our intelligent PLM solutions address automotive industry challenges with proven AI capabilities
            </p>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-3xl font-poppins font-bold text-navy-900 mb-6">{solution.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                  
                  <div className="space-y-3">
                    {solution.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center">
                        <i className="fas fa-check text-emerald text-lg mr-3"></i>
                        <span className="text-gray-700">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1635070041078-e363dbe005cb' : index === 1 ? '1581092918056-0c4c3acd3789' : '1563013544-824ae1b704d3'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400`}
                    alt={solution.title}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantifiable Benefits */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Quantifiable <span className="text-gradient">Benefits</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Proven results from automotive manufacturers who have implemented our AI-powered PLM solutions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-poppins font-bold text-cyan mb-4">{benefit.metric}</div>
                <div className="text-gray-300 text-lg">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-navy-900 mb-6">
              Success <span className="text-gradient">Story</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Real-world transformation powered by intelligent PLM
            </p>
          </div>

          <Card className="bg-white shadow-xl border-2 border-cyan/20">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-poppins font-bold text-navy-900 mb-4">{caseStudy.title}</h3>
                <p className="text-xl text-gray-600">{caseStudy.description}</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-poppins font-semibold text-navy-900 mb-4 flex items-center">
                    <i className="fas fa-exclamation-triangle text-red-500 mr-3"></i>
                    Challenges
                  </h4>
                  <ul className="space-y-3">
                    {caseStudy.challenges.map((challenge, index) => (
                      <li key={index} className="text-gray-600">{challenge}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-poppins font-semibold text-navy-900 mb-4 flex items-center">
                    <i className="fas fa-cogs text-cyan mr-3"></i>
                    Solutions
                  </h4>
                  <ul className="space-y-3">
                    {caseStudy.solutions.map((solution, index) => (
                      <li key={index} className="text-gray-600">{solution}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-poppins font-semibold text-navy-900 mb-4 flex items-center">
                    <i className="fas fa-trophy text-emerald mr-3"></i>
                    Results
                  </h4>
                  <ul className="space-y-3">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="text-gray-600 font-semibold">{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-cyan to-emerald text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Ready to Accelerate Your Automotive Development?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover how our AI-powered automotive PLM solutions can transform your 
            product development process and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={openContactModal}
              className="bg-white text-navy-900 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Request Demo
            </Button>
            <Button
              variant="outline"
              className="border-white text-white px-8 py-4 text-lg font-medium hover:bg-white/10 transition-all duration-300"
            >
              Download Automotive Brief
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
