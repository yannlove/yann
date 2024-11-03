import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TradingAdvantages from './components/TradingAdvantages';
import ForexCalculator from './components/ForexCalculator';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <TradingAdvantages />
      <ForexCalculator />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;