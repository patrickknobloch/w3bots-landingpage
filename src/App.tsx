import React from 'react';
import Navigation from './lib/components/Navigation';
import TetherUsdtLogo from './lib/assets/tether.svg'; // Stelle sicher, dass der Pfad korrekt ist
import FAQ from './lib/components/FAQ';
import Footer from './lib/components/Footer';
import { TbSquareRoundedPlus } from 'react-icons/tb';
import Header from './lib/components/Header';

function App() {
  return (
    <div className=" md:container w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto relative p-4">

      <Navigation></Navigation>

      <div className='w-full h-screen fixed z-0 top-0 left-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] '>
      </div>

      <Header></Header>

      <section className='flex flex-col md:flex-row gap-3 md:gap-8 mt-8 text-white bg-gradient-to-r from-lime-300 to-green-400 p-8 rounded-3xl hidden'>
          <div className='flex flex-col text-center w-full border rounded-xl border-neutral-800/20 text-neutral-900 py-6 md:py-12'>
            <div className='font-black text-4xl md:text-6xl '>15K+</div>
            <p className='text-sm md:text-2xl opacity-70 font-bold'>Users</p>
          </div>
          <div className='flex flex-col text-center w-full border rounded-xl border-neutral-800/20 text-neutral-900 py-6 md:py-12'>
            <div className='font-black text-4xl md:text-6xl '>150M+</div>
            <p className='text-sm md:text-2xl opacity-70 font-bold'>Total Volume</p>
          </div>
          <div className='flex flex-col text-center w-full border rounded-xl border-neutral-800/20 text-neutral-900 py-6 md:py-12'>
            <div className='font-black text-4xl md:text-6xl '>2+</div>
            <p className='text-sm md:text-2xl opacity-70 font-bold'>Dapps & Bots</p>
          </div>
          <div className='flex flex-col text-center w-full border rounded-xl border-neutral-800/20 text-neutral-900 py-6 md:py-12'>
            <div className='font-black text-4xl md:text-6xl '>10+</div>
            <p className='text-sm md:text-2xl opacity-70 font-bold'>Projects</p>
          </div>
      </section>

        <section id="bots" className="bg-neutral-400/5 border backdrop-blur-md rounded-xl border-neutral-800  text-white p-4 md:p-16 mt-8 flex text-center pb-3 md:pb-16 py-8 md:py-16 backdrop-blur-xs relative z-30 overflow-hidden">

          <div className="w-full text-white">

            <h2 className="font-black text-4xl md:text-5xl xl:text-8xl pt-10 pb-4 md:pt-20 bg-gradient-to-r from-lime-300 to-green-400 bg-clip-text text-transparent">Bots and D’Apps <br></br>with a ease of use </h2>
            <p className='text-base md:text-xl xl:text-xl opacity-60  mt-6 pb-12 md:pb-24'>
            Our bots are designed to be easy for users to use and to reduce the amount of work required by simplifying automated processes.
            </p>
            <div className='flex flex-col gap-3 md:gap-8 text-left'>

              <div className="flex flex-col md:flex-col xl:flex-row gap-3 md:gap-8 overflow-hidden">

                <div className="w-full md:w-full xl:w-1/2 p-4 md:p-12 rounded-xl border border-neutral-800 text-white relative overflow-hidden bg-neutral-900/50">
                  <div className='w-12 h-12 font-bold text-center p-3 rounded-full bg-neutral-950/10 mb-6 border border-neutral-600'>1</div>
                  <h3 className='font-bold text-xl'>Pooly</h3>
                  <p className='text-base md:text-xl mt-3 opacity-60 w-full md:w-3/4'>Pooly simplified liquidity pool investments straightforward with single-asset deposits, eliminating the need for manual token swaps.</p>
                  <button className="bg-gradient-to-r from-lime-300 to-green-400 text-neutral-900 font-bold px-6 py-3 rounded-xl mt-6">Visit Product</button>

                </div>

                <div className="w-full md:w-full xl:w-1/2 p-4 md:p-12 rounded-xl border border-neutral-800  text-white relative overflow-hidden bg-neutral-900/50">
                    <div className='w-12 h-12 font-bold text-center p-3 rounded-full bg-neutral-950/10 mb-6 border border-neutral-600'>2</div>
                    <h3 className='font-bold text-xl'>Swaply</h3>
                    <p className='text-base md:text-xl mt-3 pb-4 opacity-60 w-full md:w-3/4'>Swapy, a DEX aggregator, simplifies token swaps by integrating multiple providers into a single platform.</p>
                    <button className="bg-gradient-to-r from-lime-300 to-green-400 text-neutral-900 font-bold px-6 py-3 rounded-xl mt-6">Visit Product</button>

                </div>

              </div>

              <div className="flex flex-col md:flex-col xl:flex-row gap-3 md:gap-8 ">
                
                <div className="w-full md:w-full xl:3/4 p-4 md:p-12 rounded-xl  border border-neutral-800  text-white relative overflow-hidden bg-neutral-900/50">

                    <div className='w-12 h-12 font-bold text-center p-3 rounded-full bg-neutral-950/10 mb-6 border border-neutral-600'>3</div>
                    <h3 className='font-bold text-xl'>Launchy</h3>
                    <p className='text-base md:text-xl mt-3 pb-4 opacity-60 w-full '>Launchy enables the creation of tokens on the TON Blockchain and the setup of liquidity pools with your chosen DEX providers.</p>
                    <button className="bg-gradient-to-r from-lime-300 to-green-400 text-neutral-900 font-bold px-6 py-3 rounded-xl mt-6">Visit Product</button>

                </div>


                <div className="w-full md:w-full flex flex-col items-center p-4 md:p-12 rounded-xl border border-neutral-800  text-white relative overflow-hidden bg-neutral-900/50">
                <TbSquareRoundedPlus className='text-9xl opacity-20 mt-12' />

                  <h3 className='font-bold text-3xl'>More Bots</h3>
                  <p className='text-base md:text-xl mt-3 pb-4 opacity-60 w-full text-center'>Comming soon...</p>
                </div>
               
              </div>
            </div>

          </div>
        </section>

        <h2 id="vision" className="font-black text-4xl md:text-5xl xl:text-8xl pt-10 pb-4 md:pt-20 text-white text-center">The Vision</h2>

        <section className='flex flex-col md:flex-row gap-3 md:gap-8 mt-8 text-white bg-neutral-800/30 p-8 rounded-3xl  border border-lime-300'>
          <div className='flex flex-col text-center w-full border rounded-xl border-neutral-800/80 py-12 '>
            <div className='font-black text-2xl md:text-4xl '>Simple</div>
          </div>
          <div className='flex flex-col text-center w-full border rounded-xl border-neutral-800/80 py-12'>
            <div className='font-black text-2xl md:text-4xl '>Fast</div>
          </div>
          <div className='flex flex-col text-center w-full border rounded-xl border-neutral-800/80 py-12'>
            <div className='font-black text-2xl md:text-4xl '>Trusted</div>
          </div>
      </section>
    
      <section id="vision-1" className="bg-gradient-to-r from-lime-300 to-green-400 text-white text-center p-6 py-8 pt-32 md:p-20 xl:p-24 xl:py-24  rounded-3xl flex flex-col justify-center gap-12 mt-4 relative overflow-hidden bg-neutral-900/50 ">
      <img className="w-full h-screen absolute -top-48 md:-top-1/3 left-0 z-10 opacity-30 md:opacity-30" src="./assets/dotpattern.svg" alt=""/>

       
        <p className='text-center text-base md:text-xl xl:text-xl -mt-6 md:mt-0 relative z-30 text-neutral-900'>
        At w3bots, we specialize in creating sophisticated bots and tools for Telegram, integrating blockchain technology and gaming elements to enhance user engagement and functionality. Our products are designed to seamlessly blend into the Telegram ecosystem, providing powerful capabilities to users and community- and project managers alike.
        </p>
        <p className='text-center text-base md:text-xl xl:text-xl mt-3 md:mt-0 relative z-30 text-neutral-900 font-bold'>
        We are committed to driving web3 adoption through cutting-edge technology and seamless integration.  Our goal is to make blockchain accessible and understandable for everyone.
        </p>
        
       
      </section>

    </div>
  );
}

export default App;
