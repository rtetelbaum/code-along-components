import React from 'react'
import './App.css';
import HeaderComponent from './Components/HeaderComponent'
import InstructorsContainer from './Containers/InstructorsContainer'
import AnimeContainer from './Containers/AnimeContainer' 

class App extends React.Component {

	state = { instructorObjs: [] }

	appClickHandler = (instructorObj) => {
		let foundInstructor = this.state.instructorObjs.find( obj => obj.id === instructorObj.id) 
		if (!foundInstructor) { this.setState(prevState => ({ instructorObjs: [...prevState.instructorObjs, instructorObj] }))}
    }

	render() {
		return (
			<div className="App">
				<HeaderComponent />
				<InstructorsContainer appClickHandler={this.appClickHandler} />
				<AnimeContainer instructorObjs={this.state.instructorObjs} />
			</div>
		)
	}
}

export default App;
