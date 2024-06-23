import React from 'react';

const Footer: React.FC = () => {
  return (
<footer className="  text-white relative z-30 overflow-hidden">
<img className="w-full absolute top-0 left-0 z-10 opacity-15 md:opacity-5" src="./assets/dotpattern.svg" alt=""/>

    <div className="container px-12 py-12 max-w-screen-xl mx-auto relative md:h-screen flex flex-col gap-12 md:flex-row items-center">
        
        <div className="text-center flex flex-col gap-4">
            <h1 className="font-black text-3xl xl:text-8xl leading-snug relative z-30">
            Discover now and earn yield with pool transfers
            </h1>
            <p className='mt-3 md:mt-12 text-base xl:text-xl relative opacity-60 z-30'>
            Invest with a single asset deposit and earn from pool transfer fees, easy and fast.
            </p>
            <div className='flex flex-col xl:flex-row gap-3 md:gap-8 mx-auto w-fit mt-6 md:mt-12 relative z-30'>
            <button className='py-3 px-6 text-base font-bold bg-white text-neutral-800 rounded-xl'>Open on WebApp</button>
            <button className='py-3 px-6 text-base font-bold bg-white text-neutral-800 rounded-xl'>Open in Telegram</button>

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
