import React from 'react'
import Bline from './Bline'

// function Header(props) { // passing in props from parent component (index.js), in this case instructorNamesArray
// 	let instructorNames = props.instructorNamesArray.map(instructorName => <Bline instructorName={instructorName} key={instructorName}/>) /* passing 
// 	props instructorName and key to child component Bline */
// 	return (
// 		// below React knows to iterate over the instructorNames array. Only array, not other data types.
// 		<div>
// 			<h1>Welcome to Our App!</h1>
// 			{instructorNames}
// 		</div> // this is NOT HTML, it's JSX, all of which must be wrapped inside a single element.
// 	)
// }

// class Header extends React.Component {
	
// 	render() {
// 		let instructorNames = this.props.instructorNamesArray.map(instructorName => <Bline instructorName={instructorName} key={instructorName}/>) // this here is the Header object
// 		return (
// 			<div>
// 				<h1>Welcome to Our App!</h1>
// 				{instructorNames}
// 			</div>
// 		)
// 	}
// }

class Header extends React.Component {
	// constructor(props) {
	// 	super(props) // allow you to access this.props IN the constructor
	// 	this.state = { color: "blue" } // can now access this.state in render or anywhere else in class
	// } // older way of creating state

	state = { color: "black"} // newer ES6 syntax for creating state

	instructorNames = () => {
		return this.props.instructorNamesArray.map(instructorName => <Bline instructorName={instructorName} key={instructorName}/>)
	}

	clickHandler = () => {
		if (this.state.color === "black") {
			this.setState({color: "blue"}) // will overwrite state above AND call render method again
		} else {
			this.setState({color: "black"})
		}
	} // referenced below when h1 is clicked. We want to change this color to blue.
	
	render() {
		return (
			<div>
				<h1 onClick={this.clickHandler} style={{"border-style": "dashed", "border-color": `${this.state.color}`}} >Welcome to Our App!</h1>
				{this.instructorNames()}
			</div>
		)
	}
}

export default Header;