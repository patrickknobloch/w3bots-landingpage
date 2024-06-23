import React, { useState } from 'react';

interface AccordionItemProps {
  number: number;
  title: string;
  description: string;
  widthClass: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ number, title, description, widthClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={` ${widthClass} p-4 rounded-xl bg-neutral-950/10 border border-neutral-800/80`}>
      <div
        className="flex justify-between items-center w-full text-left cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <div className="w-12 h-12 font-bold text-center p-3 rounded-full bg-neutral-950/10  mr-4">{number}</div>
          <h3 className="font-bold text-base">{title}</h3>
        </div>
        <div className="w-6 h-6">{isOpen ? '▲' : '▼'}</div>
      </div>
      {isOpen && (
        <div className="pt-4">
          <p className="text-base mt-3 p-4 md:p-16 pt-3">{description}</p>
        </div>
      )}
    </div>
  );
};

const Accordion: React.FC = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 md:gap-8 mt-12 text-left">
    
      <AccordionItem
        number={1}
        title="What is Pooly?"
        description="Pooly is a tool that allows users to easily invest in liquidity pools with their wallet. Instead of performing many swaps and transactions, Pooly reduces the number of transactions from four to two. Additionally, Pooly simplifies the process through single-asset deposits, so it is sufficient to execute everything with just one currency. This makes the investment process more efficient and user-friendly."
        widthClass="xl:w-full"
      />
      <AccordionItem
        number={2}
        title="Is investing through Pooly safe?"
        description="Since everything on Pooly happens in a self-custodial mode, the pools or the NFTs of the pools remain with the user and are not managed by a central smart contract. Unlike many other platforms that operate through a central vault, Pooly simply simplifies the transaction process and reduces transaction costs while ensuring self-custody of assets. This increases security, as control over the assets remains entirely with the user."
        widthClass="xl:w-full"
      />
      <AccordionItem
        number={3}
        title="What currencies and assets are allowed on Pooly?"
        description="Pooly currently supports investments in the following cryptocurrencies: USDT, USDC, and TON."
        widthClass="xl:w-full"
      />
      <AccordionItem
        number={4}
        title="What risks are associated with liquidity pools?"
        description="Investments in liquidity pools carry various risks, including impermanent loss, market risks due to price fluctuations of the traded assets, and potential security risks from hacks or bugs in the underlying smart contracts."
        widthClass="xl:w-full"
      />
      <AccordionItem
        number={5}
        title="How is the Annual Percentage Yield (APY) calculated?"
        description="The APY (Annual Percentage Yield) is calculated based on the fees generated within the pool and the appreciation of the invested assets. Pooly regularly calculates the APY to give users an overview of their potential returns."
        widthClass="xl:w-full"
      />
      <AccordionItem
        number={6}
        title="What fees are associated with using Pooly?"
        description="A fee of 0.25% is charged for using Pooly."
        widthClass="xl:w-full"
      />
      <AccordionItem
        number={7}
        title="Are there detailed tutorials on how to use Pooly?"
        description="Yes, detailed tutorials on how to use Pooly can be found on our [GitBook page](insert link to GitBook)."
        widthClass="xl:w-full"
      />
      <AccordionItem
        number={8}
        title="How can I withdraw my investments from Pooly?"
        description="You can withdraw your investments directly through the positions in the app. There is a button to dissolve the position, making the process quick and easy."
        widthClass="xl:w-full"
      />
    </div>
  );
};

export default Accordion;
