import React from 'react'

class FormComponent extends React.Component {

	state = { 
		name: "",
		mod: ""
	}

	formSubmit = (event) => {
		event.preventDefault()
		this.props.createNewInstructor({name: event.target.name.value, mod: event.target.mod.value})
		event.target.reset()
		// this.setState({name: "", mod: ""})
	}

	changeHandler = (event) => {
		this.setState({[event.target.name]: event.target.value})
		// if (event.target.name === "name") {
		// 	this.setState({name: event.target.value}, () => console.log(this.state.name))
		// } else if (event.target.name === "mod") {
		// 	this.setState({mod: event.target.value}, () => console.log(this.state.mod))
		// }
	}

	render() {
		return (
			<div>
				<h3>New Instructor Form</h3>
				<form onSubmit={this.formSubmit}>
					<input type="text" name="name" placeholder="Enter Instructor Name" value={this.state.name} onChange={this.changeHandler} />
					<input type="number" name="mod" placeholder="Enter Instructor Mod" value={this.state.mod} onChange={this.changeHandler} />
					<input type="submit" value="Create Instructor" />
				</form>
			</div>
		)
	}
}

export default FormComponent