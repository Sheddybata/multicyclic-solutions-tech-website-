import React, * as ReactNS from 'react';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/Multicyclic solutions logo.jpg" 
                alt="Multicyclic Tech Solutions" 
                className="h-10 w-10 mr-3 rounded-full bg-white object-cover"
              />
              <span className="text-xl font-bold">
                Multicyclic Tech Solutions Ltd.
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering Nigeria's digital future through innovative ICT solutions, financial systems, and digital trade platforms.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">Polo Old GRA Bukar Sani Close, Maiduguri</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">08028747947</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">hello@multicyclicsolutions.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-teal-400 transition-colors">ICT Solutions</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Financial Systems</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Digital Trade</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#clients" className="hover:text-teal-400 transition-colors">Our Clients</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Multicyclic Tech Solutions Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">Terms of Service</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V7.5A3.75 3.75 0 0012.75 3.75h-1.5A3.75 3.75 0 007.5 7.5v.75M6.75 21V9.75M17.25 21V13.5a2.25 2.25 0 00-2.25-2.25h-3a2.25 2.25 0 00-2.25 2.25V21" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21c7.5 0 11.625-6.214 11.625-11.625 0-.177 0-.353-.012-.53A8.348 8.348 0 0022.5 5.25a8.19 8.19 0 01-2.357.646A4.117 4.117 0 0021.9 3.6a8.224 8.224 0 01-2.605.996A4.107 4.107 0 0012 8.25c0 .32.036.634.105.934A11.654 11.654 0 013 4.5s-4.5 9 5.25 13.5c-1.5 1.5-3.75 1.5-3.75 1.5z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-800 transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75V4.5A2.25 2.25 0 0015 2.25h-3A2.25 2.25 0 009.75 4.5v2.25H7.5A.75.75 0 006.75 7.5v3A.75.75 0 007.5 11.25h2.25V21h3V11.25h2.25a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-2.25z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;