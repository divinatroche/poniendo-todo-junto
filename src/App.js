import './App.css';
import PersonCard from './Componentes/PersonCard';
const App =() => {
  const cabecera ="People"
  return(
    <div className = "App">
      <div className="App-header">
        <h1>{cabecera}</h1>
        <PersonCard lastName="Doe"  firstName="Jane" age={45} haircolor="Black"/>
        <PersonCard lastName="Smith" firstName="John" age={88} hairColor="Brown"/>
        <PersonCard lastName="Fillmore" firstName="Millard" age={50} hairColor="Brown"/>
        <PersonCard lastName="Smith" firstName="Maria" age={62} hairColor="Brown"/>
      </div>
    </div>
  )
}

export default App;
