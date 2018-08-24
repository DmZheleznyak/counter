import React, { Component } from 'react'
import Auxilliary from '../../../../containers/hoc/Auxilliary';

import { Bar } from 'react-chartjs-2';

const chart = (props) => {

	const labelsName = props.chartData().map(kind => kind.name)
	const color = props.chartData().map(kind => kind.color)
	const volume = props.chartData().map(kind => kind.quantity * kind.volume.toFixed(2) )

	let chartData = {
		labels: 
			labelsName,
			datasets: [{
				data: volume,
				backgroundColor: color
			}]
	}

	return (
			<Auxilliary>
				<Bar 
					data={ chartData }
					width={100}
					height={100}
					options={{
						title: {
							display: true,
							text: 'Statistic during Today',
							fontSize: 20
						}
						// maintainAspectRatio: false
					}}	/>
			</Auxilliary>
	)
}

export default chart