import React from 'react';
import Navigation from './lib/components/Navigation';
import TetherUsdtLogo from './lib/assets/tether.svg'; // Stelle sicher, dass der Pfad korrekt ist
import FAQ from './lib/components/FAQ';
import Footer from './lib/components/Footer';

function App() {
  return (
    <div className=" md:container w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto relative p-4">

      <Navigation></Navigation>

      <div className='w-full h-screen fixed z-0 top-0 left-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] '>
      </div>

      <header className="bg-gradient-to-r from-lime-300 to-green-400 text-white text-center p-6 py-16 pt-32 md:p-20 xl:p-24 xl:py-48  rounded-3xl flex flex-col justify-center gap-12 mt-4 relative overflow-hidden bg-neutral-900/50 ">
      <img className="w-full h-screen absolute -top-48 md:-top-1/3 left-0 z-10 opacity-30 md:opacity-30" src="./assets/dotpattern.svg" alt=""/>

        <p className='uppercase text-center text-base md:text-xl xl:text-xl opacity-60 -mt-6 md:mt-0 relative z-30 text-neutral-900'>
          Build for more adaption
        </p>
        <h1 className="-mt-8 font-black text-4xl md:text-6xl xl:text-9xl md:leading-relaxed relative z-30 text-neutral-900">
        Simplify with our  <br></br>dapps and bots
        </h1>
        <p className='text-center text-base md:text-xl xl:text-xl -mt-6 md:mt-0 relative z-30 text-neutral-900'>
        Browse various investment pools and select the best one for your goals
                </p>
        <div className='flex flex-col md:flex-row xl:flex-row gap-4 md:gap-8 mx-auto relative z-30'>
          <button className='py-3 px-6 text-base font-bold bg-white text-neutral-800 rounded-xl '>Open on WebApp</button>

        </div>
       
      </header>

      <section className='flex flex-col md:flex-row gap-3 md:gap-8 mt-8 text-white'>
        <div className='flex flex-col text-center w-full border rounded-xl border-neutral-800 py-12 bg-neutral-900'>
          <div className='font-black text-6xl bg-gradient-to-r from-lime-300 to-green-400 bg-clip-text text-transparent'>15K+</div>
          <p className='text-3xl'>Users</p>
        </div>

        <div className='flex flex-col text-center w-full border rounded-xl border-neutral-800 py-12 bg-neutral-900'>
          <div className='font-black text-6xl bg-gradient-to-r from-lime-300 to-green-400 bg-clip-text text-transparent'>39B+</div>
          <p className='text-3xl'>Volume</p>
        </div>

        <div className='flex flex-col text-center w-full border rounded-xl border-neutral-800 py-12 bg-neutral-900'>
          <div className='font-black text-6xl bg-gradient-to-r from-lime-300 to-green-400 bg-clip-text text-transparent'>143M+</div>
          <p className='text-3xl'>Transactions</p>
        </div>

        <div className='flex flex-col text-center w-full border rounded-xl border-neutral-800 py-12 bg-neutral-900'>
          <div className='font-black text-6xl bg-gradient-to-r from-lime-300 to-green-400 bg-clip-text text-transparent'>2+</div>
          <p className='text-3xl'>Bots & Dapps</p>
        </div>


      </section>

        <section className="bg-neutral-400/5 border  rounded-xl border-neutral-800  text-white p-4 md:p-16 mt-8 flex text-center pb-3 md:pb-16 py-8 md:py-16 backdrop-blur-xs relative z-30 overflow-hidden">

          <div className="w-full text-white">

            <h2 className="font-black text-4xl md:text-5xl xl:text-8xl pt-10 pb-4 md:pt-20 bg-gradient-to-r from-lime-300 to-green-400 bg-clip-text text-transparent">Bots for Community Manager and Users</h2>
            <p className='text-base md:text-xl xl:text-xl opacity-60  mt-6 pb-12 md:pb-24'>
              Invest with a single asset deposit and earn from pool transfer fees, easy and fast.
            </p>
            <div className='flex flex-col gap-3 md:gap-8 text-left'>

              <div className="flex flex-col md:flex-col xl:flex-row gap-3 md:gap-8 overflow-hidden">

                <div className="w-full md:w-full xl:w-1/2 p-4 md:p-12 rounded-xl border border-neutral-800/10 text-white relative overflow-hidden bg-neutral-900/50">
                  <div className='w-12 h-12 font-bold text-center p-3 rounded-full bg-neutral-950/10 mb-6 border border-neutral-600'>1</div>
                  <h3 className='font-bold text-xl'>Pooly</h3>
                  <p className='text-base md:text-xl mt-3 opacity-60 w-full md:w-1/2'>Browse various investment pools and select the best one for your goals.</p>
                  <button className="bg-gradient-to-r from-lime-300 to-green-400 text-neutral-900 font-bold px-6 py-3 rounded-xl mt-6">Visit Product</button>

                </div>

                <div className="w-full md:w-full xl:w-1/2 p-4 md:p-12 rounded-xl border border-neutral-800/10  text-white relative overflow-hidden bg-neutral-900/50">

                
                    <div className='w-12 h-12 font-bold text-center p-3 rounded-full bg-neutral-950/10 mb-6 border border-neutral-600'>2</div>
                    <h3 className='font-bold text-xl'>Swapy</h3>
                    <p className='text-base md:text-xl mt-3 pb-4 opacity-60 w-full md:w-3/4'>Enter the only the dollar amount and your currency and confirm your investment.</p>
                    <button className="bg-gradient-to-r from-lime-300 to-green-400 text-neutral-900 font-bold px-6 py-3 rounded-xl mt-6">Visit Product</button>

                </div>

              </div>

              <div className="flex flex-col md:flex-col xl:flex-row gap-3 md:gap-8">
                
              <div className="w-full md:w-full xl:w-1/3 p-4 md:p-12 rounded-xl bg-neutral-100/5 border border-neutral-800/10  text-white relative overflow-hidden bg-neutral-900/50">

                  <div className='w-12 h-12 font-bold text-center p-3 rounded-full bg-neutral-950/10 mb-6 border border-neutral-600'>3</div>
                  <h3 className='font-bold text-xl'>Looty</h3>
                  <p className='text-base md:text-xl mt-3 pb-4 opacity-60 w-full '>Confirm the transaction through your wallet for security.</p>
                  <button className="bg-gradient-to-r from-lime-300 to-green-400 text-neutral-900 font-bold px-6 py-3 rounded-xl mt-6">Visit Product</button>

                </div>

                <div className="w-full md:w-full xl:w-1/3 p-4 md:p-12 rounded-xl bg-neutral-100/5 border border-neutral-800/10 text-white relative overflow-hidden bg-neutral-900/50">
                  <div className='w-12 h-12 font-bold text-center p-3 rounded-full bg-neutral-950/10 mb-6 border border-neutral-600'>4</div>
                  <h3 className='font-bold text-xl'>Adsy</h3>
                  <p className='text-base md:text-xl mt-3 opacity-60 w-full'>Monitor the performance of your investments in real-time through your dashboard.</p>
                  <button className="bg-gradient-to-r from-lime-300 to-green-400 text-neutral-900 font-bold px-6 py-3 rounded-xl mt-6">Visit Product</button>

                </div>

                <div className="w-full md:w-full xl:w-1/3 p-4 md:p-12 rounded-xl bg-neutral-100/5 border border-neutral-800/10 text-white relative overflow-hidden bg-neutral-900/50">
                  <div className='w-12 h-12 font-bold text-center p-3 rounded-full bg-neutral-950/10 mb-6 border border-neutral-600'>5</div>
                  <h3 className='font-bold text-xl'>Posty</h3>
                  <p className='text-base md:text-xl mt-3 opacity-60 w-full '>Monitor the performance of your investments in real-time through your dashboard.</p>
                  <button className="bg-gradient-to-r from-lime-300 to-green-400 text-neutral-900 font-bold px-6 py-3 rounded-xl mt-6">Visit Product</button>

                </div>
               
              </div>
            </div>

          </div>
        </section>

  
    
    </div>
  );
}

export default App;
