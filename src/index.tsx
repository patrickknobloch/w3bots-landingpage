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
   
  <div className='relative z-20 bg-neutral-950'>

    <App />
  </div>
      <Footer></Footer>
      </>
  );
} else {
  console.error('Root element not found');
}
