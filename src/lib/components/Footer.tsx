import React from 'react';

const Footer: React.FC = () => {
  return (
<footer className=" bg-neutral-900 text-white relative z-30 overflow-hidden">

    <div className="container px-12 py-12 max-w-screen-xl mx-auto relative md:h-screen flex flex-col gap-12 md:flex-row items-center">
        
        <div className="text-center flex flex-col gap-4">
            <h1 className="font-black text-4xl xl:text-8xl leading-snug relative z-30">
            We build and develop dapps and bots!
            </h1>
            <p className='mt-3 md:mt-12 text-base xl:text-xl relative opacity-60 z-30'>
            We build and develop dapps and bots that connect, simplify ways to increase the adoption of web3.            
            </p>
            <div className='mt-12 flex flex-col md:flex-col xl:flex-col gap-4 md:gap-8 mx-auto relative z-30'>
          <button className='py-3 px-6 text-2xl font-bold bg-neutral-900 rounded-xl bg-gradient-to-r from-lime-300 to-green-400 text-neutral-900'>Request & Contact</button>
          <small className='md:-mt-6 text-white'>Open our Request Bot on Telegram</small>
        </div>
        </div>
       
        <div className="flex flex-col relative mt-24 md:absolute left-0 bottom-0 w-full ">
            <a href="#" className='w-full '>
                <img className="w-1/2 xl:w-56 mx-auto" src="./assets/logo.svg" alt=""/>
            </a>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-300 w-full text-center pb-0 md:pb-12">© Copyright 2024. All Rights Reserved.</p>
        </div>

    </div>
</footer>
  );
};

export default Footer;
