import { useState, useRef } from 'react';

import Tooltip from './Tooltip';
import configParser from './utils/configParser';
import coordinator from './utils/coordinator';

function useTooltip(child) {
	const [tooltips, setTooltips] = useState({ TT: [], AT: [] }); // TT = array of all Tooltips; AT = array of Active Targets (on which Tooltips are called).
	const [tooltipKey, setTooltipKey] = useState(0);

	// useRef is used to access current version of state inside setTimeout instead of closure-version.
	const tooltipsRef = useRef(tooltips);
	tooltipsRef.current = tooltips;

	// Generate key for React.
	const genId = () => {
		setTooltipKey(tooltipKey + 1);
		return tooltipKey;
	};

	// Main function - universal event handler
	const tooltipEventHandler = (event) => {
		// Persist if event hover-based (possibility of using setTimeout)
		if (event.type === 'mouseenter') {
			event.persist();
		}

		// Function for closing Tooltips
		const close = (e) => {
			setTooltips({
				TT: tooltipsRef.current.TT.filter((TT) => TT.props.id !== e.target),
				AT: tooltipsRef.current.AT.filter((AT) => AT !== e.target),
			});
		};

		// Get value of tooltipConfig attribute and send it to helper function
		const configString = event.target.getAttribute('tooltipConfig');
		let config;
		// console.log('tooltipConfig attribute is:', configString);
		try {
			config = configParser(configString);
			// console.log(config);
		} catch (e) {
			console.error('Found conflicting property values: value', e.val1, 'and value', e.val2, 'of property', e.prop);
		}

		if (config.method === 'click') {
			// Check if clicked element is on the list of active targets.
			if (tooltips.AT.some((target) => target === event.target)) {
				// If it is, remove this target and respective Tooltip.
				close(event);
				return;
			}
		}

		if (event.type === 'mouseleave' && !config.autoclose) {
			close(event);
			return;
		} else if (event.type === 'mouseleave' && config.autoclose) {
			event.persist();
			setTimeout(() => {
				close(event);
			}, config.delay * 1000);
			return;
		}

		// Get position of clicked element and calculate position of a Tooltip based on config.position property.
		let [horizontalDirection, horizontalValue, verticalDirection, verticalValue] = coordinator(event.target, config);

		// Generate new Tooltip.
		const tooltip = new Tooltip({
			child,
			position: config.position,
			horizontalDirection,
			horizontalValue,
			verticalDirection,
			verticalValue,
			// timer: config.delay,
			// timerStatus,
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

	return [allTooltips, tooltipEventHandler];
}

export default useTooltip;
