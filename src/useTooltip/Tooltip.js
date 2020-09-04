import React from 'react'

import TimerSvg from './utils/timer/TimerSvg'

class Tooltip extends React.Component {
	// constructor(props) {
	// 	super(props)
	// }

	// This function helps to center the Tooltip to element
	transformTranslateHelper(position) {
		if (position === 'top' || position === 'bottom') {
			return 'translateX(-50%)'
		} else if (position === 'left' || position === 'right') {
			return 'translateY(-50%)'
		}
	}

	arrowHelper(position) {
		if (position === 'top') {
			return {
				top: 'auto',
				bottom: -5,
				left: '50%',
				transform: 'translateX(-50%)',
				borderWidth: '5px 5px 0 5px',
				borderTopColor: '#333',
			}
		} else if (position === 'bottom') {
			return {
				top: 0,
				left: '50%',
				transform: 'translateX(-50%)',
				marginTop: -5,
				borderWidth: '0 5px 5px 5px',
				borderBottomColor: '#333',
			}
		} else if (position === 'left') {
			return {
				top: '50%',
				right: -5,
				left: 'auto',
				transform: 'translateY(-50%)',
				borderWidth: '5px 0 5px 5px',
				borderLeftColor: '#333',
			}
		} else if (position === 'right') {
			return {
				top: '50%',
				left: 0,
				transform: 'translateY(-50%)',
				marginLeft: -5,
				borderWidth: '5px 5px 5px 0',
				borderRightColor: '#333',
			}
		}
	}

	styles = {
		tooltipBody: {
			padding: 15,
			backgroundColor: '#333',
			position: 'absolute',
			[this.props.horizontalDirection]: this.props.horizontalValue,
			[this.props.verticalDirection]: this.props.verticalValue,
			transform: this.transformTranslateHelper(this.props.position),
			color: 'white',
			borderRadius: 5,
		},

		tooltipArrow: {
			position: 'absolute',
			width: 0,
			height: 0,
			borderColor: 'transparent',
			borderStyle: 'solid',
			...this.arrowHelper(this.props.position),
		},

		tooltipContent: {
			width: '100%',
			height: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
	}

	setTimer() {
		if (this.props.timer) {
			return TimerSvg(this.props.timer, this.props.timerStatus)
		}
	}

	render() {
		return (
			<div style={this.styles.tooltipBody} key={this.props.key}>
				<div style={this.styles.tooltipContent}>
					{this.props.child || this.props.content}
					{this.setTimer()}
				</div>
				<div style={this.styles.tooltipArrow}></div>
			</div>
		)
	}
}

export default Tooltip
