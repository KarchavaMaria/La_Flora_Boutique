import './App.css';
import Header from './components/header/Header';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/footer/Footer';
import HowItWorks from './pages/howItWorks/HowItWorks';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <AppRoutes />
        <HowItWorks />
        <Footer />
      </main>
    </div>
  );
}

export default App;
