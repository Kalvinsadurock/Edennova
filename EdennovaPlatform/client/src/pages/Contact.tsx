import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactSchema } from '@shared/schema';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const formSchema = insertContactSchema.extend({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      industry: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. We\'ll get back to you within 24 hours.',
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.message || 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: FormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      details: 'Info@edennova.com',
      subtext: 'General inquiries and support',
    },
    {
      icon: 'fas fa-phone',
      title: 'Call Us',
      details: '+91 - 9962439050',
      subtext: 'Monday - Friday, 9AM - 6PM IST',
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Us',
      details: 'Garden of Eden\nChennai, India',
      subtext: 'By appointment only',
    },
  ];

  const offices = [
    {
      city: 'Detroit',
      region: 'Automotive Hub',
      address: '456 Motor City Blvd\nDetroit, MI 48201',
      focus: 'Automotive PLM Solutions',
    },
    {
      city: 'Houston',
      region: 'Energy Sector',
      address: '789 Energy Plaza\nHouston, TX 77002',
      focus: 'Oil & Gas PLM Solutions',
    },
    {
      city: 'Seattle',
      region: 'Aerospace Center',
      address: '321 Aerospace Way\nSeattle, WA 98101',
      focus: 'Aerospace & Defense PLM',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your PLM processes with AI? Let's discuss how Edennova 
            can accelerate your digital transformation journey.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan to-emerald rounded-lg flex items-center justify-center mx-auto mb-6">
                    <i className={`${info.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-navy-900 mb-4">{info.title}</h3>
                  <p className="text-lg text-gray-700 mb-2 whitespace-pre-line">{info.details}</p>
                  <p className="text-sm text-gray-500">{info.subtext}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-poppins font-bold text-navy-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Ready to learn more about our AI-powered PLM solutions? Fill out the form below 
                and one of our experts will reach out to discuss your specific needs.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">
                            First Name *
                          </FormLabel>
                          <FormControl>
                            <Input {...field} className="focus:border-cyan" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">
                            Last Name *
                          </FormLabel>
                          <FormControl>
                            <Input {...field} className="focus:border-cyan" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-700">
                          Email Address *
                        </FormLabel>
                        <FormControl>
                          <Input type="email" {...field} className="focus:border-cyan" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">
                            Company
                          </FormLabel>
                          <FormControl>
                            <Input {...field} className="focus:border-cyan" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">
                            Industry
                          </FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="focus:border-cyan">
                                <SelectValue placeholder="Select Industry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="automotive">Automotive</SelectItem>
                              <SelectItem value="aerospace">Aerospace & Defense</SelectItem>
                              <SelectItem value="oil-gas">Oil & Gas</SelectItem>
                              <SelectItem value="manufacturing">General Manufacturing</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-700">
                          Message *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={5}
                            placeholder="Tell us about your PLM challenges and goals..."
                            className="focus:border-cyan"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-navy-900 text-white hover:bg-navy-800 py-4 font-semibold"
                  >
                    {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-3xl font-poppins font-bold text-navy-900 mb-6">Our Locations</h2>
              <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center mb-8">
                <div className="text-center text-gray-500">
                  <i className="fas fa-map text-4xl mb-4"></i>
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">Headquarters and Regional Offices</p>
                </div>
              </div>

              <div className="space-y-4">
                {offices.map((office, index) => (
                  <Card key={index} className="bg-white shadow-md">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-poppins font-semibold text-navy-900 mb-1">
                            {office.city}
                          </h3>
                          <p className="text-sm text-cyan font-medium mb-2">{office.region}</p>
                          <p className="text-sm text-gray-600 whitespace-pre-line mb-2">{office.address}</p>
                          <p className="text-sm text-gray-500 italic">{office.focus}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Guarantee */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-poppins font-bold text-navy-900 mb-4">
              Our Commitment to You
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <i className="fas fa-clock text-cyan text-3xl mb-4"></i>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">24-Hour Response</h3>
                <p className="text-gray-600">We respond to all inquiries within 24 hours</p>
              </div>
              <div className="text-center">
                <i className="fas fa-user-tie text-emerald text-3xl mb-4"></i>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Expert Consultation</h3>
                <p className="text-gray-600">Connect directly with our PLM specialists</p>
              </div>
              <div className="text-center">
                <i className="fas fa-shield-alt text-gold text-3xl mb-4"></i>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Confidential</h3>
                <p className="text-gray-600">Your information is secure and confidential</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-navy-900 mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our AI-powered PLM solutions
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                  How long does a typical PLM implementation take?
                </h3>
                <p className="text-gray-600">
                  Implementation timelines vary based on scope and complexity, but most projects 
                  range from 3-12 months. We work closely with your team to minimize disruption 
                  and ensure successful adoption.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                  Do you support on-premise deployments?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer both cloud and on-premise deployment options to meet your 
                  security and compliance requirements. Our solutions are designed to work 
                  seamlessly in hybrid environments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                  What kind of training and support do you provide?
                </h3>
                <p className="text-gray-600">
                  We provide comprehensive training programs, documentation, and ongoing support. 
                  Our customer success team ensures you get maximum value from your investment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                  Can you integrate with our existing systems?
                </h3>
                <p className="text-gray-600">
                  Absolutely. Our solutions are designed to integrate with existing ERP, CAD, 
                  and other enterprise systems. We conduct thorough integration planning as 
                  part of every implementation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
