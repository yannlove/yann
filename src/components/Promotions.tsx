import React from 'react';
import { Gift, Sparkles, Rocket, ArrowRight } from 'lucide-react';

export default function Promotions() {
  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Exclusive Trading Bonuses
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Start trading with extra benefits and boost your potential
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="bg-gray-800 rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500 opacity-20 rounded-full blur-2xl"></div>
            <Gift className="h-10 w-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Welcome Bonus</h3>
            <p className="text-gray-400 mb-6">Get an exclusive bonus on your first deposit and start trading with extra capital</p>
            <div className="text-2xl font-bold text-blue-500 mb-4">Up to $2,000</div>
            <a 
              href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=6" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              Claim Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500 opacity-20 rounded-full blur-2xl"></div>
            <Sparkles className="h-10 w-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Loyalty Rewards</h3>
            <p className="text-gray-400 mb-6">Earn points as you trade and unlock exclusive benefits and special promotions</p>
            <div className="text-2xl font-bold text-blue-500 mb-4">VIP Benefits</div>
            <a 
              href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=6" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500 opacity-20 rounded-full blur-2xl"></div>
            <Rocket className="h-10 w-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Trading Contests</h3>
            <p className="text-gray-400 mb-6">Participate in regular trading competitions and win amazing prizes</p>
            <div className="text-2xl font-bold text-blue-500 mb-4">Win Prizes</div>
            <a 
              href="https://clicks.pipaffiliates.com/c?c=699914&l=fr&p=6" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              Join Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}