import React from 'react'

import classes from './TodayStatistic.css'
import TextStatistic from './TextStatistic/TextStatistic'

// import man from '../../../assets/logos/yoga.svg'

const todayStatistic = (props) => (
	<div className = { classes.TodayStatistic } >
		<div style = {{ width: '60%' }}>Here will be img of Man</div>
		<TextStatistic totalToday = { props.total }	/>
	</div>
)

export default todayStatistic