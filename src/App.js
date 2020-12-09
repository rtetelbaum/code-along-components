import './App.css';
import Header from './Header'

function App() {
	const instructorNamesArray = ["Steven", "Caryn", "Greg"]
  return (
    <div className="App">
      <Header instructorNamesArray={instructorNamesArray}/>
    </div> // instructorsNamesArray is a prop we're passing to the child component, Header.js
  );
}

export default App;
