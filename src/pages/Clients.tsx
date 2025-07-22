import React from 'react';

const Clients: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Potential Clients Section */}
        <div className="flex flex-col items-center gap-8 mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg px-8 py-12 border border-blue-200">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-6 text-center tracking-tight">Potential Clients</h2>
          <div className="w-full grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Businesses and Enterprises</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-4 space-y-2">
                <li><span className="font-semibold">Small and Medium-Sized Enterprises (SMEs):</span> Businesses looking to adopt digital tools for growth, such as e-commerce platforms, digital payment systems, and cloud-based solutions.</li>
                <li><span className="font-semibold">Large Corporations:</span> Companies in need of advanced ICT infrastructure, cybersecurity solutions, and enterprise software.</li>
                <li><span className="font-semibold">Startups:</span> Tech-driven startups requiring scalable IT solutions, mentorship, and access to digital trade platforms.</li>
              </ul>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Financial Institutions</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-4 space-y-2">
                <li><span className="font-semibold">Banks:</span> Institutions seeking secure and efficient financial systems, mobile banking solutions, and digital payment platforms.</li>
                <li><span className="font-semibold">Microfinance Institutions:</span> Organizations aiming to expand financial inclusion through digital tools and services.</li>
                <li><span className="font-semibold">Fintech Companies:</span> Innovators in the financial technology space looking for partnerships to enhance their offerings.</li>
              </ul>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Government Agencies and Public Institutions</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-4 space-y-2">
                <li><span className="font-semibold">Local and State Governments:</span> Entities in need of ICT infrastructure, e-governance solutions, and digital transformation support.</li>
                <li><span className="font-semibold">Federal Agencies:</span> Organizations requiring large-scale IT projects, cyber security, and data management systems.</li>
                <li><span className="font-semibold">Educational Institutions:</span> Schools, colleges, and universities seeking digital learning tools, network infrastructure, and IT support.</li>
              </ul>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Agricultural Sector</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-4 space-y-2">
                <li><span className="font-semibold">Farmers and Agri-Businesses:</span> Individuals and organizations looking for digital platforms to sell produce, access market information, and improve supply chain efficiency.</li>
                <li><span className="font-semibold">Agricultural Cooperatives:</span> Groups seeking tools to streamline operations and connect with buyers.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Individuals</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-4 space-y-2">
                <li><span className="font-semibold">Consumers:</span> Individuals in need of digital payment solutions, e-commerce platforms, and access to online services.</li>
                <li><span className="font-semibold">Tech Enthusiasts and Professionals:</span> People seeking training, certifications, and tools to enhance their digital skills.</li>
              </ul>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Healthcare Providers</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-4 space-y-2">
                <li><span className="font-semibold">Hospitals and Clinics:</span> Institutions requiring ICT solutions for patient management, telemedicine, and data security.</li>
                <li><span className="font-semibold">Health Tech Startups:</span> Companies developing innovative healthcare solutions that need IT support and partnerships.</li>
              </ul>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Retail and E-Commerce Businesses</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-4 space-y-2">
                <li><span className="font-semibold">Local Retailers:</span> Businesses looking to establish an online presence and access digital trade platforms.</li>
                <li><span className="font-semibold">E-Commerce Platforms:</span> Companies needing logistics, payment, and cybersecurity solutions to scale their operations.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients; 