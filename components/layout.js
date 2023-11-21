import { Inter } from 'next/font/google';
import Footer from './footer';
import Hero from './hero';


export default function Layout({ children }) {
  return (
    <>
      <Hero />
      <main className='bg-white'> 
          {children}
      </main>
      <Footer />    
    </>

  )
}
