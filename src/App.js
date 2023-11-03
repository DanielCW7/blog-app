import './App.css';
import Hero from "./components/hero"
import Posts from './components/posts';

function App() {
  return (
    <div className="App">
        <Hero />
        <body className='max-w-7xl m-auto p-10'>
          <form className='text-right'>
            {/* for filtering/searching blog posts */}
            <select type='select' className='border'>
              <option> all posts </option>
              <option> oldest to newest </option>
              <option> newest to oldest </option>
            </select>
          </form>
          <Posts />          
        </body>        


    </div>
  );
}

export default App;
