import React from 'react'

import classes from './TodayStatistic.css'
import TextStatistic from './TextStatistic/TextStatistic'
import Chart from './Chart/Chart'

const todayStatistic = (props) => (
	<div className = { classes.TodayStatistic } >
		<div style = {{ width: '60%' }}>
			<Chart 
				chartData = { props.chartData }	/>
		</div>
		<TextStatistic totalToday = { props.total }	/>
	</div>
)

export default todayStatistic