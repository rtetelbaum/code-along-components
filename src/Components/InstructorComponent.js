import React from 'react'

class InstructorComponent extends React.Component {

	instructorClickHandler = () => {
		if (this.props.appClickHandler) {this.props.appClickHandler(this.props.instructorObj)}
	}

	render() {
		return (
			<p onClick={this.instructorClickHandler}>{this.props.instructorObj.name}</p>
		)
	}

}

export default InstructorComponent