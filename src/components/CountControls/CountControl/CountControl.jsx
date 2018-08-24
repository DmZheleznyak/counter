import React from 'react'

import classes from './CountControl.css'

const countControl = (props) => (
	<div className = { classes.CountControl }>
		<img src = { props.icon } alt = "Icon" />
		<div><span style={{ textTransform: 'capitalize' }}>{ props.name }</span></div>
		<button onClick = { props.removed } > - </button>
		<button onClick = { props.added }> + </button>
		<div><strong> { props.quantity } </strong></div>
		<div> { props.text } </div>
	</div>
)

export default countControl