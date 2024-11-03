import React from 'react';
import { Globe, Mail, Phone, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Trading</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a 
                  href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=4" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Forex
                </a>
              </li>
              <li>
                <a 
                  href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=5" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Demo Account
                </a>
              </li>
              <li>
                <a 
                  href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=3901" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Copy Trading
                </a>
              </li>
              <li>
                <a 
                  href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=3521" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Competitions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Platforms</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a 
                  href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=4" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 hover:text-white"
                >
                  MT4/MT5
                </a>
              </li>
              <li>
                <a 
                  href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=17" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Mobile Apps
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Social</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a 
                  href="https://www.youtube.com/channel/UCTUg5CTVMXwzqWgQV0eHDBQ" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 hover:text-white"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a 
                  href="https://chat.whatsapp.com/BZNZruO6Vz9Ix4619WIrlR" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/YannMarketInvestment" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a 
                  href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=0" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-base text-gray-300 hover:text-white"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  24/7 Support
                </a>
              </li>
              <li>
                <a 
                  href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=0" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-base text-gray-300 hover:text-white"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Us
                </a>
              </li>
              <li>
                <a 
                  href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=0" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-base text-gray-300 hover:text-white"
                >
                  <Globe className="h-5 w-5 mr-2" />
                  Global Offices
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/YannMarketInvestment" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-base text-gray-300 hover:text-white group"
                >
                  <Send className="h-5 w-5 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Join us on Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} XM Trading. All rights reserved. Trading involves risks.
          </p>
        </div>
      </div>
    </footer>
  );
}