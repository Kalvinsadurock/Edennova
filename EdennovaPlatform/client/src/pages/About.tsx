import { Card, CardContent } from '@/components/ui/card';

export default function About() {


  const coreValues = [
    {
      title: 'Innovation First',
      description: 'We pioneer breakthrough AI solutions that redefine what\'s possible in PLM.',
      icon: 'fas fa-lightbulb',
    },
    {
      title: 'Industry Expertise',
      description: 'Deep domain knowledge ensures our solutions address real-world challenges.',
      icon: 'fas fa-industry',
    },
    {
      title: 'Client Partnership',
      description: 'We build lasting relationships focused on mutual success and growth.',
      icon: 'fas fa-handshake',
    },
    {
      title: 'Measurable Impact',
      description: 'Every solution delivers quantifiable business value and ROI.',
      icon: 'fas fa-chart-line',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6">
            About <span className="text-gradient">Edennova</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are the pioneers of AI-powered PLM transformation, bridging the gap between 
            cutting-edge technology and industry-specific expertise to accelerate digital innovation.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-poppins font-bold text-navy-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2020 by industry veterans from automotive, aerospace, and technology sectors, 
                Edennova emerged from a shared vision: to revolutionize Product Lifecycle Management 
                through the power of artificial intelligence.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our founding team recognized that while 3DEXPERIENCE provided a robust platform for PLM, 
                the true potential lay in augmenting it with intelligent automation, predictive analytics, 
                and industry-specific AI models.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we partner with global leaders across automotive, aerospace, and energy sectors 
                to transform their product development processes, delivering measurable improvements in 
                efficiency, quality, and innovation speed.
              </p>
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

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan to-emerald rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-bullseye text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-poppins font-bold text-navy-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To accelerate industrial innovation by seamlessly integrating artificial intelligence 
                  with 3DEXPERIENCE PLM, empowering organizations to transform their product development 
                  processes and achieve unprecedented business outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald to-gold rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-eye text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-poppins font-bold text-navy-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the global leader in AI-powered PLM solutions, setting the standard for 
                  intelligent product lifecycle management across mission-critical industries and 
                  enabling the next generation of industrial innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-navy-900 mb-6">
              Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our approach to innovation and client partnership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan to-emerald rounded-lg flex items-center justify-center mx-auto mb-6">
                    <i className={`${value.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-navy-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Philosophy */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Technology <span className="text-gradient">Philosophy</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our approach combines the robustness of 3DEXPERIENCE with the intelligence of AI
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan to-emerald rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-cube text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-poppins font-semibold text-white mb-4">3DEXPERIENCE Foundation</h3>
                <p className="text-gray-300">
                  Built on the proven 3DEXPERIENCE platform, ensuring enterprise-grade reliability, 
                  scalability, and integration with existing PLM workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald to-gold rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-brain text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-poppins font-semibold text-white mb-4">AI Intelligence Layer</h3>
                <p className="text-gray-300">
                  Advanced machine learning models provide predictive insights, automated optimization, 
                  and intelligent decision support across the product lifecycle.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-cyan rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-cogs text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-poppins font-semibold text-white mb-4">Industry Customization</h3>
                <p className="text-gray-300">
                  Tailored AI models and workflows specific to automotive, aerospace, and energy sector 
                  requirements, regulations, and best practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
