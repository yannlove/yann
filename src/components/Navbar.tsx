import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a 
                href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src="/logo yann market3.png" 
                  alt="Yann Market Logo" 
                  className="h-10 w-auto"
                />
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a 
                  href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=4" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Trading
                </a>
                <a 
                  href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=17" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Mobile Trading
                </a>
                <a 
                  href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=14" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Calculators
                </a>
                <a 
                  href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=6" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Promotions
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <a 
                href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium text-white"
              >
                Open Account
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Trading
            </a>
            <a 
              href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Mobile Trading
            </a>
            <a 
              href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Calculators
            </a>
            <a 
              href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Promotions
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}