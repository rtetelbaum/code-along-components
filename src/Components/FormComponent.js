import React from 'react'

class FormComponent extends React.Component {

	state = { 
		name: "",
		mod: ""
	}

	formSubmit = (event) => {
		event.preventDefault()
		this.props.createNewInstructor({name: this.state.name, mod: this.state.mod})
		this.setState({name: "", mod: ""})
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
					<label htmlFor="Instructor Name">Instructor Name: </label>
					<input type="text" name="name" placeholder="Enter Instructor Name" value={this.state.name} onChange={this.changeHandler} /><br />
					<label htmlFor="Instructor Mod">Instructor Mod: </label>
					<input type="number" name="mod" placeholder="Enter Instructor Mod" value={this.state.mod} onChange={this.changeHandler} />
					<button>Create</button>
				</form>
			</div>
		)
	}
}

export default FormComponent