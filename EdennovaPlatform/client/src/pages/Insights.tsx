import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Insights() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const insights = [
    {
      id: 1,
      title: 'The Future of AI in Product Lifecycle Management',
      type: 'blog',
      typeLabel: 'Article',
      date: 'December 15, 2024',
      excerpt: 'Exploring how artificial intelligence is revolutionizing traditional PLM processes and creating new opportunities for innovation across industries.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      readTime: '8 min read',
      author: 'Dr. Sarah Chen',
    },
    {
      id: 2,
      title: 'Digital Transformation in Automotive Manufacturing',
      type: 'whitepaper',
      typeLabel: 'Whitepaper',
      date: 'December 10, 2024',
      excerpt: 'Comprehensive guide to implementing AI-powered PLM solutions in automotive production environments.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      readTime: '25 min read',
      author: 'Michael Rodriguez',
    },
    {
      id: 3,
      title: 'ROI Strategies for PLM Digital Transformation',
      type: 'webinar',
      typeLabel: 'Webinar',
      date: 'December 5, 2024',
      excerpt: 'Join our experts for insights on measuring and maximizing return on investment in PLM modernization initiatives.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      readTime: '60 min webinar',
      author: 'Jennifer Park',
    },
    {
      id: 4,
      title: 'Aerospace Compliance in the Age of AI',
      type: 'blog',
      typeLabel: 'Article',
      date: 'November 28, 2024',
      excerpt: 'How AI-powered compliance management is transforming aerospace and defense industry standards.',
      image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      readTime: '6 min read',
      author: 'Jennifer Park',
    },
    {
      id: 5,
      title: 'Predictive Maintenance in Oil & Gas Operations',
      type: 'whitepaper',
      typeLabel: 'Whitepaper',
      date: 'November 20, 2024',
      excerpt: 'Advanced strategies for implementing AI-driven predictive maintenance in energy sector operations.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      readTime: '30 min read',
      author: 'David Thompson',
    },
    {
      id: 6,
      title: 'Building Digital Twins for Manufacturing Excellence',
      type: 'webinar',
      typeLabel: 'Webinar',
      date: 'November 15, 2024',
      excerpt: 'Learn how digital twin technology is revolutionizing product development and manufacturing processes.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      readTime: '45 min webinar',
      author: 'Dr. Sarah Chen',
    },
    {
      id: 7,
      title: 'Supply Chain Intelligence: Beyond Traditional PLM',
      type: 'blog',
      typeLabel: 'Article',
      date: 'November 8, 2024',
      excerpt: 'Exploring how AI-powered supply chain intelligence is transforming procurement and vendor management.',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      readTime: '7 min read',
      author: 'Michael Rodriguez',
    },
    {
      id: 8,
      title: 'Sustainability Metrics in Modern PLM Systems',
      type: 'whitepaper',
      typeLabel: 'Whitepaper',
      date: 'October 30, 2024',
      excerpt: 'How AI-driven PLM systems are enabling better sustainability tracking and environmental compliance.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
      readTime: '20 min read',
      author: 'David Thompson',
    },
  ];

  const filteredInsights = insights.filter(insight => {
    const matchesSearch = insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         insight.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || insight.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-cyan/10 text-cyan';
      case 'whitepaper':
        return 'bg-emerald/10 text-emerald';
      case 'webinar':
        return 'bg-gold/10 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return 'fas fa-newspaper';
      case 'whitepaper':
        return 'fas fa-file-pdf';
      case 'webinar':
        return 'fas fa-video';
      default:
        return 'fas fa-file';
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6">
            Latest <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with expert perspectives on AI-powered PLM innovation, 
            industry trends, and best practices from our thought leaders.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <Input
                  type="text"
                  placeholder="Search insights..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => setSelectedType('all')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedType === 'all'
                    ? 'bg-navy-900 text-white'
                    : 'bg-white text-navy-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                All Content
              </Button>
              <Button
                onClick={() => setSelectedType('blog')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedType === 'blog'
                    ? 'bg-navy-900 text-white'
                    : 'bg-white text-navy-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Articles
              </Button>
              <Button
                onClick={() => setSelectedType('whitepaper')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedType === 'whitepaper'
                    ? 'bg-navy-900 text-white'
                    : 'bg-white text-navy-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Whitepapers
              </Button>
              <Button
                onClick={() => setSelectedType('webinar')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedType === 'webinar'
                    ? 'bg-navy-900 text-white'
                    : 'bg-white text-navy-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Webinars
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredInsights.length === 0 ? (
            <div className="text-center py-16">
              <i className="fas fa-search text-6xl text-gray-300 mb-6"></i>
              <h3 className="text-2xl font-poppins font-semibold text-gray-600 mb-4">No insights found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInsights.map((insight) => (
                <Card key={insight.id} className="group cursor-pointer bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${getTypeColor(insight.type)}`}>
                        <i className={`${getTypeIcon(insight.type)} mr-2`}></i>
                        {insight.typeLabel}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                      <span>{insight.date}</span>
                      <span>{insight.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-poppins font-semibold text-navy-900 mb-3 group-hover:text-cyan transition-colors">
                      {insight.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{insight.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500">By {insight.author}</span>
                      </div>
                      
                      <div className="flex items-center text-cyan font-semibold hover:text-emerald transition-colors">
                        {insight.type === 'whitepaper' ? 'Download' : insight.type === 'webinar' ? 'Register' : 'Read'}
                        <i className="fas fa-arrow-right ml-2"></i>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Stay <span className="text-gradient">Informed</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter for the latest insights on AI-powered PLM innovation 
            and industry best practices delivered directly to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-gray-600 text-white placeholder-gray-400 focus:border-cyan"
            />
            <Button className="bg-cyan text-navy-900 px-8 py-3 font-semibold hover:bg-cyan/90 transition-colors">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-gray-400 mt-4">
            Join 10,000+ industry professionals who trust our insights
          </p>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-navy-900 mb-6">
              Featured <span className="text-gradient">Resources</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Essential resources for PLM professionals and decision makers
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-cyan to-emerald text-white shadow-xl">
              <CardContent className="p-8 text-center">
                <i className="fas fa-book text-4xl mb-6"></i>
                <h3 className="text-2xl font-poppins font-bold mb-4">Ultimate PLM Guide</h3>
                <p className="mb-6">Comprehensive guide to AI-powered PLM implementation across industries.</p>
                <Button className="bg-white text-navy-900 hover:bg-gray-100">
                  Download Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald to-gold text-white shadow-xl">
              <CardContent className="p-8 text-center">
                <i className="fas fa-calculator text-4xl mb-6"></i>
                <h3 className="text-2xl font-poppins font-bold mb-4">ROI Calculator</h3>
                <p className="mb-6">Calculate potential returns from AI-powered PLM transformation.</p>
                <Button className="bg-white text-navy-900 hover:bg-gray-100">
                  Use Calculator
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gold to-cyan text-white shadow-xl">
              <CardContent className="p-8 text-center">
                <i className="fas fa-chart-pie text-4xl mb-6"></i>
                <h3 className="text-2xl font-poppins font-bold mb-4">Industry Report</h3>
                <p className="mb-6">Latest trends and benchmarks in AI-powered PLM adoption.</p>
                <Button className="bg-white text-navy-900 hover:bg-gray-100">
                  Get Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
