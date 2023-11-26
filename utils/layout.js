import { Inter } from 'next/font/google';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Nav from '../components/nav';
import { useEffect } from 'react';


export default function Layout({ children }) {

  return (
    <>
      <Nav />
      <Hero />
      <main className='bg-white'> 
          {children}
      </main>
      <Footer />    
    </>

  )
}
