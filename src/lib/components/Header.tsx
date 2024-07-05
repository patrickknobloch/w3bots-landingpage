import React, { useState } from 'react';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Enhancing Blockchain Accessibility",
      subtitle: "Innovating with Passion for Web3",
      description: "We drive web3 adoption by developing innovative tools and bots that simplify complex processes and enhance user experience and engagement."
    },
    {
      title: "Simplifying Investment Complexities",
      subtitle: "Simplify Yield Farming",
      description: "Invest with ease using single asset deposits and maximize your returns effortlessly. Pooly handles the complexities so you don't have to."
    },
    {
      title: "HANDLE TOKEN MANAGEMENT EASILY",
      subtitle: "Token Creation & Management",
      description: "Create and manage tokens effortlessly. Launchy brings simplicity and efficiency to your token projects."
    },
    {
      title: "SIMPLIFIED FOR SEAMLESS AND SAFE USER EXPERIENCES",
      subtitle: "Efficient Swaps Made Easy",
      description: "Combine multiple providers into a single access point. Swapy makes token swaps seamless and efficient, all in one place."
    },
    {
      title: "OUR INNOVATIVE REWARD SYSTEM",
      subtitle: "Enhance Community Engagement",
      description: "Boost engagement and community interaction with Looty. Our solution incentivizes task completion with gamified rewards, driving your project's visibility and reach."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <header id="start" className="bg-gradient-to-r from-lime-300 to-green-400 text-white text-center p-6 py-16 pt-32 md:p-20 xl:p-24 xl:py-48 rounded-3xl flex flex-col justify-center gap-12 mt-4 relative overflow-hidden bg-neutral-900/50">
      <img className="w-full h-screen absolute -top-48 md:-top-1/3 left-0 z-10 opacity-30 md:opacity-30" src="./assets/dotpattern.svg" alt="" />

      <div className="relative z-30 text-neutral-900">
        <p className='uppercase text-center text-base md:text-xl xl:text-xl opacity-60 -mt-6 md:mt-0'>
          {slides[currentSlide].title}
        </p>
        <h1 className="mt-8 font-black text-4xl md:text-6xl xl:text-9xl md:leading-relaxed">
          {slides[currentSlide].subtitle}
        </h1>
        <p className='text-center text-base md:text-xl xl:text-xl -mt-6 md:mt-6 w-full md:w-2/3 mx-auto'>
          {slides[currentSlide].description}
        </p>
      </div>

      <div className='flex flex-col md:flex-col xl:flex-col gap-4 md:gap-8 mx-auto relative z-30'>
        <button className='py-3 px-6 text-2xl font-bold bg-neutral-900 text-white rounded-xl' onClick={nextSlide}>Next Slide</button>
      </div>

      <div className="flex justify-center gap-2 mt-4 relative z-30">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 border border-neutral-900 p-1 rounded-full ${index === currentSlide ? 'bg-neutral-900' : 'bg-transparent'}`}></button>
        ))}
      </div>
    </header>
  );
};

export default Header;
