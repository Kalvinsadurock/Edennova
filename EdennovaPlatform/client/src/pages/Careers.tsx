import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Careers() {
  const benefits = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation Culture',
      description: 'Work on cutting-edge AI and PLM technologies that shape the future of industry.',
    },
    {
      icon: 'fas fa-users',
      title: 'Collaborative Team',
      description: 'Join a diverse team of experts passionate about solving complex challenges.',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Growth Opportunities',
      description: 'Accelerate your career with continuous learning and development programs.',
    },
    {
      icon: 'fas fa-balance-scale',
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements and comprehensive wellness programs.',
    },
    {
      icon: 'fas fa-globe',
      title: 'Global Impact',
      description: 'Make a difference by transforming how global industries operate.',
    },
    {
      icon: 'fas fa-trophy',
      title: 'Competitive Package',
      description: 'Competitive salary, equity participation, and comprehensive benefits.',
    },
  ];

  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of AI algorithms for PLM optimization and predictive analytics.',
      requirements: [
        'PhD or MS in Computer Science, AI, or related field',
        'Experience with machine learning frameworks (TensorFlow, PyTorch)',
        'Background in manufacturing or PLM systems',
        'Strong Python and cloud platform skills',
      ],
    },
    {
      title: 'PLM Solutions Architect',
      department: 'Engineering',
      location: 'Detroit, MI / Remote',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement enterprise PLM solutions for automotive and aerospace clients.',
      requirements: [
        'Extensive experience with 3DEXPERIENCE platform',
        'Background in automotive or aerospace industry',
        'Strong systems architecture and integration skills',
        'Excellent client-facing communication skills',
      ],
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Houston, TX / Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive customer adoption and success with our AI-powered PLM solutions.',
      requirements: [
        'Experience in customer success or account management',
        'Background in enterprise software or PLM',
        'Strong analytical and problem-solving skills',
        'Excellent communication and relationship-building abilities',
      ],
    },
    {
      title: 'Product Marketing Manager',
      department: 'Marketing',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead go-to-market strategy for AI-powered PLM solutions across industries.',
      requirements: [
        'B2B product marketing experience',
        'Understanding of manufacturing or PLM markets',
        'Strong content creation and campaign management skills',
        'Data-driven approach to marketing optimization',
      ],
    },
    {
      title: 'Data Scientist',
      department: 'Engineering',
      location: 'Boston, MA / Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop predictive models and analytics for manufacturing process optimization.',
      requirements: [
        'MS/PhD in Data Science, Statistics, or related field',
        'Experience with predictive modeling and time series analysis',
        'Knowledge of manufacturing processes and quality systems',
        'Proficiency in Python, R, and SQL',
      ],
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Create intuitive user experiences for complex PLM and AI-driven applications.',
      requirements: [
        'Portfolio demonstrating enterprise software design',
        'Experience with design systems and component libraries',
        'Understanding of complex workflow design',
        'Proficiency in Figma, Sketch, and prototyping tools',
      ],
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
            Join Our <span className="text-gradient">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Shape the future of AI-powered PLM and work alongside industry experts 
            to transform how global manufacturers innovate and operate.
          </p>
          <Button
            onClick={openContactModal}
            className="bg-cyan text-navy-900 px-8 py-4 text-lg font-semibold hover:bg-cyan/90 transition-all duration-300"
          >
            Explore Opportunities
          </Button>
        </div>
      </section>

      {/* Why Work at Edennova */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-navy-900 mb-6">
              Why Work at <span className="text-gradient">Edennova</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Join a mission-driven team that's revolutionizing industrial innovation through AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan to-emerald rounded-lg flex items-center justify-center mx-auto mb-6">
                    <i className={`${benefit.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-navy-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-poppins font-bold text-navy-900 mb-6">Our Culture</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Edennova, we believe that innovation thrives in an environment of collaboration, 
                continuous learning, and shared purpose. Our team combines deep technical expertise 
                with industry knowledge to solve the most challenging problems in manufacturing.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We foster a culture where diverse perspectives are valued, bold ideas are encouraged, 
                and everyone has the opportunity to make a meaningful impact on the future of industry.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check text-emerald text-lg mr-3"></i>
                  <span className="text-gray-700">Remote-first with flexible work arrangements</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-emerald text-lg mr-3"></i>
                  <span className="text-gray-700">Continuous learning and development budget</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-emerald text-lg mr-3"></i>
                  <span className="text-gray-700">Equity participation for all team members</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-emerald text-lg mr-3"></i>
                  <span className="text-gray-700">Comprehensive health and wellness benefits</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Professional business team technology"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-navy-900 mb-6">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Join our growing team and help shape the future of AI-powered PLM
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-2xl font-poppins font-bold text-navy-900">{position.title}</h3>
                        <span className="px-3 py-1 bg-cyan/10 text-cyan text-sm font-medium rounded-full">
                          {position.department}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <i className="fas fa-map-marker-alt mr-2"></i>
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <i className="fas fa-briefcase mr-2"></i>
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <i className="fas fa-clock mr-2"></i>
                          {position.experience}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{position.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-navy-900 mb-2">Key Requirements:</h4>
                        <ul className="space-y-1">
                          {position.requirements.slice(0, 2).map((req, reqIndex) => (
                            <li key={reqIndex} className="text-sm text-gray-600 flex items-start">
                              <i className="fas fa-check text-emerald mr-2 mt-1 text-xs"></i>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                      <Button
                        onClick={openContactModal}
                        className="bg-navy-900 text-white hover:bg-navy-800 transition-all duration-300 mb-4"
                      >
                        Apply Now
                      </Button>
                      <Button
                        variant="outline"
                        className="border-navy-900 text-navy-900 hover:bg-navy-50 transition-all duration-300"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Empowering the next generation of industrial innovation through AI
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-center">
                <i className="fas fa-rocket text-4xl text-cyan mb-6"></i>
                <h3 className="text-xl font-poppins font-semibold text-white mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We push the boundaries of what's possible, combining AI with deep industry expertise 
                  to create breakthrough solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-center">
                <i className="fas fa-hands-helping text-4xl text-emerald mb-6"></i>
                <h3 className="text-xl font-poppins font-semibold text-white mb-4">Collaboration</h3>
                <p className="text-gray-300">
                  We believe the best solutions emerge from diverse perspectives and collaborative 
                  problem-solving across disciplines.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-center">
                <i className="fas fa-bullseye text-4xl text-gold mb-6"></i>
                <h3 className="text-xl font-poppins font-semibold text-white mb-4">Impact</h3>
                <p className="text-gray-300">
                  We're driven by the opportunity to make a meaningful difference in how global 
                  industries design, build, and operate.
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
            Ready to Shape the Future?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't see the perfect role? We're always looking for exceptional talent. 
            Reach out and tell us how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={openContactModal}
              className="bg-white text-navy-900 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get in Touch
            </Button>
            <Button
              variant="outline"
              className="border-white text-white px-8 py-4 text-lg font-medium hover:bg-white/10 transition-all duration-300"
            >
              View Company Culture
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
