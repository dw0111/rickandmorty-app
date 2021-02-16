import Card from '../Card/Card';
import Header from '../Header/Header';
import data from '../rickandmortyapi.json'
import './App.css'



function App() {
  return (
    <div className="App">
      <Header title="Rick and Morty API" />
      {data.results.map(({name, image, species, id}) => <Card name={name} img={image} species={species} key={id}/>)}
    </div>
  );
}

export default App;
