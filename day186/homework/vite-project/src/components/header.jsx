import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import moonIcon from '../assets/icon-moon.svg';

const Header = () => {
  const [light, setLight] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    document.body.style.background = light
      ? '#ffffff'
      : 'linear-gradient(180deg, #040918 0%, #091540 100%)';
  }, [light]);

  return (
    <>
      <div className="flex justify-center mt-8 px-4">
        <div id='header' className="w-full max-w-6xl h-[54px] rounded-xl flex justify-between items-center px-4 bg-opacity-10">
          <img src={logo} alt="Logo" />
          <button onClick={() => setLight(prev => !prev)} className={`w-10 h-10 flex justify-center items-center ${light ? 'bg-white' : ''} cursor-pointer rounded-lg relative`}>
            <img src={moonIcon} alt="Toggle Theme" className="absolute w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mt-16 px-4 max-w-6xl mx-auto gap-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center lg:text-left">Extensions List</h1>
        <div className="flex flex-wrap gap-4">
          <button onClick={() => setActiveFilter('all')} className={`w-20 h-10 rounded-xl font-bold ${ activeFilter === 'all'? 'bg-red-400 text-blue-900': 'text-white'
            }`}style={activeFilter === 'all' ? {} : { background: 'hsl(225, 23%, 24%)' }}>
            All
          </button>
          <button onClick={() => setActiveFilter('active')} className={`w-24 h-10 rounded-xl font-semibold ${ activeFilter === 'active' ? 'bg-red-400 text-blue-900': 'text-white'
            }`}
            style={activeFilter === 'active' ? {} : { background: 'hsl(225, 23%, 24%)' }}
          >
            Active
          </button>
          <button onClick={() => setActiveFilter('inactive')} className={`w-24 h-10 rounded-xl font-semibold ${ activeFilter === 'inactive' ? 'bg-red-400 text-blue-900': 'text-white'}`} style={activeFilter === 'inactive' ? {} : { background: 'hsl(225, 23%, 24%)' }}>
            Inactive
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
