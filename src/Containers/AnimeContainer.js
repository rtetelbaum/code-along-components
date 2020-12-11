import React from 'react'
import InstructorComponent from '../Components/InstructorComponent'

function AnimeContainer(props) {

	return (
		<div>
			<h3>Anime Lovers</h3>
			<InstructorComponent instructorObj={props.instructorObj} />
		</div>
	)
}

export default AnimeContainer