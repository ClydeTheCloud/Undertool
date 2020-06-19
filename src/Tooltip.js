import React from 'react';

class Tooltip extends React.Component {
	constructor(props) {
		super(props);
	}

	basicStyle = {
		width: 80,
		height: 30,
		backgroundColor: '#333333',
		position: 'absolute',
		left: this.props.tooltipLeft,
		right: this.props.tooltipTop,
	};

	render() {
		return <div style={this.basicStyle}>tooltip</div>;
	}
}

export default Tooltip;
