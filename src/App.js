import logo from './logo.svg';
import './App.css';
import Hero from "./components/hero"
import Post from './components/post';

function App() {
  return (
    <div className="App">
        <Hero />
        <header className="App-header">
        <div className='border-2 max-w-7xl w-full'>

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          </div>
        </header>        
      <Post />

    </div>
  );
}

export default App;
