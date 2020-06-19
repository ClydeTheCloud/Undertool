import React, { useState } from 'react';

class Tooltip extends React.Component {
	constructor(props) {
		super(props);
		this.key = props.key;
	}

	basicStyle = {
		width: 80,
		height: 30,
		backgroundColor: '#333333',
		position: 'absolute',
		left: this.props.tooltipLeft,
		top: this.props.tooltipTop,
		transform: 'translateX(-50%)',
		color: 'white',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	};

	render() {
		return (
			<div style={this.basicStyle} key={this.key}>
				tooltip
			</div>
		);
	}
}

function useTooltip() {
	const [tooltips, setTooltips] = useState({ tt: [], at: [] });
	const [tooltipKey, setTooltipKey] = useState(0);

	const genId = () => {
		setTooltipKey(tooltipKey + 1);
		return tooltipKey;
	};

	const tooltipClickHandler = (event) => {
		if (tooltips.at.some((target) => target === event.target)) {
			setTooltips({ tt: tooltips.tt.filter((tt) => tt.props.id !== event.target), at: tooltips.at.filter((at) => at !== event.target) });
			return;
		}
		const pos = event.target.getBoundingClientRect();
		const tooltipLeft = pos.left + pos.width / 2;
		const tooltipTop = pos.top - 50;

		const activeTarget = event.target;
		const tooltip = new Tooltip({ tooltipLeft, tooltipTop, id: event.target, key: genId() });

		setTooltips({ tt: [...tooltips.tt, tooltip], at: [...tooltips.at, activeTarget] });
	};

	const allTooltips = tooltips.tt.map((tt) => {
		return tt.render();
	});

	return [tooltipClickHandler, allTooltips];
}

export default useTooltip;
