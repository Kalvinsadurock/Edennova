import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function OilGas() {
  const challenges = [
    {
      title: 'Asset Integrity',
      description: 'Maintain aging infrastructure while ensuring operational safety and environmental compliance.',
      icon: 'fas fa-wrench',
    },
    {
      title: 'Environmental Compliance',
      description: 'Navigate complex environmental regulations and sustainability requirements.',
      icon: 'fas fa-leaf',
    },
    {
      title: 'Operational Efficiency',
      description: 'Optimize production while minimizing downtime and operational costs.',
      icon: 'fas fa-chart-line',
    },
    {
      title: 'Safety Management',
      description: 'Ensure worker safety and prevent incidents in hazardous operating environments.',
      icon: 'fas fa-hard-hat',
    },
  ];

  const solutions = [
    {
      title: 'Asset Optimization AI',
      description: 'Intelligent asset monitoring and optimization maximizes performance while minimizing maintenance costs.',
      capabilities: [
        'Predictive maintenance scheduling',
        'Performance optimization algorithms',
        'Asset lifecycle management',
        'Condition-based monitoring',
      ],
    },
    {
      title: 'Safety Monitoring Systems',
      description: 'Advanced AI-powered safety systems provide real-time monitoring and incident prevention.',
      capabilities: [
        'Real-time safety monitoring',
        'Incident prediction and prevention',
        'Emergency response optimization',
        'Safety compliance tracking',
      ],
    },
    {
      title: 'Environmental Compliance',
      description: 'Automated environmental monitoring and reporting ensures regulatory compliance.',
      capabilities: [
        'Emissions monitoring and reporting',
        'Environmental impact assessment',
        'Regulatory compliance automation',
        'Sustainability metrics tracking',
      ],
    },
  ];

  const benefits = [
    { metric: '60%', description: 'Asset utilization improvement' },
    { metric: '45%', description: 'Maintenance cost reduction' },
    { metric: '30%', description: 'Safety improvement' },
    { metric: '35%', description: 'Compliance efficiency' },
  ];

  const caseStudy = {
    title: 'Energy Giant Optimizes Asset Performance by 60%',
    description: 'Major oil & gas company transforms operations with AI-powered PLM',
    challenges: [
      'Aging infrastructure causing frequent failures',
      'Manual safety monitoring processes',
      'Complex environmental compliance requirements',
    ],
    solutions: [
      'Implemented AI-powered asset optimization',
      'Deployed intelligent safety monitoring systems',
      'Automated environmental compliance tracking',
    ],
    results: [
      '60% improvement in asset utilization',
      '45% reduction in maintenance costs',
      '30% improvement in safety metrics',
      '$75M annual operational savings',
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
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
            alt="Oil gas industrial facilities"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <i className="fas fa-oil-well text-cyan text-5xl mr-4"></i>
                <h1 className="text-5xl md:text-6xl font-poppins font-bold">
                  Oil & Gas <span className="text-gradient">PLM</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Optimize operations and safety with AI-powered asset management, 
                predictive maintenance, and environmental monitoring solutions.
              </p>
              <Button
                onClick={openContactModal}
                className="bg-cyan text-navy-900 px-8 py-4 text-lg font-semibold hover:bg-cyan/90 transition-all duration-300"
              >
                Request Oil & Gas Demo
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Oil gas industrial facilities"
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
              Oil & Gas Industry <span className="text-gradient">Challenges</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Energy companies face complex operational challenges requiring intelligent solutions
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
              Our intelligent PLM solutions address oil & gas industry challenges with proven AI capabilities
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
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1581092918056-0c4c3acd3789' : index === 1 ? '1578662996442-48f60103fc96' : '1635070041078-e363dbe005cb'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400`}
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
              Proven results from energy companies using our AI-powered PLM solutions
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
              Real-world transformation in oil & gas operations
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
            Ready to Optimize Your Operations?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover how our AI-powered oil & gas PLM solutions can enhance safety, 
            improve efficiency, and optimize asset performance.
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
              Download Energy Brief
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
