import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Importieren Sie Ihre TailwindCSS-Datei
import Footer from './lib/components/Footer';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <>    
   
  <div className='relative z-20 bg-neutral-900'>
  <img className="w-full h-screen fixed -top-48 md:-top-0 left-0 z-5 opacity-10 md:opacity-5" src="./assets/dotpattern.svg" alt="" />

    <App />
    <Footer></Footer>
  </div>
      
      </>
  );
} else {
  console.error('Root element not found');
}
