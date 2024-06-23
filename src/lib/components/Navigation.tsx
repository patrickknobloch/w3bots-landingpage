import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="py-4 pt-0 flex items-center justify-between text-white relative z-50">
      {/* Logo on the left */}
      <div className="flex items-center">
        <span className="text-3xl md:text-5xl italic ml-2 font-black logo">pooly</span>
      </div>

      {/* Navigation in the center */}
      <div className=" justify-center hidden xl:flex">
        <a href="#" className="px-4 py-2 rounded-md text-xl border border-transparent hover:border hover:border-neutral-100/10">Start</a>
        <a href="#" className="px-4 py-2 rounded-md text-xl border border-transparent hover:border hover:border-neutral-100/10">How it works</a>
        <a href="#" className="px-4 py-2 rounded-md text-xl border border-transparent hover:border hover:border-neutral-100/10">Benefits</a>
      </div>

      {/* Wallet Connect Button on the right */}
      <div>
        <button className="bg-white text-neutral-900 font-bold px-6 py-3 rounded-2xl">Go to App</button>
      </div>
    </nav>
  );
};

export default Navigation;
