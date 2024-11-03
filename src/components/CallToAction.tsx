import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to start trading?</span>
              <span className="block text-blue-200">Join millions of successful traders.</span>
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Open your trading account in minutes and access global markets with a trusted broker.
            </p>
            <div className="mt-6 flex items-center">
              <ShieldCheck className="h-6 w-6 text-blue-200" />
              <span className="ml-2 text-blue-100">Regulated & Licensed Broker</span>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="space-y-4">
              <a 
                href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent text-lg font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-200"
              >
                Create Account Now <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <div className="text-center">
                <a 
                  href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=5" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Try Demo Account First
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}