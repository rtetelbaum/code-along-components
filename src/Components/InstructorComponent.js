import React from 'react'

class InstructorComponent extends React.Component {

	instructorClickHandler = () => {
		this.props.appClickHandler(this.props.instructorObj)
	}

	render() {
		return (
			<p onClick={this.instructorClickHandler}>{this.props.instructorObj.name}</p>
		)
	}

}

export default InstructorComponent