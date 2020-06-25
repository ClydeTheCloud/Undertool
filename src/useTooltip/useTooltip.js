import { useState } from 'react';

import configParser from './utils/configParser';
import Tooltip from './Tooltip';
import coordinator from './utils/coordinator';

function useTooltip() {
	const [tooltips, setTooltips] = useState({ TT: [], AT: [] }); // TT = array of all Tooltips; AT = array of Active Targets (on which Tooltips are called).
	const [tooltipKey, setTooltipKey] = useState(0);

	// Generate key for React
	const genId = () => {
		setTooltipKey(tooltipKey + 1);
		return tooltipKey;
	};

	// Function for closing tooltip. If tooltip method is 'click', it runs on a second click on target, if method is 'hover', it runs on a onMouseLeave event
	const handleClose = (event) => {
		setTooltips({
			TT: tooltips.TT.filter((TT) => TT.props.id !== event.target),
			AT: tooltips.AT.filter((AT) => AT !== event.target),
		});
	};

	const tooltipClickHandler = (event) => {
		// Get value of tooltipConfig attribute and send it helper function
		const configString = event.target.getAttribute('tooltipConfig');
		let config;
		console.log('config attribute is:', configString);
		try {
			config = configParser(configString);
			console.log(config);
		} catch (e) {
			console.error('Found conflicting property values: value', e.val1, 'and value', e.val2, 'of property', e.prop);
		}

		if (config.method === 'click') {
			// Check if clicked element is on the list of active targets.
			if (tooltips.AT.some((target) => target === event.target)) {
				// If it is, remove this target and respective Tooltip.
				handleClose(event);
				return;
			}
		}

		// Get position of clicked element and calculate position of a Tooltip based on config.position property.
		let [horizontalDirection, horizontalValue, verticalDirection, verticalValue] = coordinator(event.target, config);

		// Generate new Tooltip.
		const tooltip = new Tooltip({
			position: config.position,
			horizontalDirection,
			horizontalValue,
			verticalDirection,
			verticalValue,
			id: event.target,
			key: genId(),
			content: event.target.getAttribute('content'),
		});

		// Add new Tooltip and Active Target of that Tooltip to state.
		setTooltips({
			TT: [...tooltips.TT, tooltip],
			AT: [...tooltips.AT, event.target],
		});
	};

	// Array of all rendered Tooltips.
	const allTooltips = tooltips.TT.map((TT) => {
		return TT.render();
	});

	return [allTooltips, tooltipClickHandler, handleClose];
}

export default useTooltip;
