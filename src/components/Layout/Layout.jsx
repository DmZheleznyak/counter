import React, { Component } from 'react'

import Auxilliary from '../../containers/hoc/Auxilliary'
import classes from './Layout.css'

class Layout extends Component {
	render () {
		return (
			<Auxilliary>
				<div className = { classes.AllContent }>
					<div className = { classes.Header }>Logo ... Header ... Header ... Header ... Counter ...</div>
					<main className = { classes.Content }>
						{ this.props.children }
					</main>
				</div>
			</Auxilliary>
		)
	}
}

export default Layout