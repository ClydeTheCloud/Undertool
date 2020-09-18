import React from 'react'
import { createPopper } from '@popperjs/core'

// import TimerSvg from './utils/timer/TimerSvg'

class Tooltip extends React.Component {
	constructor(props) {
		super(props)
		this.tooltipRef = React.createRef()
		this.id = `ttid-${this.props.parentId}`
		this.arrowId = `ttid-${this.props.parentId}-arrow`
	}

	styles = {
		tooltipBody: {
			position: 'relative',
			zIndex: this.props.index,
		},

		tooltipWrapper: {
			animationName: this.props.animation,

			animationDuration: this.props.animationLength ? `${this.props.animationLength * 0.1}s` : '0.2s',
			animationFillMode: 'forwards',
		},

		tooltipArrow: {
			// position: 'absolute',
			// width: 8,
			// height: 8,
			// zIndex: this.props.index - 2,
			// borderColor: 'red',
			// borderStyle: 'solid',
			// ...this.newArrowHelper(this.props.position),
			// transform: 'rotate(45deg)',
		},

		tooltipContent: {
			width: '100%',
			height: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
	}

	componentDidMount() {
		createPopper(this.props.id, this.tooltipRef.current, {
			placement: this.props.position,
			modifiers: [{ name: 'offset', options: { offset: [0, 20] } }],
		})
	}

	render() {
		return (
			<div ref={this.tooltipRef} className={'tooltip-helper-class'}>
				<div style={this.styles.tooltipWrapper} id={this.id}>
					<div
						style={this.styles.tooltipBody}
						className={`${this.props.class || 'tooltip-default-style'} `}
						key={this.props.parentId}
					>
						<div style={this.styles.tooltipContent}>
							{this.props.child || this.props.tooltipcontent}
							{/* {this.setTimer()} */}
						</div>
					</div>
					<div style={this.styles.tooltipArrow} className="tooltip-arrow" data-popper-arrow></div>
				</div>
			</div>
		)
	}
}

export default Tooltip
