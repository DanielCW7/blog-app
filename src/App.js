import logo from './logo.svg';
import './App.css';
import Hero from "./components/hero"
import Post from './components/post';

function App() {
  return (
    <div className="App">
        <Hero />
        <body className='max-w-7xl m-auto'>
          <form className='text-right'>
            {/* for filtering/searching blog posts */}
            <select type='select' className='border'>
              <option> all posts </option>
              <option> oldest to newest </option>
              <option> newest to oldest </option>
            </select>
            
          </form>
          <Post />
          <Post />
          <Post />          
        </body>        


    </div>
  );
}

export default App;
