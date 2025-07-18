import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Landmark, Shield, Wheat, Heart, User } from 'lucide-react';

const ClientsSection: React.FC = () => {
  const clientSectors = [
    {
      icon: <Building2 className="h-10 w-10 text-blue-600" />,
      title: "Businesses & Enterprises",
      description: "SMEs, Large Corporations, and Startups across various industries",
      services: ["Custom Software", "Digital Transformation", "Cloud Migration"]
    },
    {
      icon: <Landmark className="h-10 w-10 text-teal-600" />,
      title: "Financial Institutions",
      description: "Banks, Microfinance, and Financial Service Providers",
      services: ["Core Banking", "Mobile Banking", "Payment Systems"]
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-500" />,
      title: "Government Agencies",
      description: "Federal, State, and Local Government Organizations",
      services: ["E-Government", "Digital Services", "Data Management"]
    },
    {
      icon: <Wheat className="h-10 w-10 text-green-600" />,
      title: "Agricultural Sector",
      description: "Farmers, Agribusiness, and Agricultural Cooperatives",
      services: ["Farm Management", "Supply Chain", "Market Access"]
    },
    {
      icon: <Heart className="h-10 w-10 text-red-500" />,
      title: "Healthcare Providers",
      description: "Hospitals, Clinics, and Healthcare Organizations",
      services: ["Health Records", "Telemedicine", "Patient Management"]
    },
    {
      icon: <User className="h-10 w-10 text-purple-600" />,
      title: "Individuals",
      description: "Personal digital solutions and services",
      services: ["Mobile Apps", "Digital Wallets", "Personal Finance"]
    }
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diverse clients across multiple sectors, all united by our commitment to digital excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientSectors.map((sector, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-white p-4 rounded-full shadow-md">
                    {sector.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {sector.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-center">
                  {sector.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {sector.services.map((service, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;