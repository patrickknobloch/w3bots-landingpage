import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="py-4 pt-0 flex items-center justify-between text-neutral-900 relative z-50 -bottom-24 md:-bottom-32 px-4 md:px-8 -mt-20 md:-mt-24">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img className="w-40 xl:w-56 mx-auto" src="./assets/logo-black.svg" alt=""/>

      </div>

      {/* Navigation in the center */}
      <div className="flex items-center py-4 justify-center hidden xl:flex text-neutral-900">
        <a href="#start" className="px-4 py-2 rounded-md text-xl border border-transparent hover:border hover:border-neutral-100/10">Start</a>
        <a href="#bots" className="px-4 py-2 rounded-md text-xl border border-transparent hover:border hover:border-neutral-100/10">Bots & Dapps</a>
        <a href="#vision" className="px-4 py-2 rounded-md text-xl border border-transparent hover:border hover:border-neutral-100/10">The Vision</a>
      </div>

      {/* Wallet Connect Button on the right */}
      <div>
        <button className="bg-neutral-900 text-white font-bold px-6 py-3 rounded-2xl">Contact us</button>
      </div>
    </nav>
  );
};

export default Navigation;
