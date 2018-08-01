import React from 'react'

import classes from './CountControls.css'
import CountControl from './CountControl/CountControl'

const countControls = (props) => {
	const kinds = Object.keys(props.kinds)
		.map(kind => {
			return (
				<CountControl 
					key = { kind } 
					icon = { props.kinds[kind].icon }
					name = { props.kinds[kind].name } 
					img = { props.kinds[kind].image }
					quantity = { props.kinds[kind].quantity }
					text = { props.kinds[kind].text }
					added = { () => props.added(props.kinds[kind].name)  }
					removed = { () => props.removed(props.kinds[kind].name) } />
			)
		})

	return (
		<div className = { classes.CountControls }> 
			<h2>What did you drink today ?</h2>
			{ kinds }
			<button onClick = { props.addAll } >Add All Now</button>
		</div>
	)
}

export default countControls