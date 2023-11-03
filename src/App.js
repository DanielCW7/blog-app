import logo from './logo.svg';
import './App.css';
import Hero from "./components/hero"
import Post from './components/post';

function App() {
  return (
    <div className="App">
        <Hero />
        <body className='max-w-7xl m-auto'>
          <Post />
          <Post />
          <Post />          
        </body>        


    </div>
  );
}

export default App;
