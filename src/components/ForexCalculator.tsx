import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

export default function ForexCalculator() {
  const [amount, setAmount] = useState('1000');
  const [leverage, setLeverage] = useState('100');

  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <div className="flex items-center">
              <Calculator className="h-8 w-8 text-blue-500" />
              <h2 className="ml-3 text-3xl font-extrabold text-white">
                Forex Calculator
              </h2>
            </div>
            <p className="mt-4 text-lg text-gray-400">
              Calculate your potential position size and margin requirements before trading.
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-300">
                  Investment Amount ($)
                </label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="leverage" className="block text-sm font-medium text-gray-300">
                  Leverage (1:X)
                </label>
                <select
                  id="leverage"
                  value={leverage}
                  onChange={(e) => setLeverage(e.target.value)}
                  className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="50">1:50</option>
                  <option value="100">1:100</option>
                  <option value="200">1:200</option>
                  <option value="500">1:500</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 bg-gray-800 rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400">Trading Power</p>
                <p className="text-2xl font-bold text-white">
                  ${(parseFloat(amount) * parseFloat(leverage)).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Required Margin</p>
                <p className="text-2xl font-bold text-white">
                  ${parseFloat(amount).toLocaleString()}
                </p>
              </div>
              <div className="pt-4">
                <a
                  href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  Try Advanced Calculator <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}