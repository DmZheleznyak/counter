import React from 'react'

import classes from './AllTimeStatistic.css'

const allTimeStatistic = (props) => (
	<div className = { classes.allTimeStatistic }>
		<p>Show statistic during :</p>
		<button>totall today</button>
		<button onClick = { props.showWeek }>last week</button>
		<button>last mounth</button>
	</div>
)

export default allTimeStatistic