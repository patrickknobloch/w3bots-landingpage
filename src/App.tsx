import React from 'react';
import Navigation from './lib/components/Navigation';
import TetherUsdtLogo from './lib/assets/tether.svg'; // Stelle sicher, dass der Pfad korrekt ist
import BestPools from './lib/components/BestPools';
import FAQ from './lib/components/FAQ';
import Footer from './lib/components/Footer';

function App() {
  return (
    <div className="p-4 md:p-12 pt-3 md:container w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto ">

      <Navigation></Navigation>

      <div className='w-full h-screen fixed z-0 top-0 left-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-neutral-950'>
      </div>

      <header className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-center p-6 py-16 md:p-20 xl:p-24 xl:py-48  rounded-3xl flex flex-col justify-center gap-12 mt-4 relative overflow-hidden ">
      
        <img className="w-full h-screen absolute -top-48 md:-top-1/3 left-0 z-10 opacity-30 md:opacity-10" src="./assets/dotpattern.svg" alt=""/>

        <h1 className="font-black text-4xl md:text-6xl xl:text-8xl leading-tight relative z-30">
          Discover, join and earn yield with pools.
        </h1>
        <p className='text-base md:text-xl xl:text-xl opacity-60 -mt-6 md:mt-0 relative z-30'>
          Invest with a single asset deposit and earn from pool transfer fees, easy, fast and secure.
        </p>
        <div className='flex flex-col md:flex-row xl:flex-row gap-4 md:gap-8 mx-auto relative z-30'>
          <button className='py-3 px-6 text-base font-bold bg-white text-neutral-800 rounded-xl'>Open on WebApp</button>
          <button className='py-3 px-6 text-base font-bold bg-white text-neutral-800 rounded-xl'>Open in Telegram</button>

        </div>
       
      </header>

      <BestPools></BestPools>
      


        <section className="flex mt-8 py-12 text-center relative bg-neutral-100/5 border border-neutral-100/10 backdrop-blur-xs text-white rounded-2xl overflow-hidden ">

          <div className="w-full ">

            <h2 className="font-black text-xl md:text-3xl xl:text-3xl">Accepted Assets</h2>
          
            <div className="flex justify-center mt-12 gap-8">
              <div>
              <img src="./assets/tether.svg" alt="Dashboard Header" className="h-12 md:h-16 rounded-full mb-4"/>
              <h4>USDT</h4>
              </div>
              <div>
              <img src="./assets/usdc.svg" alt="Dashboard Header" className="h-12 md:h-16 rounded-full mb-4"/>
              <h4>USDC</h4>
              </div>
              <div>
              <img src="./assets/toncoin.svg" alt="Dashboard Header" className="h-12 md:h-16 rounded-full mb-4"/>
              <h4>TON</h4>
              </div>
            </div>
            <p className='text-base md:text-xl opacity-60 mt-8 px-6'>
              We use current only native and stablecoins for Single Asset Deposit
            </p>
          </div>
        </section>

        <section className="bg-neutral-900/50 border border-neutral-100/10  text-white rounded-2xl p-4 md:p-16 mt-8 flex text-center pb-3 md:pb-16 py-8 md:py-16 backdrop-blur-xs relative z-30 overflow-hidden">

          <div className="w-full text-white">

            <h2 className="font-black text-4xl md:text-5xl xl:text-9xl pt-10 md:pt-20">How it works</h2>
            <p className='text-base md:text-xl xl:text-xl opacity-60  mt-6 pb-12 md:pb-24'>
              Invest with a single asset deposit and earn from pool transfer fees, easy and fast.
            </p>
            <div className='flex flex-col gap-3 md:gap-8 mt-12 text-left'>

              <div className="flex flex-col md:flex-col xl:flex-row gap-3 md:gap-8 overflow-hidden">

                <div className="w-full md:w-full xl:w-3/5 p-4 md:p-12 rounded-xl bg-neutral-100/5 border border-neutral-800/10 text-white relative overflow-hidden">
                  <div className='w-12 h-12 font-bold text-center p-3 rounded-full bg-neutral-950/10 mb-6 border border-neutral-600'>1</div>
                  <h3 className='font-bold text-xl'>Explore and choose</h3>
                  <p className='text-base md:text-xl mt-3 opacity-60 w-full md:w-1/2'>Browse various investment pools and select the best one for your goals.</p>
                  <div className='relative md:absolute -bottom-48 md:top-56 md:right-12 w-full md:w-1/3 h-96 rounded-xl '>
                    <div role="status" className="-mt-40 max-w-md space-y-4 divide-y divide-neutral-700 border border-neutral-100/20 rounded-xl shadow  dark:divide-gray-700 md:p-6 dark:border-gray-700">
                            <div className="flex items-center justify-between p-4 pb-0">
                                <div className='animate-pulse'>
                                    <div className="h-2.5 bg-neutral-600 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-neutral-700 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-neutral-600 rounded-full dark:bg-gray-700 w-12 animate-pulse"></div>
                            </div>
                            <div className="flex items-center justify-between pt-4 w-full scale-105 md:w-72  md:-ml-12 p-4 rounded-xl bg-neutral-100/10 backdrop-blur-md ">
                                <div>
                                  <div className='flex gap-5'>
                                    <div className="relative flex items-center">
                                      <img src="https://assets.dedust.io/images/ton.webp" alt="TON Bridge USDT" className="w-6 rounded-full border border-neutral-700"/><img src="https://assets.dedust.io/images/usdt.webp" alt="Tether USD" className="w-6  rounded-full absolute left-3 border border-neutral-700"/>
                                    </div>
                                    <div className="font-black">TON + USDT</div>
                                  </div>
                                    <div className="w-32 text-xs opacity-50">Dedust / StonFi</div>
                                </div>
                                <div className="flex flex-col items-center font-black text-white">23,4 %<br></br><small className='text-xs font-normal opacity-50'>TVL: 2,54 m</small></div>
                            </div>
                            <div className="flex items-center justify-between p-4">
                                <div className='animate-pulse'>
                                    <div className="h-2.5 bg-neutral-600 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-neutral-700 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-neutral-600 rounded-full dark:bg-gray-700 w-12 animate-pulse"></div>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div className='animate-pulse'>
                                    <div className="h-2.5 bg-neutral-600 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-neutral-700 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-neutral-600 rounded-full dark:bg-gray-700 w-12 animate-pulse"></div>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div>
                                    <div className="h-2.5 bg-neutral-600 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-neutral-700 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-neutral-600 rounded-full dark:bg-gray-700 w-12"></div>
                            </div>
                            <span className="sr-only">Loading...</span>
                    </div>
                      </div>
                </div>

                <div className="w-full md:w-full xl:w-2/5 p-4 md:p-12 rounded-xl bg-neutral-100/5 border border-neutral-800/10  text-white relative overflow-hidden">

                  <div className='relative md:absolute bottom-2 md:-top-12 -mt-8 md:right-6 w-full md:w-1/2 md:h-96 rounded-xl '>
              
                    <div role="status" className=" relative space-y-4 divide-y divide-neutral-700 scale-90 md:scale-75 border border-neutral-100/20 rounded-xl shadow h-64 dark:divide-gray-700 md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-between p-4 pb-0">
                                <div className='animate-pulse'>
                                    <div className="h-2.5 bg-neutral-600 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-neutral-700 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-neutral-600 rounded-full dark:bg-gray-700 w-12 animate-pulse"></div>
                            </div>
                      <div className='absolute -left-1 w-full bottom-0 p-4 rounded-xl bg-neutral-100/5 scale-110 backdrop-blur-md'>

                      <div className="flex">
                        <div className="flex items-center h-5">
                            <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        </div>
                        <div className="ms-2 text-sm">
                            <label htmlFor="helper-radio" className="font-medium text-xs ">TON (10 TON / $199)</label>
                        </div>
                    </div>

                    <div className="flex mb-2">
                        <div className="flex items-center h-5">
                            <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        </div>
                        <div className="ms-2 text-sm">
                            <label htmlFor="helper-radio" className="font-medium text-xs ">USDT (199.43 USDT / $199)</label>
                        </div>
                    </div>

                      <div className="max-w-sm pb-0">
                        <label htmlFor="input-label" className="block z-10 relative mb-2 text-xs opacity-60">Enter your Dollar Amount</label>
                        <input type="email" id="input-label" className=" py-3 px-4 block w-full border border-neutral-700 bg-transparent rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="$ 100" />
                      </div>
                        <button className='mt-3 bg-blue-500 rounded-md w-full py-2 text-sm font-bold'>Invest</button>
                      </div>
                    </div>
                      </div>
                
                    <div className='w-12 h-12 font-bold text-center p-3 rounded-full bg-neutral-950/10 mb-6 border border-neutral-600'>2</div>
                    <h3 className='font-bold text-xl'>Simple investing</h3>
                    <p className='text-base md:text-xl mt-3 pb-4 opacity-60 w-full md:w-3/4'>Enter the only the dollar amount and your currency and confirm your investment.</p>
                </div>

              </div>

              <div className="flex flex-col md:flex-col xl:flex-row gap-3 md:gap-8">
                
              <div className="w-full md:w-full xl:w-2/5 p-4 md:p-12 rounded-xl bg-neutral-100/5 border border-neutral-800/10  text-white relative overflow-hidden">

                <div className='relative md:absolute bottom-6 md:-top-12 -mt-32 md:right-6 w-full md:w-1/2 md:h-96 rounded-xl '>

                  <div role="status" className=" relative space-y-4 divide-y divide-neutral-700 md:scale-75 border border-neutral-100/20 rounded-xl shadow h-64 dark:divide-gray-700 md:p-6 dark:border-gray-700">
                  <div className="flex items-center justify-between p-4 pb-0">
                              <div className='animate-pulse'>
                                  <div className="h-2.5 bg-neutral-600 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                  <div className="w-32 h-2 bg-neutral-700 rounded-full dark:bg-gray-700"></div>
                              </div>
                              <div className="h-2.5 bg-neutral-600 rounded-full dark:bg-gray-700 w-12 animate-pulse"></div>
                          </div>
                    <div className='absolute -left-1 w-full bottom-0 p-4 rounded-xl bg-neutral-100/5 scale-110 backdrop-blur-md'>

                  <div className="flex mb-2">
                      <div className="flex items-center h-5">
                          <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      </div>
                      <div className="ms-2 text-sm">
                          <label htmlFor="helper-radio" className="font-medium text-xs ">USDT (199.43 USDT / $199)</label>
                      </div>
                  </div>
                  
                      <button className='mt-3 bg-blue-500 rounded-md w-full py-2 text-sm font-bold'>Confirm</button>
                    </div>
                  </div>
                    </div>

                  <div className='w-12 h-12 font-bold text-center p-3 rounded-full bg-neutral-950/10 mb-6 border border-neutral-600'>3</div>
                  <h3 className='font-bold text-xl'>Confirm Investment</h3>
                  <p className='text-base md:text-xl mt-3 pb-4 opacity-60 w-full md:w-3/4'>Confirm the transaction through your wallet for security.</p>
                </div>

                <div className="w-full md:w-full xl:w-3/5 p-4 md:p-12 rounded-xl bg-neutral-100/5 border border-neutral-800/10 text-white relative overflow-hidden">
                  <div className='w-12 h-12 font-bold text-center p-3 rounded-full bg-neutral-950/10 mb-6 border border-neutral-600'>4</div>
                  <h3 className='font-bold text-xl'>Monitor Positions</h3>
                  <p className='text-base md:text-xl mt-3 opacity-60 w-full md:w-1/2'>Monitor the performance of your investments in real-time through your dashboard.</p>
                  <div className='relative md:absolute -bottom-48 md:top-56 md:right-12 w-full md:w-1/3 h-96 rounded-xl '>
                    <div role="status" className="-mt-40 max-w-md space-y-4 divide-y divide-neutral-700 border border-neutral-100/20 rounded-xl shadow  dark:divide-gray-700 md:p-6 dark:border-gray-700">
                            <div className="flex items-center justify-between p-4 pb-0">
                                <div className='animate-pulse'>
                                    <div className="h-2.5 bg-neutral-600 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-neutral-700 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-neutral-600 rounded-full dark:bg-gray-700 w-12 animate-pulse"></div>
                            </div>
                            <div className="flex items-center justify-between pt-4 w-full scale-105 md:w-72  md:-ml-12 p-4 rounded-xl bg-neutral-100/10 backdrop-blur-md ">
                                <div>
                                  <div className='flex gap-5'>
                                    <div className="relative flex items-center">
                                      <img src="https://assets.dedust.io/images/ton.webp" alt="TON Bridge USDT" className="w-6 rounded-full border border-neutral-700"/><img src="https://assets.dedust.io/images/usdt.webp" alt="Tether USD" className="w-6  rounded-full absolute left-3 border border-neutral-700"/>
                                    </div>
                                    <div className="font-black">TON + USDT</div>
                                  </div>
                                    <div className="w-32 text-xs opacity-50">Dedust / StonFi</div>
                                </div>
                                <div className="flex flex-col items-center font-black text-white">23,4 %<br></br><small className='text-xs font-normal opacity-50'>TVL: 2,54 m</small></div>
                            </div>
                            <div className="flex items-center justify-between p-4">
                                <div className='animate-pulse'>
                                    <div className="h-2.5 bg-neutral-600 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-neutral-700 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-neutral-600 rounded-full dark:bg-gray-700 w-12 animate-pulse"></div>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div className='animate-pulse'>
                                    <div className="h-2.5 bg-neutral-600 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-neutral-700 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-neutral-600 rounded-full dark:bg-gray-700 w-12 animate-pulse"></div>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div>
                                    <div className="h-2.5 bg-neutral-600 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div className="w-32 h-2 bg-neutral-700 rounded-full dark:bg-gray-700"></div>
                                </div>
                                <div className="h-2.5 bg-neutral-600 rounded-full dark:bg-gray-700 w-12"></div>
                            </div>
                            <span className="sr-only">Loading...</span>
                    </div>
                      </div>
                </div>
               
              </div>
            </div>

          </div>
        </section>

        <section className="flex flex-col mt-6 text-white relative z-20">
          <div className='w-full text-center'>  
            <h2 className="font-black text-4xl md:text-5xl xl:text-9xl pt-10 md:pt-20">Benefits with pooly</h2>
            <p className='text-base md:text-xl xl:text-xl opacity-60 relative z-30 mt-6 pb-12 md:pb-24'>
              Invest with a single asset deposit and earn from pool transfer fees, easy and fast.
            </p>
          </div>
          <div className="w-full flex-col justify-center mt-6">
          
            <div className='flex flex-col gap-3 md:gap-8'>

              <div className='flex flex-col md:flex-row w-full bg-gradient-to-r to-blue-500 from-[#24A1DE] p-6 md:p-12 py-12 pb-0 md:py-24 rounded-xl text-white relative overflow-hidden '>

                <div className='text-center w-full md:w-1/2 xl:w-1/2'>
                  <h3 className='font-black text-2xl md:text-4xl'>Telegram Mini App</h3>
                  <p className='text-base md:text-xl opacity-60 mt-4'>
                  With our Telegram Mini App, you have access to your investments anytime, anywhere. Monitor and manage your liquidity pools directly in your favorite messenger without the need for additional applications or websites.
                  </p>
                  <button className='mt-8 py-3 px-6 text-base font-bold bg-white text-[#24A1DE] rounded-xl'>Open in Telegram</button>
                </div>

                <div className='relative md:absolute ml-[180px] md:ml-0 right-1/2 md:right-20 xl:right-40 z-20 -bottom-12 md:-bottom-12'>
                  
                  <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[400px] w-[300px]">
                      <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                      <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                      
                      </div>
                  </div>

                </div>

              </div>

              <div className='w-full flex flex-col md:flex-col xl:flex-row gap-3 md:gap-8'>
                
                <div className='bg-neutral-100/5 border border-neutral-800/30 w-full p-12 rounded-xl text-white relative overflow-hidden text-center '>

                  <div className='relative z-30'>
                    <h3 className='font-black text-2xl md:text-3xl leading-tight'>Single Asset<br></br> Deposit & Withdraw</h3>
                    <p className='text-base md:text-xl opacity-60 mt-4 text-shadow'>
                    Invest in liquidity pools with one token; our platform handles the necessary swaps automatically. You only confirm the transaction of change without enters.
                    </p>
                    
                  </div>

                </div>

                <div className='bg-neutral-100/5 border border-neutral-800/30 w-full p-12 rounded-xl  text-white relative overflow-hidden text-center '>

                <h3 className='font-black text-2xl md:text-3xl leading-tight'>Revenue Share from Fees</h3>
                  <p className='text-base md:text-xl opacity-60 mt-4 text-shadow'>
                  We distribute 50% of the revenue generated from fees to all app users on a monthly basis, ensuring you benefit consistently from your investments with Pooly.
                                    </p>
                

                </div>

                <div className='bg-neutral-100/5 border border-neutral-800/30 w-full p-12 rounded-xl  text-white relative overflow-hidden text-center '>

                <h3 className='font-black text-2xl md:text-3xl leading-tight'>Security through self-custody</h3>
                  <p className='text-base md:text-xl opacity-60 mt-4 text-shadow'>
                  With Pooly, your assets remain in your own wallet, not in the provider's smart contracts, ensuring maximum security and control over your investments.
                  </p>
                

                </div>

              </div>

            </div>

          </div>
        </section>

        <section className="flex mt-6 text-center py-6 md:py-16 text-white relative z-30">
          <div className="w-full">
          <div className='w-full text-center'>  
            <h2 className="font-black text-4xl md:text-5xl xl:text-9xl pt-10 md:pt-20">FAQ</h2>
            <p className='text-base md:text-xl xl:text-xl opacity-60 relative z-30 mt-6 pb-12 md:pb-24'>
              Invest with a single asset deposit and earn from pool transfer fees, easy and fast.
            </p>
          </div>
            
            <FAQ></FAQ>

          </div>
        </section>
    
    </div>
  );
}

export default App;
