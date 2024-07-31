import './App.css';
import { animals } from './components/animals';

let images = [];
const showBackground = true;

function displayFact(e) {
  let facts = animals[e.target.alt].facts;
  document.getElementById('fact').innerHTML = facts[Math.floor(Math.random() * facts.length)];
}

for (const animal in animals) {
  images.push( 
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact}
    />
  );
}

const background = <img className="background" alt="ocean" src="https://img.freepik.com/premium-photo/there-is-very-large-amount-water-ocean-generative-ai_955925-10982.jpg" />;
const animalFacts = (
  <div>
    {showBackground && background}
    <h1 className="title">Click an animal for a fun fact</h1>
    <p id='fact'></p>
    <div className="animals">
      {images}
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      {animalFacts}
    </div>
  );
}

export default App;