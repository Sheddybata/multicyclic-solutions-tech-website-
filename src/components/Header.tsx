import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/Multicyclic solutions logo.jpg" 
              alt="Multicyclic Tech Solutions" 
              className="h-10 w-10 mr-3 rounded-full bg-white object-cover"
            />
            <span className="text-xl font-bold text-gray-900">
              Multicyclic Tech Solutions
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
            <Link to="/clients" className="text-gray-700 hover:text-blue-600 transition-colors">Clients</Link>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/clients" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Clients</Link>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;