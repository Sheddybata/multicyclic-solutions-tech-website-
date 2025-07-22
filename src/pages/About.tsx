import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Objectives Section */}
        <div className="flex flex-col items-center gap-8 mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg px-8 py-12 border border-blue-200">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-6 text-center tracking-tight">Objectives</h2>
          <div className="w-full grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow p-6 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">&#8594; Deliver ICT Solutions</h3>
                <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                  <li>Develop and implement customized software applications, network infrastructure, and cloud-based solutions tailored to the needs of businesses, government institutions, and individuals across Nigeria.</li>
                  <li>Provide reliable IT support services, including cyber-security, data management, and system integration, to ensure seamless operations for clients nationwide.</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow p-6 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">&#8594; Enhance Financial Inclusion Across Nigeria</h3>
                <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                  <li>Design and deploy secure, user-friendly financial systems that enable digital payments, mobile banking, and seamless transactions for individuals and businesses in both urban and rural areas.</li>
                  <li>Partner with financial institutions, fintech companies, and government agencies to expand access to financial services in underserved regions.</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow p-6 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">&#8594; Promote Digital Trade and Economic Growth Nationwide</h3>
                <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                  <li>Create e-commerce platforms and digital marketplaces that connect Nigerian producers, artisans, and businesses to regional and international markets.</li>
                  <li>Provide training and tools to help businesses adopt digital trade practices, increasing their competitiveness and revenue potential across the country.</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow p-6 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">&#8594; Build National Capacity and Expertise</h3>
                <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                  <li>Offer training programs, workshops, and certifications in ICT, financial systems, and digital trade to equip individuals and organizations with the skills needed to succeed in the digital economy.</li>
                  <li>Collaborate with educational institutions, youth organizations, and government agencies to nurture the next generation of tech-savvy professionals in Nigeria.</li>
                </ul>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow p-6 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">&#8594; Drive Sustainable Development Across Nigeria</h3>
                <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                  <li>Leverage technology to address critical challenges in areas such as healthcare, education, agriculture, and governance, improving the quality of life for Nigerians.</li>
                  <li>Implement environmentally sustainable practices in all our operations, ensuring that our solutions contribute to long-term development goals.</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow p-6 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">&#8594; Foster Innovation and Research</h3>
                <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                  <li>Establish a research and development (R&D) unit to explore emerging technologies such as artificial intelligence, blockchain, and IoT, and adapt them to local needs.</li>
                  <li>Partner with global tech companies and organizations to bring innovative solutions to Nigeria.</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow p-6 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">&#8594; Strengthen Partnerships and Collaboration</h3>
                <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                  <li>Work closely with government agencies, NGOs, and international organizations to align our efforts with national and regional development agendas.</li>
                  <li>Build strategic alliances with private sector players to amplify our impact and deliver holistic solutions to our clients.</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow p-6 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">&#8594; Ensure Security and Compliance</h3>
                <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                  <li>Prioritize data security and privacy in all our solutions, adhering to global standards and best practices.</li>
                  <li>Ensure compliance with local and international regulations, building trust and credibility with our clients and partners.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Our Goals Section */}
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
                <li><span className="font-bold">Become a National Leader in ICT and Digital Solutions</span><br />a) Position Multicyclic tech solutions Ltd as one of Nigeria’s top providers of ICT, financial systems, and digital trade solutions.<br />b) Achieve a significant market share in key sectors such as e-commerce, fintech, and digital infrastructure.</li>
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
        {/* Core Values Section */}
        <div className="flex flex-col items-center gap-4 mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg px-8 py-12 border border-blue-200">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-6 text-center tracking-tight">Core Values</h2>
          <div className="w-full grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow p-6 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">&#8594; Innovation:</h3>
                <p className="text-lg text-gray-700 mb-4">We embrace creativity and cutting-edge technology to solve problems and deliver value to our clients.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">&#8594; Integrity:</h3>
                <p className="text-lg text-gray-700 mb-4">We operate with honesty, transparency, and ethical practices in all our dealings.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">&#8594; Customer-Centricity:</h3>
                <p className="text-lg text-gray-700 mb-4">We listen to our clients, understand their needs, and tailor our solutions to exceed their expectations.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">&#8594; Excellence:</h3>
                <p className="text-lg text-gray-700 mb-4">We strive for the highest standards of quality and professionalism in everything we do.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow p-6 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">&#8594; National Impact:</h3>
                <p className="text-lg text-gray-700 mb-4">We are deeply committed to the development and empowerment of communities across Nigeria.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">&#8594; Collaboration:</h3>
                <p className="text-lg text-gray-700 mb-4">We believe in the power of partnerships to achieve shared goals and create lasting impact.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">&#8594; Sustainability:</h3>
                <p className="text-lg text-gray-700 mb-4">We are dedicated to creating solutions that are environmentally, socially, and economically sustainable.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 