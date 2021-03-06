import React from 'react'

import classes from './Modal.css'
import Auxilliary from '../../../containers/hoc/Auxilliary'
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => (
	<Auxilliary>
		<Backdrop 
			show = { props.show }
		 	clicked = { props.clicked }	/>
		<div 
			className = { classes.Modal }
			style = {{ transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
								 opacity: props.show ? '1' : '0'	}}	>
			
			{ props.children }
			
		</div>	
	</Auxilliary>
)

export default modal