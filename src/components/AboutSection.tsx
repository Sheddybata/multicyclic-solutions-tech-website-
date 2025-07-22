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
        <div className="flex flex-col items-center gap-8 mb-16 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl shadow-lg px-8 py-12 border border-blue-200">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-4 text-center tracking-tight">Introduction</h2>
          <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
            <div className="flex flex-col gap-4">
              <p className="text-lg text-gray-700">
                <span className="font-bold text-blue-700">Who We Are:</span> Multicyclic Tech Solutions Ltd (formerly Nexura Solutions Ltd) is passionate about leveraging technology to create meaningful change. As a dynamic provider of ICT solutions, financial systems, and digital trade platforms, we empower individuals, businesses, and institutions across Nigeria to unlock their full potential in the digital age.
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-bold text-blue-700">More Than a Tech Company:</span> We are your trusted partner in innovation and growth. Whether you’re a startup aiming to scale, a financial institution seeking secure and efficient systems, or a local business ready to tap into global markets, we provide the tools and expertise to help you succeed.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl">
                <span className="font-semibold text-blue-800">Our Mission:</span>
                <span className="block text-gray-700">To bridge the gap between technology and opportunity. Through cutting-edge ICT services, secure financial solutions, and innovative digital trade platforms, we aim to drive economic growth, enhance financial inclusion, and connect communities across Nigeria.</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-lg pl-4">
                <li><span className="font-bold text-blue-700">Excellence:</span> Unwavering commitment to quality and results.</li>
                <li><span className="font-bold text-blue-700">Collaboration:</span> We build partnerships that empower our clients and contribute to Nigeria’s digital economy.</li>
                <li><span className="font-bold text-blue-700">Sustainability:</span> We deliver solutions that last and make a difference.</li>
                <li><span className="font-bold text-blue-700">Efficiency:</span> Leveraging Business Process Outsourcing (BPO) to enhance our service portfolio, reduce costs, and improve operational efficiency.</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 w-full flex justify-center">
            <div className="bg-gradient-to-r from-blue-400 to-teal-400 text-white px-8 py-4 rounded-full shadow-lg text-xl font-semibold text-center max-w-xl">
              Join us as we pave the way for a smarter, more connected future. Together, let’s transform challenges into opportunities and dreams into reality.
            </div>
          </div>
        </div>
        {/* Mission and Vision Section */}
        <div className="flex flex-col items-center gap-8 mb-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl shadow-lg px-8 py-12 border border-blue-200">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-4 text-center tracking-tight">Mission and Vision</h2>
          <div className="w-full grid md:grid-cols-2 gap-8 max-w-5xl">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-700 mb-2 text-center">Mission</h3>
              <p className="text-lg text-gray-700 mb-2 text-center">At Multicyclic Tech Solutions Ltd our mission is to deliver cutting-edge ICT and financial system solutions that address the diverse needs of Nigeria’s dynamic economy.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-700 mb-2 text-center">Vision</h3>
              <p className="text-lg text-gray-700 mb-2 text-center">To be a leading company in the digital transformation by providing innovative ICT and financial solutions that empower businesses, governments, and individuals nationwide. We envision a future where technology drives economic growth, enhances financial inclusion, and connects communities across the country.</p>
            </div>
          </div>
          <div className="w-full mt-6 max-w-4xl">
            <h4 className="text-xl font-semibold text-blue-700 mb-2 text-center">We are committed to:</h4>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>Providing reliable, scalable, and secure technology services that enable businesses and institutions to thrive in a digital world.</li>
              <li>Building robust financial systems that promote transparency, accessibility, and inclusion for all Nigerians.</li>
              <li>Facilitating digital trade by creating platforms that connect local enterprises to regional and global markets.</li>
              <li>Empowering individuals and organizations through capacity-building initiatives, job creation, and sustainable development programs.</li>
              <li>Through innovation, collaboration, and a deep commitment to excellence, we aim to bridge the digital divide and foster a prosperous, technology-driven future for Nigeria.</li>
            </ul>
          </div>
        </div>
        {/* About the Founder Section */}
        <div className="relative flex flex-col items-center gap-4 mb-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl shadow-lg px-8 py-12 border border-blue-100">
          <div className="absolute left-1/2 -top-4 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full" />
          <h2 className="text-4xl font-extrabold text-gray-900 mb-1 text-center tracking-tight">About the Founder</h2>
          <p className="text-gray-700 mb-2 text-center text-lg">Associate Professor Mustapha A. Tijjani is a distinguished Nigerian academic, researcher, and public servant, as well as a CISCO Certified Network Associate (CCNA). He worked embakred on various research projects at the university of Maiduguri</p>
          <Avatar size="xl" className="h-48 w-48 shadow-2xl border-4 border-white mb-2 flex items-center justify-center rounded-none">
            <AvatarImage src="/Dr. Mustapha Tijjani.jpg" alt="Associate Professor Mustapha A. Tijjani" className="object-cover rounded-none" loading="lazy" />
          </Avatar>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-800 mb-1">CEO & Founder</h3>
            <h4 className="text-xl font-semibold text-teal-700 mb-2">Associate Professor. Mustapha A. Tijjani</h4>
            <div className="flex flex-col sm:flex-row gap-2 items-center justify-center mb-2">
              <div className="flex items-center text-blue-700"><Mail className="h-5 w-5 mr-2" /><a href="mailto:Info@multicyclictechsolutions.com.ng" className="underline">Info@multicyclictechsolutions.com.ng</a></div>
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