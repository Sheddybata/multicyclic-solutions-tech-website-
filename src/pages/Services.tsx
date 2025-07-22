import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strategic Partners Section */}
        <div className="flex flex-col items-center gap-8 mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg px-8 py-12 border border-blue-200">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-6 text-center tracking-tight">Strategic Partners</h2>
          <div className="w-full grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Technology Providers</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-4 space-y-2">
                <li>Software Developers: Companies specializing in custom software, mobile apps, and enterprise solutions.</li>
                <li>Hardware Suppliers: Providers of servers, networking equipment, and other IT infrastructure.</li>
                <li>Cloud Service Providers: Companies like AWS, Microsoft Azure, and Google Cloud for cloud-based solutions.</li>
              </ul>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Financial Institutions and Fintech Companies</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-4 space-y-2">
                <li>Banks and Payment Processors: Partners for integrating digital payment systems and financial solutions.</li>
                <li>Fintech Innovators: Collaborators for developing cutting-edge financial tools and platforms.</li>
              </ul>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Government and Development Organizations</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-4 space-y-2">
                <li>Federal and State Governments: Partners for implementing large-scale ICT projects and digital transformation initiatives.</li>
                <li>NGOs and International Development Agencies: Organizations focused on financial inclusion, digital literacy, and economic development.</li>
              </ul>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Educational and Training Institutions</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-4 space-y-2">
                <li>Universities and Polytechnics: Partners for research, innovation, and capacity-building programs.</li>
                <li>Training Centers: Collaborators for offering certifications and skill development in ICT and digital trade.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Logistics and Supply Chain Companies</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-4 space-y-2">
                <li>Courier and Delivery Services: Partners for e-commerce platforms to ensure efficient product delivery.</li>
                <li>Supply Chain Innovators: Companies specializing in blockchain, IoT, and other technologies to enhance supply chain transparency.</li>
              </ul>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Industry Associations and Trade Bodies</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-4 space-y-2">
                <li>Chambers of Commerce: Partners for promoting digital trade and connecting businesses.</li>
                <li>Professional Associations: Collaborators for advocacy, networking, and knowledge sharing.</li>
              </ul>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">International Organizations and Investors</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-4 space-y-2">
                <li>Multilateral Organizations: Partners like the World Bank, UNDP, and AfDB for funding and technical support.</li>
                <li>Venture Capitalists and Angel Investors: Funding partners for scaling innovative solutions and startups.</li>
              </ul>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Telecommunications Companies</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-4 space-y-2">
                <li>Telcos: Partners for providing internet connectivity, mobile money solutions, and digital infrastructure.</li>
              </ul>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Agricultural and Rural Development Organizations</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-4 space-y-2">
                <li>Agricultural Cooperatives: Partners for creating digital platforms for farmers and agri-businesses.</li>
                <li>Rural Development Agencies: Collaborators for promoting digital inclusion in rural areas.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 