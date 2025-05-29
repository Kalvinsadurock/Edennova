import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function CaseStudies() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: 'Global Automaker Reduces Development Time by 45%',
      industry: 'automotive',
      industryLabel: 'Automotive',
      metrics: '45% Efficiency Gain',
      excerpt: 'Implementation of AI-powered predictive analytics resulted in significant improvements in quality control and supply chain optimization.',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      challenge: 'Legacy PLM systems causing delays and quality issues discovered late in development cycle.',
      solution: 'Deployed AI-powered predictive quality analytics and digital twin simulation platform.',
      results: ['45% reduction in development time', '30% improvement in first-pass quality', '25% reduction in prototype costs'],
    },
    {
      id: 2,
      title: 'Defense Contractor Enhances Compliance Efficiency by 50%',
      industry: 'aerospace',
      industryLabel: 'Aerospace & Defense',
      metrics: '50% Compliance Improvement',
      excerpt: 'Advanced AI monitoring systems improved regulatory compliance while reducing operational overhead and risk exposure.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      challenge: 'Manual compliance tracking causing delays and difficulty maintaining audit trails across programs.',
      solution: 'Implemented AI-powered compliance management and automated risk assessment systems.',
      results: ['50% improvement in compliance efficiency', '35% reduction in program risks', '40% faster certification'],
    },
    {
      id: 3,
      title: 'Energy Giant Optimizes Asset Performance by 60%',
      industry: 'oil-gas',
      industryLabel: 'Oil & Gas',
      metrics: '60% Asset Optimization',
      excerpt: 'Intelligent asset monitoring and predictive maintenance transformed operational efficiency and safety standards.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      challenge: 'Aging infrastructure causing frequent failures and manual safety monitoring processes.',
      solution: 'Deployed AI-powered asset optimization and intelligent safety monitoring systems.',
      results: ['60% improvement in asset utilization', '45% reduction in maintenance costs', '30% safety improvement'],
    },
    {
      id: 4,
      title: 'Tier 1 Supplier Achieves 35% Quality Improvement',
      industry: 'automotive',
      industryLabel: 'Automotive',
      metrics: '35% Quality Boost',
      excerpt: 'AI-driven quality prediction and process optimization eliminated defects and improved supplier relationships.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      challenge: 'High defect rates affecting customer relationships and warranty costs.',
      solution: 'Implemented predictive quality analytics and real-time process monitoring.',
      results: ['35% reduction in defect rates', '50% faster issue resolution', '20% cost savings'],
    },
    {
      id: 5,
      title: 'Aerospace Manufacturer Reduces Certification Time',
      industry: 'aerospace',
      industryLabel: 'Aerospace & Defense',
      metrics: '40% Faster Certification',
      excerpt: 'Automated compliance documentation and intelligent risk assessment accelerated certification processes.',
      image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      challenge: 'Complex certification requirements causing project delays and increased costs.',
      solution: 'Deployed automated compliance tracking and AI-powered documentation generation.',
      results: ['40% reduction in certification time', '30% decrease in compliance costs', '25% fewer audit findings'],
    },
    {
      id: 6,
      title: 'Offshore Platform Improves Safety Metrics by 40%',
      industry: 'oil-gas',
      industryLabel: 'Oil & Gas',
      metrics: '40% Safety Improvement',
      excerpt: 'Real-time safety monitoring and predictive incident prevention enhanced worker safety and operational reliability.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      challenge: 'High-risk offshore operations requiring enhanced safety monitoring and incident prevention.',
      solution: 'Implemented AI-powered safety monitoring and predictive incident prevention systems.',
      results: ['40% improvement in safety metrics', '55% reduction in safety incidents', '30% faster emergency response'],
    },
  ];

  const filteredStudies = selectedFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedFilter);

  const getIndustryColor = (industry: string) => {
    switch (industry) {
      case 'automotive':
        return 'bg-cyan/10 text-cyan';
      case 'aerospace':
        return 'bg-emerald/10 text-emerald';
      case 'oil-gas':
        return 'bg-gold/10 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6">
            Success <span className="text-gradient">Stories</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real-world transformations powered by intelligent PLM solutions across 
            automotive, aerospace, and energy industries.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => setSelectedFilter('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-navy-900 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              All Industries
            </Button>
            <Button
              onClick={() => setSelectedFilter('automotive')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedFilter === 'automotive'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-navy-900 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Automotive
            </Button>
            <Button
              onClick={() => setSelectedFilter('aerospace')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedFilter === 'aerospace'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-navy-900 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Aerospace & Defense
            </Button>
            <Button
              onClick={() => setSelectedFilter('oil-gas')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedFilter === 'oil-gas'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-navy-900 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Oil & Gas
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <Card key={study.id} className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${getIndustryColor(study.industry)}`}>
                      {study.industryLabel}
                    </span>
                    <span className="text-emerald font-semibold">{study.metrics}</span>
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-navy-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.excerpt}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">Challenge:</h4>
                      <p className="text-sm text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">Solution:</h4>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <i className="fas fa-check text-emerald mr-2 text-xs"></i>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the industry leaders who have transformed their PLM processes with our AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => {
                const event = new CustomEvent('openContactModal');
                window.dispatchEvent(event);
              }}
              className="bg-cyan text-navy-900 px-8 py-4 text-lg font-semibold hover:bg-cyan/90 transition-all duration-300"
            >
              Start Your Transformation
            </Button>
            <Button
              variant="outline"
              className="border-white px-8 py-4 text-lg font-medium hover:bg-white/10 transition-all duration-300 text-[#001629] bg-[#00ffff]"
            >
              Download Case Study Collection
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
