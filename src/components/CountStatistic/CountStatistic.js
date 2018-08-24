import React from 'react'

import classes from './CountStatistic.css'
import AllTimeStatistic from './AllTimeStatistic/AllTimeStatistic'
import TodayStatistic from './TodayStatistic/TodayStatistic'

const countStatistic = (props) => (
	<div className = { classes.CountStatistic }>
		<TodayStatistic 
			total = { props.todayTotal }
			chartData = { props.chartData } />
		<AllTimeStatistic 
			showWeek = { props.showWeekStatistic }	/>
	</div>
)

export default countStatistic