import React from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import NavbarComponent from '../components/Navbar';
import Slider from '../components/Slider';

export default function HomePage() {
  return (
    <div>
      <NavbarComponent />
      <Slider />
      <hr />
      <Categories />
      <Footer />
    </div>
  );
}
