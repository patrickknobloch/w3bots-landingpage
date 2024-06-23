import React, { useEffect, useState } from 'react';

interface AssetMetadata {
  name: string;
  symbol: string;
  image?: string;
  decimals: number;
}

interface Asset {
  type: 'jetton' | 'native';
  address?: string;
  metadata?: AssetMetadata;
}

interface Pool {
  address: string;
  lt?: string;
  totalSupply?: string;
  type: 'volatile' | 'stable';
  tradeFee: string;
  assets: Asset[];
  lastPrice: string | null;
  reserves: string[];
  stats: {
    fees: string[];
    volume: string[];
  };
  source: 'dedust' | 'stonfi';
  lp_total_supply_usd?: string;
}

interface TONPrice {
  symbol: string;
  price: number;
  updatedAt: string;
}

const BestPools: React.FC = () => {

  const [dedustPools, setDedustPools] = useState<Pool[]>([]);
  //const [stonfiPools, setStonfiPools] = useState<StonfiPool[]>([]);
  const [tonPrice, setTONPrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchDedustPools = async () => {
      try {
        const response = await fetch('https://api.dedust.io/v2/pools');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Pool[] = await response.json();
        setDedustPools(data.map(pool => ({ ...pool, source: 'dedust' as 'dedust' })));
      } catch (error) {
        console.error('Error fetching dedust pools data:', error);
      }
    };

    const fetchTONPrice = async () => {
      try {
        const response = await fetch('https://api.dedust.io/v2/prices');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const prices: TONPrice[] = await response.json();
        const ton = prices.find(price => price.symbol === 'TON');
        if (ton) {
          setTONPrice(ton.price);
        }
      } catch (error) {
        console.error('Error fetching TON price:', error);
      }
    };

    fetchDedustPools();
    fetchTONPrice();
  }, []);

  function calculateAPY(data: Pool, tonPriceUSD: number | null) {
    if (tonPriceUSD === null) {
      console.error("TON Price is null.");
      return null;
    }

    const reservesTON = parseFloat(data.reserves[0]);
    const reservesBOLT = parseFloat(data.reserves[1]);
    const feesTON = parseFloat(data.stats.fees[0]);
    const feesBOLT = parseFloat(data.stats.fees[1]);

    const calculatedLastPrice = reservesTON / reservesBOLT;

    const reservesTONInUSD = reservesTON * tonPriceUSD / 1e9;
    const reservesBOLTInUSD = reservesBOLT * calculatedLastPrice / 1e9;

    const feesTONInUSD = feesTON * tonPriceUSD / 1e9;
    const feesBOLTInUSD = feesBOLT * calculatedLastPrice / 1e9;

    const dailyReturnTON = feesTONInUSD / (reservesTONInUSD * 2);
    const dailyReturnBOLT = feesBOLTInUSD / (reservesTONInUSD + reservesBOLTInUSD);

    const annualReturnTON = dailyReturnTON * 365 * 100;
    const annualReturnBOLT = dailyReturnBOLT * 365 * 100;

    return annualReturnTON.toFixed(2);
  }

  function calculateStableAPY(data: Pool) {
    const reserves = data.reserves.map(Number);
    const lastPrice = Number(data.lastPrice);

    const fees = data.stats.fees.map(fee => Number(fee) / 10 ** 6);
    const fees_24h = fees.reduce((acc, fee) => acc + fee, 0);
    const feesInUsd = fees_24h / 2 * Number(data.lastPrice);

    const volumes = data.stats.volume.map(volume => Number(volume) / 10 ** 6);
    const volume = volumes.reduce((acc, volume) => acc + volume, 0);

    const jUSDT_units = reserves[0] / 10 ** 6;
    const jUSDC_units = reserves[1] / 10 ** 6;

    const jUSDT_value_usd = jUSDT_units * lastPrice;
    const jUSDC_value_usd = jUSDC_units * lastPrice;

    const a3123 = (Math.pow(1 + feesInUsd / (jUSDT_value_usd + jUSDC_value_usd), 365) - 1) * 100;
    const dailyReturnTON12 = feesInUsd / (jUSDT_value_usd + jUSDC_value_usd) * lastPrice;
    const apy23 = dailyReturnTON12 * 365 * 100;

    const liquidity = jUSDT_value_usd + jUSDC_value_usd;
    const apy = (Math.pow(1 + fees_24h / liquidity, 365) - 1) * 100;
    const apr = (fees_24h * 365 / liquidity) * 100;

    return { apy, liquidity, volume, apy23 };
  }

  const bestStablePool = dedustPools
    .filter(pool => pool.assets[1].metadata != null 
      && parseFloat(pool.stats.volume[0]) > 1 
      && pool.type === "stable")
    .reduce((bestPool, currentPool) => {
      const currentAPY = calculateStableAPY(currentPool).apy23;
      if (bestPool === null || currentAPY > calculateStableAPY(bestPool).apy23) {
        return currentPool;
      }
      return bestPool;
    }, null as Pool | null);

  const bestNativePool = dedustPools
    .filter(pool => pool.assets[1].metadata != null 
      && parseFloat(pool.stats.volume[0]) > 1 
      && pool.assets[0].type === "native")
    .reduce((bestPool, currentPool) => {
      const currentAPY = parseFloat(calculateStableAPY(currentPool).apy23.toFixed(5));
      if (currentAPY <= 999) {
        if (bestPool === null || currentAPY > parseFloat(calculateStableAPY(bestPool).apy23.toFixed(5))) {
          return currentPool;
        }
      }
      return bestPool;
  }, null as Pool | null);

  const bestVolatilePool = dedustPools
    .filter(pool => pool.assets[1].metadata != null 
      && pool.assets[0].metadata != null 
      && parseFloat(pool.stats.volume[0]) > 1
      && pool.assets[0].type != "native")
    .reduce((bestPool, currentPool) => {
      const currentAPY = parseFloat(calculateStableAPY(currentPool).apy23.toFixed(5));
      if (currentAPY <= 999) {
        if (bestPool === null || currentAPY > parseFloat(calculateStableAPY(bestPool).apy23.toFixed(5))) {
          return currentPool;
        }
      }
      return bestPool;
  }, null as Pool | null);
  

  return (
    <div className='flex flex-col xl:flex-row justify-between gap-3 md:gap-8 mt-8 '>
      <div className='bg-neutral-100/5 border border-neutral-100/10 backdrop-blur-md text-white w-full rounded-2xl relative overflow-hidden '>

        {bestStablePool && tonPrice !== null ? (
          <div className="selectbox rounded-lg">
            <div className="grid grid-cols-2 items-center h-fit divide-x divide-dashed divide-neutral-100/20 p-2">
              <div className='flex flex-col pl-8 justify-center pt-8 pb-8'>
              <div className="relative flex items-center">
                <img src={bestStablePool.assets[0].metadata?.image} alt={bestStablePool.assets[0].metadata?.name} className="w-12  rounded-full border border-neutral-700" />
                <img src={bestStablePool.assets[1].metadata?.image} alt={bestStablePool.assets[1].metadata?.name} className="w-12  rounded-full absolute left-8 border border-neutral-700" />
              </div>
              <h3 className='mt-3'><strong className='text-base font-black'>{bestStablePool.assets[0].metadata?.symbol} + {bestStablePool.assets[1].metadata?.symbol}</strong><br></br><small className='relative -top-1'>DeDust</small></h3>
              </div>
              <div className='relative'>

                <h3 className=' text-center '><strong className=" text-2xl font-black ">{calculateStableAPY(bestStablePool).apy23.toFixed(2)} %</strong><br></br><small className='relative -top-1'>Est. APY</small></h3>
                
                <p className='text-center text-sm opacity-50'><strong>TVL</strong> <br></br>{(parseFloat(bestStablePool.reserves[0]) * tonPrice / 1e9 * 2).toFixed(2)} $</p>

              </div>            </div>
            <div className="flex items-center space-x-4 gap-4 justify-between hidden">
              <p><small>Liquidity</small><strong>{(parseFloat(bestStablePool.reserves[0]) * tonPrice / 1e9 * 2).toFixed(2)}</strong> $</p>
              <p><small>Volume (24h)</small><br /><strong>{(parseFloat(bestStablePool.stats.volume[0]) / 1e9 * tonPrice).toFixed(2)}</strong> $</p>
              <p className="opacity-50 text-center"><small>Trading Fees</small><br />{bestStablePool.tradeFee}%</p>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className='bg-neutral-100/5 border border-neutral-100/10 backdrop-blur-md text-white w-full rounded-xl relative overflow-hidden '>

        {bestVolatilePool && tonPrice !== null ? (
          <div className="selectbox rounded-lg">
            <div className="grid grid-cols-2 items-center divide-x divide-dashed divide-neutral-100/20 p-2">
              <div className='flex flex-col pl-8 pt-8 pb-8'>
              <div className="relative flex items-center ">
                <img src={bestVolatilePool.assets[0].metadata?.image} alt={bestVolatilePool.assets[0].metadata?.name} className="w-12  rounded-full border border-neutral-700 bg-neutral-900" />
                <img src={bestVolatilePool.assets[1].metadata?.image} alt={bestVolatilePool.assets[1].metadata?.name} className="w-12  rounded-full absolute left-8 border border-neutral-700 bg-neutral-900" />
              </div>
              <h3 className='mt-3'><strong className='text-base font-black'>{bestVolatilePool.assets[0].metadata?.symbol} + {bestVolatilePool.assets[1].metadata?.symbol}</strong><br></br><small className='relative -top-1'>DeDust</small></h3>
              </div>
              <div className='relative'>

                <h3 className=' text-center '><strong className=" text-2xl font-black ">{calculateStableAPY(bestVolatilePool).apy23.toFixed(2)} %</strong><br></br><small className='relative -top-1'>Est. APY</small>

                </h3>
                <p className='text-center text-sm opacity-50'><strong>TVL</strong> <br></br>{(parseFloat(bestVolatilePool.reserves[0]) * tonPrice / 1e9 * 2).toFixed(2)} $</p>

              </div>
            </div>
            
            <div className="flex items-center space-x-4 gap-4 justify-between hidden">
              <p><small>Liquidity</small><br /><strong>{(parseFloat(bestVolatilePool.reserves[0]) * tonPrice / 1e9 * 2).toFixed(2)}</strong> $</p>
              <p><small>Volume (24h)</small><br /><strong>{(parseFloat(bestVolatilePool.stats.volume[0]) / 1e9 * tonPrice).toFixed(2)}</strong> $</p>
              <p className="opacity-50 text-center"><small>Trading Fees</small><br />{bestVolatilePool.tradeFee}%</p>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className='bg-neutral-100/5 border border-neutral-100/10 backdrop-blur-md text-white w-full rounded-xl relative overflow-hidden '>

        {bestNativePool && tonPrice !== null ? (
          <div className="selectbox rounded-lg">
            <div className="grid grid-cols-2 items-center h-fit divide-x divide-dashed divide-neutral-100/20 p-2">
              <div className='flex flex-col pl-8 pt-8 pb-8'>
              <div className="relative flex items-center">
                <img src={bestNativePool.assets[0].metadata?.image} alt={bestNativePool.assets[0].metadata?.name} className="w-12  rounded-full border border-neutral-700" />
                <img src={bestNativePool.assets[1].metadata?.image} alt={bestNativePool.assets[1].metadata?.name} className="w-12  rounded-full absolute left-8 border border-neutral-700" />
              </div>
              <h3 className='mt-3'><strong className='text-base font-black'>{bestNativePool.assets[0].metadata?.symbol} + {bestNativePool.assets[1].metadata?.symbol}</strong><br></br><small className='relative -top-1'>DeDust</small></h3>
              </div>
              <div className='relative'>
                <h3 className=' text-center '><strong className=" text-2xl font-black ">{calculateStableAPY(bestNativePool).apy23.toFixed(2)} %</strong><br></br><small className='relative -top-1'>Est. APY</small></h3>
                <p className='text-center text-sm opacity-50'><strong>TVL</strong> <br></br>{(parseFloat(bestNativePool.reserves[0]) * tonPrice / 1e9 * 2).toFixed(2)} $</p>

              </div>
            </div>
            <div className="flex items-center space-x-4 gap-4 justify-between hidden">
              <p><small>Liquidity</small><br /><strong>{(parseFloat(bestNativePool.reserves[0]) * tonPrice / 1e9 * 2).toFixed(2)}</strong> $</p>
              <p><small>Volume (24h)</small><br /><strong>{(parseFloat(bestNativePool.stats.volume[0]) / 1e9 * tonPrice).toFixed(2)}</strong> $</p>
              <p className="opacity-50 text-center"><small>Trading Fees</small><br />{bestNativePool.tradeFee}%</p>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default BestPools;
