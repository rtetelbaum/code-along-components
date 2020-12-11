import React from 'react'
import InstructorComponent from '../Components/InstructorComponent'

function InstructorContainer(props) {

	const instructorsArray = [{id: 1, name: "Steven"}, {id: 2, name: "Caryn"}, {id: 3, name: "Greg"}]

	const instructors = instructorsArray.map(instructorObj => <InstructorComponent instructorObj={instructorObj} key={instructorObj.id} appClickHandler={props.appClickHandler} />)

	return (
		<div>
			<h3>Instructors:</h3>
			{instructors}
		</div>
	)
}

export default InstructorContainer