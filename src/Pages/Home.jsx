import React from 'react'
import Profile from '../components/Profile';
import Links from '../components/Links';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <main className="App">
      <Profile />
      <Links />
      <Footer />
    </main>
  );
}

export default Home