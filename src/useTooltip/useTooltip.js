import { useState, useRef } from 'react'

import Tooltip from './Tooltip'
import configParser from './utils/configParser'
import coordinator from './utils/coordinator'
import vaultCheck from './utils/vault'

// Object for storing timeOut-IDs of different Tooltips
const timeoutIds = {}

function useTooltip(child) {
	const [tooltips, setTooltips] = useState({})

	// useRef is used to access current version of state inside setTooltips instead of closure-version.
	const tooltipsRef = useRef(tooltips)
	tooltipsRef.current = tooltips

	// Main function - universal event handler
	const tooltipEventHandler = event => {
		// Get unique for every target ID
		const targetID = vaultCheck(event.target)

		console.log(event.type, targetID)
		// Persist if event hover-based (possibility of using setTimeout)
		if (event.type === 'mouseenter') {
			event.persist()
		}

		// Function for closing Tooltips
		const close = e => {
			setTooltips(
				Object.fromEntries(
					Object.entries(tooltipsRef.current).filter(
						t => t[1].props.id !== e.target
					)
				)
			)
		}

		// Get value of tooltipConfig attribute and send it to helper function
		const configString = event.target.getAttribute('tooltipConfig')
		let config
		// console.log('tooltipConfig attribute is:', configString);
		try {
			config = configParser(configString)
			// console.log(config);
		} catch (e) {
			console.error(
				'Found conflicting property values: value',
				e.val1,
				'and value',
				e.val2,
				'of property',
				e.prop
			)
		}

		if (config.method === 'click') {
			// Check if clicked element is on the list of active targets.
			if (tooltips.AT.some(target => target === event.target)) {
				// If it is, remove this target and respective Tooltip.
				close(event)
				return
			}
		}

		if (event.type === 'mouseenter' && config.autoclose) {
			clearTimeout(timeoutIds[targetID])
		}

		if (event.type === 'mouseleave' && !config.autoclose) {
			close(event)
			return
		} else if (event.type === 'mouseleave' && config.autoclose) {
			event.persist()
			timeoutIds[targetID] = setTimeout(() => {
				close(event)
			}, config.delay * 1000)
			return
		}

		// Get position of clicked element and calculate position of a Tooltip based on config.position property.
		let [
			horizontalDirection,
			horizontalValue,
			verticalDirection,
			verticalValue,
		] = coordinator(event.target, config)

		// Generate new Tooltip.
		const tooltip = new Tooltip({
			child,
			position: config.position,
			horizontalDirection,
			horizontalValue,
			verticalDirection,
			verticalValue,
			timer: config.delay,
			// timerStatus,
			id: event.target,
			key: targetID,
			content: event.target.getAttribute('content'),
		})

		// Add new Tooltip and Active Target of that Tooltip to state.
		setTooltips({
			...tooltips,
			[targetID]: tooltip,
		})
	}

	// Array of all rendered Tooltips.
	const allTooltips = Object.values(tooltips).map(t => {
		return t.render()
	})

	console.log('END', tooltips)

	return [allTooltips, tooltipEventHandler]
}

export default useTooltip
