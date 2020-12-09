import React from 'react'
import Bline from './Bline'

function Header(props) { // passing in props from parent component (index.js), in this case instructors
	let instructors = props.instructors.map(name => <Bline name={name}/>) // passing props name to child component Bline
	return (
		// below React knows to iterate over the instructors array. Only array, not other data types.
		<div>
			<h1>Welcome to Our App!</h1>
			{instructors}
		</div> // this is NOT HTML, it's JSX, all of which must be wrapped inside a single element.
	)
}

// class Header extends React.Component {
	
// 	render() {
// 		let instructors = this.props.instructors.map(name => <Bline name={name}/>) // this here is the Header object
// 		return (
// 			<div>
// 				<h1>Welcome to Our App!</h1>
// 				{instructors}
// 			</div>
// 		)
// 	}
// }

// class Header extends React.Component {
	
// 	instructors = () => {
// 		return this.props.instructors.map(name => <Bline name={name}/>)
// 	}
	
// 	render() {
// 		return (
// 			<div>
// 				<h1>Welcome to Our App!</h1>
// 				{this.instructors()}
// 			</div>
// 		)
// 	}
// }

export default Header;