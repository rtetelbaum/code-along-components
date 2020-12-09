import './App.css';
import Header from './Header'

function App() {
	const instructorNames = ["Steven", "Caryn", "Greg"]
  return (
    <div className="App">
      <Header instructors={instructorNames}/>
    </div> // instructors is a prop we're passing to the child component, Header.js
  );
}

export default App;
