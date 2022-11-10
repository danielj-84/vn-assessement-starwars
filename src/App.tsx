import './App.css';
import CharacterList from './components/CharacterList/CharacterList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Star Wars Characters</h1>
        <h3>A Viral Nation assessment</h3>
      </header>
      <CharacterList/>
      <div>CHARACTER PROFILE</div>
    </div>
  );
}

export default App;
