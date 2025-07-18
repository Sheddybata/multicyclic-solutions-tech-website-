import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, CreditCard, Globe, Shield, Cloud, Smartphone } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Server className="h-12 w-12 text-blue-600" />,
      title: "ICT Solutions",
      description: "Custom software development, network infrastructure, cloud solutions, cybersecurity, and data management.",
      features: ["Network Infrastructure", "Cybersecurity", "Cloud Solutions", "Data Management"]
    },
    {
      icon: <CreditCard className="h-12 w-12 text-teal-600" />,
      title: "Financial Systems",
      description: "Secure and user-friendly financial solutions including digital payments and mobile banking for enhanced financial inclusion.",
      features: ["Digital Payments", "Mobile Banking", "Financial Inclusion", "Secure Transactions"]
    },
    {
      icon: <Globe className="h-12 w-12 text-blue-500" />,
      title: "Digital Trade Platforms",
      description: "E-commerce platforms and digital marketplaces connecting Nigerian businesses to local and global markets.",
      features: ["E-commerce Platforms", "Digital Marketplaces", "Global Connectivity", "Local Integration"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three pillars of innovation driving digital transformation across Nigeria
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-4 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;