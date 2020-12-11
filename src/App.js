import React from 'react'
import './App.css';
import HeaderComponent from './Components/HeaderComponent'
import InstructorsContainer from './Containers/InstructorsContainer'
import AnimeContainer from './Containers/AnimeContainer' 

class App extends React.Component {

	state = { instructorObjs: [] }

	appClickHandler = (instructorObj) => {
		console.log(instructorObj)
		console.log(this.state.instructorObjs)
		if (!this.state.instructorObjs.includes(instructorObj)) { this.setState(prevState => ({ instructorObjs: [...prevState.instructorObjs, instructorObj] }))}
		// if (!this.state.blogArray.includes(blogObj)) { this.setState((prevState) => ({ blogArray: [...prevState.blogArray, blogObj] }) )
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
