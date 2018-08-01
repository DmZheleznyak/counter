import React from 'react'

import classes from './CountControl.css'

const countControl = (props) => (
	<div className = { classes.CountControl }>
		<img src = { props.icon } alt = "Icon" />
		<div><span style={{ textTransform: 'capitalize' }}>{ props.name }</span></div>
		<button onClick = { props.removed } >Remove</button>
		<button onClick = { props.added }>Add</button>
		<div><strong> { props.quantity } </strong></div>
		<div> { props.text } </div>
	</div>
)

export default countControl