import React from 'react'

class HeaderComponent extends React.Component {

	state = { color: "black" }

	clickHandler = () => {
		if (this.state.color === "black") {
			this.setState({color: "blue"})
		} else {
			this.setState({color: "black"})
		}
	}
	
	render() {
		return (
			<div>
				<h1 onClick={this.clickHandler} style={{"borderStyle": "dashed", "borderColor": `${this.state.color}`}} >Welcome to Our App!</h1>
			</div>
		)
	}
}

export default HeaderComponent;