import React from 'react'

function SearchComponent(props) {
	return (
		<div>
			<h3>Search Form</h3>
			<form>
				<input placeholder="Search for Instructor" value={props.searchValue} onChange={props.searchInstructor} />
			</form>
		</div>
	)
}

export default SearchComponent