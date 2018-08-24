import React from 'react'

import classes from './DayStatistic.css'

const dayStatistic = (props) => { 

	const totalResult = props.day
		.map(kind => kind.quantity * kind.volume )
		.reduce((sum, el) => sum + el , 0)

	const listKinds = props.day.map(kind => (
		<li key = { kind.name }>
			{ kind.name } : { (kind.quantity * kind.volume).toFixed(2) } l
		</li>
	))

	const nameDay = props.day
		.map(kind => {
			if (kind.name === 'water') {
				switch (new Date(kind.date).getDay())	{
					case 0 : return (<h4 key = { kind.date }> Sunday </h4>); 
					case 1 : return (<h4 key = { kind.date }> Monday </h4>); 
					case 2 : return (<h4 key = { kind.date }> Tuesday </h4>);
					case 3 : return (<h4 key = { kind.date }> Wednesday </h4>);
					case 4 : return (<h4 key = { kind.date }> Thursday </h4>);
					case 5 : return (<h4 key = { kind.date }> Friday </h4>);  
					case 6 : return (<h4 key = { kind.date }> Saturday </h4>);
					default : return (<h4 key = { kind.date || Math.random() }> Unknowday </h4>)	
				}
			} else return
		})

	return (
		<div>
			{ nameDay }
			<ul className = { classes.ListKinds }>
				{ listKinds }
			</ul>
			<p><strong>total Sum : { totalResult.toFixed(2) } Litr</strong></p>
		</div>
	)
}

export default dayStatistic