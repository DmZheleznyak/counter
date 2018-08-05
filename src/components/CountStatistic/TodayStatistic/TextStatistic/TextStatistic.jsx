import React from 'react'

import classes from './TextStatistic.css'

const textStatistic = (props) => (
	<div className = { classes.TextStatistic }>
		<h3>Totall balance during today:</h3>
		<p>{ props.totalToday.toFixed(2) } Litr</p>
		<h3>Remainder to normal:</h3>
		<p>1.7 litr</p>
	</div>
)

export default textStatistic