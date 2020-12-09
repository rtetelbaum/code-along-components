import React from 'react'
import Bline from './Bline'

function Header(props) { // passing in props from parent component (index.js), in this case instructorNamesArray
	let instructorNames = props.instructorNamesArray.map(instructorName => <Bline instructorName={instructorName} key={instructorName}/>) /* passing 
	props instructorName and key to child component Bline */
	return (
		// below React knows to iterate over the instructorNames array. Only array, not other data types.
		<div>
			<h1>Welcome to Our App!</h1>
			{instructorNames}
		</div> // this is NOT HTML, it's JSX, all of which must be wrapped inside a single element.
	)
}

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

// class Header extends React.Component {
	
// 	instructorNames = () => {
// 		return this.props.instructorNamesArray.map(instructorName => <Bline instructorName={instructorName} key={instructorName}/>)
// 	}
	
// 	render() {
// 		return (
// 			<div>
// 				<h1>Welcome to Our App!</h1>
// 				{this.instructorInstructor()}
// 			</div>
// 		)
// 	}
// }

export default Header;