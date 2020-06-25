import React from 'react';

class Tooltip extends React.Component {
	constructor(props) {
		super(props);
		// this.key = this.props.key;
		// this.content = this.props.content;
	}

	tooltipBody = {
		padding: 15,
		backgroundColor: '#333',
		position: 'absolute',
		[this.props.horizontalDirection]: this.props.horizontalValue,
		[this.props.verticalDirection]: this.props.verticalValue,
		transform: 'translateX(-50%)',
		color: 'white',
		borderRadius: 5,
	};

	tooltipArrow = {
		marginTop: -5,
		position: 'absolute',
		width: 0,
		height: 0,
		borderColor: 'transparent',
		borderRightColor: 'transparent',
		borderStyle: 'solid',
		top: 'auto',
		bottom: -5,
		left: '50%',
		marginLeft: -5,
		borderWidth: '5px 5px 0',
		borderTopColor: '#333',
	};

	tooltipContent = {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	};

	render() {
		return (
			<div style={this.tooltipBody} key={this.props.key}>
				<div style={this.tooltipContent}>{this.props.content}</div>
				<div style={this.tooltipArrow}></div>
			</div>
		);
	}
}

export default Tooltip;
