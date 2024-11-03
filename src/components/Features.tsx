import React from 'react';
import { Smartphone, BarChart2, Wallet, Users } from 'lucide-react';

export default function Features() {
  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Why Choose XM Trading?
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Experience the advantages that make us a trusted choice for millions of traders
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-white">Mobile Trading</h3>
              <p className="mt-2 text-base text-gray-400 text-center">
                Trade anywhere, anytime with our advanced mobile platform
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white">
                <BarChart2 className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-white">Advanced Tools</h3>
              <p className="mt-2 text-base text-gray-400 text-center">
                Professional charting and analysis tools at your fingertips
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white">
                <Wallet className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-white">Fast Withdrawals</h3>
              <p className="mt-2 text-base text-gray-400 text-center">
                Quick and secure access to your funds
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-white">Expert Support</h3>
              <p className="mt-2 text-base text-gray-400 text-center">
                Dedicated support in multiple languages
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}