import React from 'react'
import './App.css';
import HeaderComponent from './Components/HeaderComponent'
import InstructorsContainer from './Containers/InstructorsContainer'
import AnimeContainer from './Containers/AnimeContainer' 

class App extends React.Component {

	state = { instructorObj: {} }

	appClickHandler = (instructorObj) => {
		this.setState({ instructorObj: instructorObj })
	}

	render() {
		return (
			<div className="App">
				<HeaderComponent />
				<InstructorsContainer appClickHandler={this.appClickHandler} />
				<AnimeContainer instructorObj={this.state.instructorObj} />
			</div>
		)
	}
}

export default App;
