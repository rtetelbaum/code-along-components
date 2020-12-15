import React from 'react'
import InstructorComponent from '../Components/InstructorComponent'
import FormComponent from '../Components/FormComponent'
import SearchComponent from '../Components/SearchComponent'

class InstructorContainer extends React.Component {

	state = {
		instructors: [],
		searchValue: ""
	}

	componentDidMount() {
		fetch('http://localhost:4000/instructors')
			.then(response => response.json())
			.then(data => this.setState({instructors: data}))
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
		const instructors = this.state.instructors.filter(instructorObj => instructorObj.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
		return instructors.map(instructorObj => <InstructorComponent instructorObj={instructorObj} key={instructorObj.id} appClickHandler={this.props.appClickHandler} />)
	}

	render() {
		return (
			<div>
				<FormComponent createNewInstructor={this.createNewInstructor} />
				<SearchComponent searchInstructor={this.searchInstructor} searchValue={this.state.searchValue} />
				<h3>Instructors:</h3>
				{this.state.instructors.length === 0 ? <p>LOADING INSTRUCTORS...</p> : this.filteredInstructors()}
			</div>
		)
	}
}

export default InstructorContainer