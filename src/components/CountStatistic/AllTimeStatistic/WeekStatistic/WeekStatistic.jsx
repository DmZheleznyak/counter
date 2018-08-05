import React from 'react'

import Auxilliary from '../../../../containers/hoc/Auxilliary';
import classes from './WeekStatistic.css'
import DayStatistic from './DayStatistic/DayStatistic'

const weekStatistic = (props) => {

	const listItems = props.listDays.map(day => (
		<li key = { Math.random() }>
			<DayStatistic	day = { day }	/>
		</li>
	))

	return (
		<Auxilliary>
			<h3>Statistic during last week :</h3>
			<ul className = { classes.ListDay }>
				{ listItems }
			</ul>
			{/* <p>total average</p> */}
			<button>exit</button><button>Ok</button>			
		</Auxilliary>
	)	
}

export default weekStatistic