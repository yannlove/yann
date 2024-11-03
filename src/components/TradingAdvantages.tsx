import React from 'react';
import { DollarSign, Percent, Zap } from 'lucide-react';

export default function TradingAdvantages() {
  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Competitive Trading Advantages
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Trade with superior conditions and enjoy exclusive benefits
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <DollarSign className="h-6 w-6" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg font-medium text-white">Ultra-Low Spreads</h3>
                <p className="mt-2 text-base text-gray-400">
                  Trade major forex pairs with spreads as low as 0.6 pips
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <Percent className="h-6 w-6" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg font-medium text-white">Leverage up to 1:500</h3>
                <p className="mt-2 text-base text-gray-400">
                  Maximize your trading potential with flexible leverage options
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg font-medium text-white">Fast Execution</h3>
                <p className="mt-2 text-base text-gray-400">
                  Lightning-fast execution with no requotes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}