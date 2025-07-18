import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Award, Globe2, Handshake, Leaf } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Mail, Phone } from 'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
    { icon: <Target className="h-8 w-8 text-blue-600" />, title: "Innovation", desc: "Cutting-edge solutions" },
    { icon: <Award className="h-8 w-8 text-teal-600" />, title: "Excellence", desc: "Uncompromising quality" },
    { icon: <Users className="h-8 w-8 text-blue-500" />, title: "Customer-Centricity", desc: "Your success is our priority" },
    { icon: <Globe2 className="h-8 w-8 text-teal-500" />, title: "National Impact", desc: "Transforming Nigeria" },
    { icon: <Handshake className="h-8 w-8 text-blue-600" />, title: "Collaboration", desc: "Partnership-driven approach" },
    { icon: <Leaf className="h-8 w-8 text-green-600" />, title: "Sustainability", desc: "Future-focused solutions" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <div className="flex flex-col items-center gap-4 mb-16 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl shadow-lg px-8 py-12 border border-blue-200">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-2 text-center tracking-tight">Introduction</h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl">
            Multicyclic Tech Solutions Ltd (formerly Nexura Solutions Ltd), we are passionate about leveraging technology to create meaningful change. As a dynamic provider of ICT solutions, financial systems, and digital trade platforms, we are committed to empowering individuals, businesses, and institutions across Nigeria to unlock their full potential in the digital age.
          </p>
          <p className="text-lg text-gray-700 text-center max-w-4xl">
            Multicyclic Tech Solutions Ltd is more than just a technology company—we are your trusted partner in innovation and growth. Whether you’re a startup aiming to scale, a financial institution seeking secure and efficient systems, or a local business ready to tap into global markets, we provide the tools and expertise to help you succeed.
          </p>
          <p className="text-lg text-gray-700 text-center max-w-4xl font-semibold">
            Our mission is clear: <span className="font-normal">to bridge the gap between technology and opportunity. Through cutting-edge ICT services, secure financial solutions, and innovative digital trade platforms, we aim to drive economic growth, enhance financial inclusion, and connect communities across Nigeria.</span>
          </p>
          <p className="text-lg text-gray-700 text-center max-w-4xl">
            What sets us apart is our unwavering commitment to excellence, collaboration, and sustainability. We don’t just deliver solutions—we build partnerships that empower our clients and contribute to the broader development of Nigeria’s digital economy. By understanding and leveraging Business Process Outsourcing (BPO), Multicyclic Tech Solutions Ltd can enhance its service portfolio, reduce costs, and improve operational efficiency.
          </p>
          <p className="text-lg text-gray-700 text-center max-w-4xl">
            Join us as we pave the way for a smarter, more connected future. Together, let’s transform challenges into opportunities and dreams into reality.
          </p>
        </div>
        {/* Mission and Vision Section */}
        <div className="flex flex-col items-center gap-4 mb-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl shadow-lg px-8 py-12 border border-blue-200">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-2 text-center tracking-tight">Mission and Vision</h2>
          <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-start">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Mission</h3>
              <p className="text-lg text-gray-700 mb-4">"At Multicyclic Tech Solutions Ltd our mission is to deliver cutting-edge ICT and financial system solutions that address the diverse needs of Nigeria’s dynamic economy."</p>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Vision</h3>
              <p className="text-lg text-gray-700 mb-4">"To be a leading company in the digital transformation by providing innovative ICT and financial solutions that empower businesses, governments, and individuals nationwide. We envision a future where technology drives economic growth, enhances financial inclusion, and connects communities across the country."</p>
            </div>
          </div>
          <div className="w-full mt-4">
            <h4 className="text-xl font-semibold text-blue-700 mb-2">We are committed to:</h4>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>Providing reliable, scalable, and secure technology services that enable businesses and institutions to thrive in a digital world.</li>
              <li>Building robust financial systems that promote transparency, accessibility, and inclusion for all Nigerians.</li>
              <li>Facilitating digital trade by creating platforms that connect local enterprises to regional and global markets.</li>
              <li>Empowering individuals and organizations through capacity-building initiatives, job creation, and sustainable development programs.</li>
              <li>Through innovation, collaboration, and a deep commitment to excellence, we aim to bridge the digital divide and foster a prosperous, technology-driven future for Nigeria.</li>
            </ul>
          </div>
        </div>
        {/* Objectives Section */}
        <div className="flex flex-col items-center gap-8 mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg px-8 py-12 border border-blue-200">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-6 text-center tracking-tight">Objectives</h2>
          <div className="w-full grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">&#8594; Deliver ICT Solutions</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-6 space-y-2">
                <li>Develop and implement customized software applications, network infrastructure, and cloud-based solutions tailored to the needs of businesses, government institutions, and individuals across Nigeria.</li>
                <li>Provide reliable IT support services, including cyber-security, data management, and system integration, to ensure seamless operations for clients nationwide.</li>
              </ul>
              <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">&#8594; Enhance Financial Inclusion Across Nigeria</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-6 space-y-2">
                <li>Design and deploy secure, user-friendly financial systems that enable digital payments, mobile banking, and seamless transactions for individuals and businesses in both urban and rural areas.</li>
                <li>Partner with financial institutions, fintech companies, and government agencies to expand access to financial services in underserved regions.</li>
              </ul>
              <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">&#8594; Promote Digital Trade and Economic Growth Nationwide</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-6 space-y-2">
                <li>Create e-commerce platforms and digital marketplaces that connect Nigerian producers, artisans, and businesses to regional and international markets.</li>
                <li>Provide training and tools to help businesses adopt digital trade practices, increasing their competitiveness and revenue potential across the country.</li>
              </ul>
              <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">&#8594; Build National Capacity and Expertise</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-6 space-y-2">
                <li>Offer training programs, workshops, and certifications in ICT, financial systems, and digital trade to equip individuals and organizations with the skills needed to succeed in the digital economy.</li>
                <li>Collaborate with educational institutions, youth organizations, and government agencies to nurture the next generation of tech-savvy professionals in Nigeria.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">&#8594; Drive Sustainable Development Across Nigeria</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-6 space-y-2">
                <li>Leverage technology to address critical challenges in areas such as healthcare, education, agriculture, and governance, improving the quality of life for Nigerians.</li>
                <li>Implement environmentally sustainable practices in all our operations, ensuring that our solutions contribute to long-term development goals.</li>
              </ul>
              <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">&#8594; Foster Innovation and Research</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-6 space-y-2">
                <li>Establish a research and development (R&D) unit to explore emerging technologies such as artificial intelligence, blockchain, and IoT, and adapt them to local needs.</li>
                <li>Partner with global tech companies and organizations to bring innovative solutions to Nigeria.</li>
              </ul>
              <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">&#8594; Strengthen Partnerships and Collaboration</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-6 space-y-2">
                <li>Work closely with government agencies, NGOs, and international organizations to align our efforts with national and regional development agendas.</li>
                <li>Build strategic alliances with private sector players to amplify our impact and deliver holistic solutions to our clients.</li>
              </ul>
              <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">&#8594; Ensure Security and Compliance</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-6 space-y-2">
                <li>Prioritize data security and privacy in all our solutions, adhering to global standards and best practices.</li>
                <li>Ensure compliance with local and international regulations, building trust and credibility with our clients and partners.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Core Values Section */}
        <div className="flex flex-col items-center gap-4 mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg px-8 py-12 border border-blue-200">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-6 text-center tracking-tight">Core Values</h2>
          <div className="w-full grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">&#8594; Innovation:</h3>
              <p className="text-lg text-gray-700 mb-4">We embrace creativity and cutting-edge technology to solve problems and deliver value to our clients.</p>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">&#8594; Integrity:</h3>
              <p className="text-lg text-gray-700 mb-4">We operate with honesty, transparency, and ethical practices in all our dealings.</p>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">&#8594; Customer-Centricity:</h3>
              <p className="text-lg text-gray-700 mb-4">We listen to our clients, understand their needs, and tailor our solutions to exceed their expectations.</p>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">&#8594; Excellence:</h3>
              <p className="text-lg text-gray-700 mb-4">We strive for the highest standards of quality and professionalism in everything we do.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">&#8594; National Impact:</h3>
              <p className="text-lg text-gray-700 mb-4">We are deeply committed to the development and empowerment of communities across Nigeria.</p>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">&#8594; Collaboration:</h3>
              <p className="text-lg text-gray-700 mb-4">We believe in the power of partnerships to achieve shared goals and create lasting impact.</p>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">&#8594; Sustainability:</h3>
              <p className="text-lg text-gray-700 mb-4">We are dedicated to creating solutions that are environmentally, socially, and economically sustainable.</p>
            </div>
          </div>
        </div>
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
        {/* Goals Section - Combined Short, Medium, and Long Term */}
        <div className="flex flex-col items-center gap-8 mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg px-8 py-12 border border-blue-200">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-8 text-center tracking-tight">Our Goals</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Short Term Goals */}
            <div className="bg-white/80 rounded-xl shadow-md p-6 flex flex-col h-full border border-blue-100 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">Short Term <span className='text-base font-normal'>(0-12 months)</span></h3>
              <ul className="list-disc list-inside text-gray-700 text-base space-y-4">
                <li><span className="font-bold">Establish a Strong Market Presence</span><br />a) Launch Multicyclic Solutions Ltd with a clear brand identity, website, and marketing strategy.<br />b) Build a client base in Borno State and expand to neighboring states.</li>
                <li><span className="font-bold">Develop and Deploy Core Solutions</span><br />a) Roll out initial ICT solutions, such as network infrastructure, software development, and cybersecurity services.<br />b) Launch a pilot e-commerce platform or digital trade solution tailored to local businesses.</li>
                <li><span className="font-bold">Build Strategic Partnerships</span><br />a) Partner with local businesses, government agencies, and financial institutions to deliver tailored solutions.<br />b) Collaborate with technology providers and fintech companies to enhance service offerings.</li>
                <li><span className="font-bold">Promote Digital Literacy</span><br />a) Organize workshops and training programs to educate businesses and individuals on the benefits of digital tools and platforms.<br />b) Launch awareness campaigns to promote digital trade and financial inclusion.</li>
                <li><span className="font-bold">Achieve Early Wins</span><br />a) Secure at least 10–15 key clients in the first year, including SMEs, financial institutions, and government agencies.<br />b) Deliver successful pilot projects that demonstrate the value of our solutions.</li>
              </ul>
            </div>
            {/* Medium Term Goals */}
            <div className="bg-white/80 rounded-xl shadow-md p-6 flex flex-col h-full border border-blue-100 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">Medium Term <span className='text-base font-normal'>(1-5 years)</span></h3>
              <ul className="list-disc list-inside text-gray-700 text-base space-y-4">
                <li><span className="font-bold">Expand Nationwide Reach</span><br />a) Scale operations to cover all six geopolitical zones in Nigeria, with a focus on underserved regions.<br />b) Establish regional offices or partnerships to ensure localized support and service delivery.</li>
                <li><span className="font-bold">Enhance Financial Inclusion</span><br />a) Deploy digital payment solutions and mobile banking platforms in rural and urban areas.<br />b) Partner with microfinance institutions and fintech companies to reach unbanked populations.</li>
                <li><span className="font-bold">Drive Digital Trade Growth</span><br />a) Develop and scale e-commerce platforms that connect Nigerian businesses to regional and global markets.<br />b) Facilitate cross-border trade by simplifying logistics, payments, and compliance processes.</li>
                <li><span className="font-bold">Build Capacity and Expertise</span><br />a) Train at least 1,000 individuals in ICT, financial systems, and digital trade through workshops, certifications, and online courses.<br />b) Establish partnerships with educational institutions to create a pipeline of skilled professionals.</li>
                <li><span className="font-bold">Foster Innovation</span><br />a) Set up an innovation lab to explore emerging technologies like AI, blockchain, and IoT.<br />b) Support local startups and entrepreneurs through mentorship, funding, and access to digital tools.</li>
              </ul>
            </div>
            {/* Long Term Goals */}
            <div className="bg-white/80 rounded-xl shadow-md p-6 flex flex-col h-full border border-blue-100 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">Long Term <span className='text-base font-normal'>(5-6 years & beyond)</span></h3>
              <ul className="list-disc list-inside text-gray-700 text-base space-y-4">
                <li><span className="font-bold">Become a National Leader in ICT and Digital Solutions</span><br />a) Position Nexaura Solutions Ltd as one of Nigeria’s top providers of ICT, financial systems, and digital trade solutions.<br />b) Achieve a significant market share in key sectors such as e-commerce, fintech, and digital infrastructure.</li>
                <li><span className="font-bold">Drive Nigeria’s Digital Transformation</span><br />a) Play a pivotal role in Nigeria’s transition to a digital economy by providing innovative solutions and fostering digital adoption.<br />b) Contribute to the development of smart cities, e-governance, and digital public services.</li>
                <li><span className="font-bold">Promote Sustainable Development</span><br />a) Leverage technology to address critical challenges in healthcare, education, agriculture, and governance.<br />b) Implement environmentally sustainable practices in all operations and solutions.</li>
                <li><span className="font-bold">Create Jobs and Empower Communities</span><br />a) Generate employment opportunities for at least 5,000 Nigerians, particularly youth and women, in the tech and financial sectors.<br />b) Empower local communities through digital inclusion initiatives and capacity-building programs.</li>
                <li><span className="font-bold">Expand Internationally</span><br />a) Explore opportunities to expand operations to other African countries, leveraging Nigeria as a hub.<br />b) Partner with international organizations to align with global digital transformation goals.</li>
                <li><span className="font-bold">Achieve Financial Sustainability and Growth</span><br />a) Reach profitability within the first 3–5 years through a diversified revenue model.<br />b) Attract investment and funding to scale operations and innovate further.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Key Performance Indicators (KPIs) Section */}
        <div className="flex flex-col items-center gap-8 mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg px-8 py-12 border border-blue-200">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-6 text-center tracking-tight">Key Performance Indicators (KPIs)</h2>
          <p className="text-lg text-blue-800 font-semibold text-center mb-4">To measure progress toward these goals, track the following KPIs:</p>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2 max-w-2xl mx-auto">
            <li>Number of clients and partners onboarded.</li>
            <li>Revenue growth and profitability.</li>
            <li>Number of individuals trained and certified.</li>
            <li>Adoption rates of digital payment and e-commerce platforms.</li>
            <li>Market share in key sectors (ICT, fintech, digital trade).</li>
            <li>Job creation and community impact metrics.</li>
            <li>Client satisfaction and retention rates.</li>
          </ul>
        </div>
        {/* About the Founder Section */}
        <div className="relative flex flex-col items-center gap-4 mb-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl shadow-lg px-8 py-12 border border-blue-100">
          <div className="absolute left-1/2 -top-4 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full" />
          <h2 className="text-4xl font-extrabold text-gray-900 mb-1 text-center tracking-tight">About the Founder</h2>
          <p className="text-gray-700 mb-2 text-center text-lg">Associate Professor Mustapha A. Tijjani is a distinguished Nigerian academic, researcher, and public servant, as well as a CISCO Certified Network Associate (CCNA). He is a prominent figure at the University of Maiduguri.</p>
          <Avatar size="xl" className="h-48 w-48 shadow-2xl border-4 border-white mb-2 flex items-center justify-center rounded-none">
            <AvatarImage src="/Dr. Mustapha Tijjani.jpg" alt="Associate Professor Mustapha A. Tijjani" className="object-cover rounded-none" loading="lazy" />
          </Avatar>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-800 mb-1">CEO & Founder</h3>
            <h4 className="text-xl font-semibold text-teal-700 mb-2">Associate Professor. Mustapha A. Tijjani</h4>
            <div className="flex flex-col sm:flex-row gap-2 items-center justify-center mb-2">
              <div className="flex items-center text-blue-700"><Mail className="h-5 w-5 mr-2" /><a href="mailto:CEO@multicyclictechsolutions.com.ng" className="underline">CEO@multicyclictechsolutions.com.ng</a></div>
              <div className="flex items-center text-blue-700"><Phone className="h-5 w-5 mr-2" /><a href="tel:+2348069463493" className="underline">+234 806 946 3493</a></div>
            </div>
            <p className="text-gray-800 mb-1 text-lg">
              His key appointment highlights the state government's confidence in his expertise and judgment. In this position, he plays a vital role in shaping policies and strategies for Borno State's digital transformation, ICT infrastructure development, and e-governance initiatives.
            </p>
            <p className="text-gray-800 mb-1 text-lg">
              He has attended several programs offered by the Cisco Networking Academy, including Introduction to Networks, Introduction to Data Science, Introduction to Modern Artificial Intelligence (AI), Introduction to Cybersecurity, and Introduction to IoT and Digital Transformation. Additionally, he holds a Certificate of Attendance for a technical seminar on the Role of Artificial Intelligence in Technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;