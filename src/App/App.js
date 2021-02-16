import Card from '../Card/Card';
import Header from '../Header/Header';
import data from '../rickandmortyapi.json'
import './App.css'



function App() {
  return (
    <div className="App">
      <Header title="Rick and Morty API" />
      {data.results.map(entry => <Card name={entry.name} img={entry.image} key={entry.id}/>)}
    </div>
  );
}

export default App;
