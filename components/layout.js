import Footer from './footer';
import Hero from './hero';
import Nav from './nav';


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
