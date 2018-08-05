import React from 'react'

// import classes from './TotalSum.css'
import Auxilliary from '../../../containers/hoc/Auxilliary'

const totalSum = (props) => {
	
	const kindsItem = props.kinds.map(kind => (
		<li key = { kind.name } >
			<span style={{ textTransform: 'capitalize' }}>{kind.name}</span>: 
			<strong>{ kind.quantity }</strong> <small>{ kind.text }</small></li>
	))

	return (
	<Auxilliary>
			<h3>Total list what you have drunk today:</h3>
			<ul>
				{ kindsItem }
			</ul>
			<p>total Sum : { props.total } litr</p>
			<button onClick = { props.close }>Exit to fix</button>
			<button onClick = { props.added }>All right and exit</button>
	</Auxilliary>
)}

export default totalSum