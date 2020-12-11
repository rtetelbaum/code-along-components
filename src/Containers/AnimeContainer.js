import React from 'react'
import InstructorComponent from '../Components/InstructorComponent'

function AnimeContainer(props) {

	const instructorObjs = props.instructorObjs.map( instructorObj => <InstructorComponent instructorObj={instructorObj} key={instructorObj.id} />)

	return (
		<div>
			<h3>Anime Lovers</h3>
			{instructorObjs}
		</div>
	)
}

export default AnimeContainer