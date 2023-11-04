import './App.css';
import Hero from "./components/hero"
import Posts from './components/posts';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <Nav />
        <Hero />
        <body className='max-w-7xl m-auto lg:pb-0 p-10'>
          <form className='text-right'>
            {/* for filtering/searching blog posts */}
            <select type='select' className='border'>
              <option> all posts </option>
              <option> oldest to newest </option>
              <option> newest to oldest </option>
            </select>
            <button className='border'> filter </button>
          </form>
          <Posts />          
        </body>        


    </div>
  );
}

export default App;
