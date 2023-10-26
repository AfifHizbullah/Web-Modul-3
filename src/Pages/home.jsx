import React from 'react';
import Footer from '../Components/foother';
import Hero from '../Components/hero';
import Navbar from '../Components/navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div>
        <p>Halaman Home</p>
      </div>
      <Footer />
    </>
  );
};

export default Home;
