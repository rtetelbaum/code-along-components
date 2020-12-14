import React from 'react'
import InstructorComponent from '../Components/InstructorComponent'
import FormComponent from '../Components/FormComponent'
import SearchComponent from '../Components/SearchComponent'

class InstructorContainer extends React.Component {

	state = {
		instructors: [{id: 1, name: "Steven", mod: 3}, {id: 2, name: "Caryn", mod: 1}, {id: 3, name: "Greg", mod: 3}],
		searchValue: ""
	}

	createNewInstructor = (instructorObj) => {
		this.setState(prevState => ({instructors: [...prevState.instructors, {id: prevState.instructors.length + 1, name: instructorObj.name, mod: instructorObj.mod}]}))
	}

	searchInstructor = (event) => {
		this.setState({
			searchValue: event.target.value
		})
	}

	filteredInstructors = () => {
		return this.state.instructors.filter(instructorObj => instructorObj.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
	}

	render() {
		const instructors = this.filteredInstructors().map(instructorObj => <InstructorComponent instructorObj={instructorObj} key={instructorObj.id} appClickHandler={this.props.appClickHandler} />)
		return (
			<div>
				<FormComponent createNewInstructor={this.createNewInstructor} />
				<SearchComponent searchInstructor={this.searchInstructor} searchValue={this.state.searchValue} />
				<h3>Instructors:</h3>
				{instructors}
			</div>
		)
	}
}

export default InstructorContainer