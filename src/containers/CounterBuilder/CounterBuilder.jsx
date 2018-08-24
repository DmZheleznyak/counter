import React, { Component } from 'react'

import Auxilliary from '../hoc/Auxilliary'
import CountControls from '../../components/CountControls/CountControls'
import Modal from '../../components/UI/Modal/Modal'
import TotalSum from '../../components/CountControls/TotalSum/TotalSum'
import CountStatistic from '../../components/CountStatistic/CountStatistic'
import WeekStatistic from '../../components/CountStatistic/AllTimeStatistic/WeekStatistic/WeekStatistic'

import glassOfWater from '../../assets/logos/glassOfWater.svg'
import cupOfCoffee from '../../assets/logos/coffee.svg'
import cupOfTea from '../../assets/logos/tea.svg'
import glassOfJuice from '../../assets/logos/orangeJuice.svg'
import glassOfMilk from '../../assets/logos/milk.svg'


class CounterBuilder extends Component {
	state = {
		kinds : [
			{
				name: 'water',
				quantity: 0,
				volume: 0.25,
				text: '(250 ml)',
				icon: glassOfWater,
				date: new Date().getTime(),
				color: '#4193C5'  
			},
			{
				name: 'coffee',
				quantity: 0,
				volume: 0.15,
				text: '(150 ml)',
				icon: cupOfCoffee,
				date: new Date().getTime(),
				color: '#865021'
			},
			{
				name: 'tea',
				quantity: 0,
				volume: 0.25,
				text: '(250 ml)',
				icon: cupOfTea,
				date: new Date().getTime(),
				color: '#E91801'
			},
			{
				name: 'juice',
				quantity: 0,
				volume: 0.2,
				text: '(200 ml)',
				icon: glassOfJuice,
				date: new Date().getTime(),
				color: '#FCC200'
			},
			{
				name: 'milk',
				quantity: 0,
				volume: 0.1,
				text: '(100 ml)',
				icon: glassOfMilk,
				date: new Date().getTime(),
				color: 'white'
			}
		],
		purchasing: false,
		purchasingWeekStatistic: false,
		today: [],
		totalToday: 0,
		lastWeek: [] 
	}

	// componentWillMount() {
	// 	console.log(this.state.today)
	// }

	todayStatistic = () => {
		const today = this.currentDate()
		let localToday = []

		Object										// Данные за текущий день
			.keys(localStorage)
			.map( day => {	if (today === day) return localToday = JSON.parse(localStorage[day])	} )
		
		return localToday
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
	purchaseWeekStatisticHandler = () => this.setState({ purchasingWeekStatistic: true })
	purchaseWeekStatisticCancelHandler = () => this.setState({ purchasingWeekStatistic: false })

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

		if (this.todayStatistic() === [] ) {
			const updatedKinds = [ ...this.state.kinds ]
			let value = JSON.stringify(updatedKinds)
			localStorage[this.currentDate()] = value			
		} else {
			const updatedKinds = [ ...this.state.kinds ]
			
		}

		// const updatedKinds = [ ...this.state.kinds ]

		// const currentQuantityToday = updatedKinds.map(kind => kind.quantity )

		

		// let value = JSON.stringify(updatedKinds)
		// localStorage[this.currentDate()] = value

		this.purchaseCancelHandler()
	}

	// weekStatisticHandler = () => {
	// 	const date = new Date().getTime()
	// 	const arrayOfLocalFromState = []

	// 	for (let i = 1; i <= 8 ; i++) {
	// 		let days = new Date(date - (86400000 * i)).getDate()
			
	// 		Object
	// 			.keys(localStorage)
	// 			.map(key => {
	// 				let localDay = +key.split('',1)[0]
	// 				if (days === localDay) {
	// 					arrayOfLocalFromState.push(JSON.parse(localStorage[key]))
	// 				}
	// 			})
	// 	}

	// 	const dataLastWeek = arrayOfLocalFromState.reverse()
	// 	this.setState({lastWeek: dataLastWeek })
		
	// 	this.purchaseWeekStatisticHandler()
	// }

	render () {
		return (
			<Auxilliary>
				<Modal show = { this.state.purchasing }
							 clicked = { this.purchaseCancelHandler }	>
					<TotalSum 
						show = { this.state.purchasingTotalSum }
						kinds = { this.state.kinds }
						total = { this.state.totalToday }
						close = { this.purchaseCancelHandler }
						added = { this.addToLocalStorageHandler }	/>				
				</Modal>
				<Modal show = { this.state.purchasingWeekStatistic }
							 clicked = { this.purchaseWeekStatisticCancelHandler }	>
					<WeekStatistic 
						listDays = { this.state.lastWeek }
						closed = { this.purchaseWeekStatisticCancelHandler }/>
				</Modal>
				<CountControls 
					kinds = { this.state.kinds }
					added = { this.addKindHandler }
					removed = { this.removedKindHandler }
					addAll = { this.addAllHandler } />
				<CountStatistic 
					todayTotal = { this.state.totalToday }
					showWeekStatistic = { this.weekStatisticHandler }
					chartData = { this.todayStatistic }	/>	
			</Auxilliary>
		)
	}
}

export default CounterBuilder