import React, { Component } from 'react'

import Auxilliary from '../hoc/Auxilliary'
import CountControls from '../../components/CountControls/CountControls'
import Modal from '../../components/UI/Modal/Modal'
import TotalSum from '../../components/CountControls/TotalSum/TotalSum'
import CountStatistic from '../../components/CountStatistic/CountStatistic'

import glassOfWater from '../../assets/logos/glassOfWater.svg'
import cupOfCoffee from '../../assets/logos/coffee.svg'


// 	tea: 0.25,
// 	juice: 0.2,
// 	milk: 0.1

class CounterBuilder extends Component {
	state = {
		kinds : [
			{
				name: 'water',
				quantity: 0,
				volume: 0.25,
				text: '(250 ml)',
				// data: ...
				icon: glassOfWater  
			},
			{
				name: 'coffee',
				quantity: 0,
				volume: 0.15,
				text: '(150 ml)',
				// data: ...
				icon: cupOfCoffee
			}
		],
		purchasing: true,
		totalToday: 0 
	}

	addKindHandler = (type) => {
		let oldCount
		this.state.kinds.map(kind => {
			if (kind.name === type) oldCount = kind.quantity
		})

		const updatedCount = oldCount + 1
		const updatedKinds = [ ...this.state.kinds ]

		updatedKinds.map(kind => {
			if (kind.name === type) kind.quantity = updatedCount
		})

		this.setState({ kinds: updatedKinds })
	}

	removedKindHandler = (type) => {
		let oldCount
		this.state.kinds.map(kind => {
			if (kind.name === type) oldCount = kind.quantity
		})
		
		if (oldCount <= 0) return

		const updatedCount = oldCount - 1
		const updatedKinds = [ ...this.state.kinds ]

		updatedKinds.map(kind => {
			if (kind.name === type) kind.quantity = updatedCount
		})

		this.setState({ kinds: updatedKinds })
	}

	purchaseHandler = () => this.setState({ purchasing: true })

	purchaseCancelHandler = () => this.setState({ purchasing: false })

	addAllHandler = () => {
		const updateTotalToday = this.state.kinds
			.map(kind => kind.quantity * kind.volume )
			.reduce((sum, el) => sum + el , this.state.totalToday)

		this.setState({ totalToday: updateTotalToday })

		this.purchaseHandler()
	}

	currentDate = () => {
		let date = new Date()
		let currentDay = [date.getDate(), date.getMonth(), date.getFullYear()].join('-')
		return currentDay
	}

	addToLocalStorageHandler = () => {
		const updatedKinds = [ ...this.state.kinds ]
		let value = JSON.stringify(updatedKinds)
		localStorage[this.currentDate()] = value 
	}

	render () {
		return (
			<Auxilliary>
				<Modal show = { this.state.purchasing }
								clicked = { this.purchaseCancelHandler }	>
					<TotalSum 
						kinds = { this.state.kinds }
						total = { this.state.totalToday }
						close = { this.purchaseCancelHandler }
						added = { this.addToLocalStorageHandler }	/>			
				</Modal>
				<CountControls 
					kinds = { this.state.kinds }
					added = { this.addKindHandler }
					removed = { this.removedKindHandler }
					addAll = { this.addAllHandler } />
				<CountStatistic todayTotal = { this.state.totalToday }/>	
			</Auxilliary>
		)
	}
}

export default CounterBuilder