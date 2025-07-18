import React from 'react';
import { Button } from '@/components/ui/button';

const NotFound: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 text-center px-4">
    <img src="/Multicyclic solutions logo.jpg" alt="Logo" className="w-20 h-20 mb-6 rounded-full shadow-lg bg-white object-cover" />
    <h1 className="text-6xl font-extrabold text-blue-800 mb-4">404</h1>
    <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
    <p className="text-gray-600 mb-6">Sorry, the page you are looking for does not exist or has been moved.</p>
    <Button asChild className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-highlight transition-all">
      <a href="/">Go Home</a>
    </Button>
  </div>
);

export default NotFound;
