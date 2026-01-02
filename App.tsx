import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PropertyDetails from './components/PropertyDetails';
import PropertyCatalog from './components/PropertyCatalog';

import fotofundo from './src/assets/fotofundo.jpg';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden flex justify-center items-start md:items-center py-4 sm:py-10">
      {/* Background Layers */}
      <div className="fixed inset-0 min-h-screen w-full z-0">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{ backgroundImage: `url(${fotofundo})`, filter: 'blur(8px)' }}
        ></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oportunidades" element={<PropertyCatalog />} />
          <Route path="/oportunidades/:id" element={<PropertyDetails />} />
          {/* Fallback for old link if needed, or redirect */}
          <Route path="/property-details" element={<PropertyDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
