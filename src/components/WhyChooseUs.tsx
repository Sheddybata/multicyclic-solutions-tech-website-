import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Trophy, Zap } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <CheckCircle className="h-8 w-8 text-teal-600" />,
      title: "Proven Excellence",
      description: "Track record of successful digital transformations across Nigeria"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Collaborative Approach",
      description: "We work closely with you to understand and meet your unique needs"
    },
    {
      icon: <Trophy className="h-8 w-8 text-teal-500" />,
      title: "National Impact",
      description: "Committed to driving Nigeria's digital economy forward"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: "Innovation First",
      description: "Cutting-edge solutions that keep you ahead of the competition"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600">
            Your trusted partner for digital transformation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;