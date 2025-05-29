import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

export default function Footer() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest('POST', '/api/newsletter', { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success!',
        description: 'Thank you for subscribing to our newsletter.',
      });
      setEmail('');
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.message || 'Failed to subscribe. Please try again.',
        variant: 'destructive',
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate(email);
    }
  };

  return (
    <footer className="bg-navy-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-poppins font-bold mb-4">
              Eden<span className="text-gradient">nova</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming Product Lifecycles with AI-Powered 3DEXPERIENCE for the future of industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/automotive" className="hover:text-cyan transition-colors">
                  Automotive PLM
                </Link>
              </li>
              <li>
                <Link href="/aerospace" className="hover:text-cyan transition-colors">
                  Aerospace & Defense
                </Link>
              </li>
              <li>
                <Link href="/oil-gas" className="hover:text-cyan transition-colors">
                  Oil & Gas Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan transition-colors">
                  AI Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/case-studies" className="hover:text-cyan transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-cyan transition-colors">
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-cyan transition-colors">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-cyan transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                <span>Info@edennova.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-2"></i>
                <span>+91 - 9962439050</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mr-2 mt-1"></i>
                <span>
                  Garden of Eden<br />
                  Chennai, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-poppins font-semibold mb-4">Stay Updated</h4>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-gray-600 text-white placeholder-gray-400 focus:border-cyan"
                required
              />
              <Button
                type="submit"
                disabled={newsletterMutation.isPending}
                className="bg-cyan text-navy-900 hover:bg-cyan/90 font-semibold"
              >
                {newsletterMutation.isPending ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Edennova. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
