import React from 'react';
import { ArrowRight, Award, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Trade with a</span>
            <span className="block text-blue-500">Global Leader</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Join millions of traders worldwide. Experience superior trading conditions and exclusive benefits with XM Trading.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a 
                href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Start Trading <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-lg font-medium text-white">Licensed & Regulated</h3>
              <p className="mt-2 text-base text-gray-400">Fully compliant with global regulations</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-lg font-medium text-white">Secure Trading</h3>
              <p className="mt-2 text-base text-gray-400">Advanced security measures</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-lg font-medium text-white">24/7 Support</h3>
              <p className="mt-2 text-base text-gray-400">Round-the-clock assistance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}