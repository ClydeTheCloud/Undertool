import React, { useState, useRef } from 'react'

import Tooltip from './Tooltip'
import configParser from './utils/configParser'
import vaultCheck from './utils/vault'

// Object for storing timeOut-IDs of different Tooltips, both for close-animation and rendering
const timeoutIds = { closedelay: {}, animation: {}, hover: {} }

function useTooltip({ children, defaultConfigString = 'top opendelay1 pop3' }) {
	const [tooltips, setTooltips] = useState({})

	// useRef is used for access to current version of state inside timers.
	const tooltipsRef = useRef(tooltips)
	tooltipsRef.current = tooltips

	// Main function - universal event handler
	const tooltipEventHandler = event => {
		// Get unique for every target ID
		const parentId = vaultCheck(event.currentTarget)

		if (tooltips[parentId] && event.type === 'mouseenter') {
			const tooltip = document.getElementById(`ttid-${parentId}`)
			if (tooltip.style.animationName.endsWith('-close')) {
				tooltip.style.animationName = tooltip.style.animationName.replace('-close', '')
			}
			clearTimeout(timeoutIds.animation[parentId])
			return
		}

		const eventTarget = event.target

		// Get value of tooltipConfig attribute and send it to helper function
		const configString = event.currentTarget.getAttribute('tooltipConfig')
		let config
		try {
			config = configParser(configString || defaultConfigString, event.type)
		} catch (e) {
			console.error('Something is wrong with your config')
			console.error('Target is:', eventTarget)
			console.error('Config is:', configString)
			console.error(e)
		}

		// if ((config.method === 'click' && event.type !== 'click') || (config.method === 'hover' && event.type === 'click')) {
		// 	throw new Error('Conflict between method of tooltip opening and event type')
		// }

		if (config.nested) {
			// return if event happened not on the element itself
			if (event.target !== event.currentTarget) {
				return
			}
		}

		if (event.type === 'click') {
			// Check if tooltip associated with targeted element is on the list of active tooltips
			if (Object.entries(tooltips).some(t => parseInt(t[0]) === parentId)) {
				// If it is, remove this target and respective Tooltip.
				close(eventTarget, config, parentId)
				return
			}
		}

		if (config.opendelay && event.type === 'mouseleave' && !tooltipsRef.current[parentId]) {
			clearTimeout(timeoutIds.hover[parentId])
			return
		}

		if (event.type === 'mouseenter' && config.closedelay) {
			clearTimeout(timeoutIds.closedelay[parentId])
		}

		if (event.type === 'mouseleave' && !config.closedelay) {
			close(eventTarget, config, parentId)
			return
		} else if (event.type === 'mouseleave' && config.closedelay && config.closedelayLength) {
			timeoutIds.closedelay[parentId] = setTimeout(() => {
				close(eventTarget, config, parentId)
			}, config.closedelayLength * 500)
			return
		}

		// Get position of clicked element and calculate position of a Tooltip based on config.position property.
		// let [horizontalDirection, horizontalValue, verticalDirection, verticalValue] = coordinator(
		// 	event.currentTarget,
		// 	config.position
		// )

		// get tooltipcontentid attribute to find required child
		const tooltipContentId = event.currentTarget.getAttribute('tooltipcontentid')

		const targetIndex = event.target.style.zIndex
		const tooltipIndex = targetIndex ? parseInt(targetIndex) + 2 : 3

		// console.log(targetIndex)
		// console.log(tooltipIndex)
		// console.log(config)

		// Generate new Tooltip.
		const tooltip = (
			<Tooltip
				child={tooltipContentId ? children[tooltipContentId] : null}
				position={config.position}
				id={event.currentTarget}
				key={parentId}
				parentId={parentId}
				tooltipTextContent={event.currentTarget.getAttribute('tooltipcontent')}
				zIndex={tooltipIndex}
				animation={config.animation || null}
				animationLength={config.animationLength}
				customClass={config.class}
				arrow={config.arrow}
				flip={config.flip}
			/>
		)

		// Set timeout to adding new Tooltip to state if method in config have length...
		if (config.opendelay && event.type === 'mouseenter') {
			timeoutIds.hover[parentId] = setTimeout(() => {
				setTooltips({
					...tooltipsRef.current,
					[parentId]: tooltip,
				})
			}, config.opendelayLength * 500)
			//... or Add new Tooltip right away.
		} else {
			setTooltips({
				...tooltipsRef.current,
				[parentId]: tooltip,
			})
		}
	}

	// Array of all rendered Tooltips.
	const allTooltips = Object.values(tooltips)

	// Function for closing Tooltips
	function close(eventTarget, config, key) {
		const tooltip = document.getElementById(`ttid-${key}`)
		if (config && config.animation && tooltip) {
			tooltip.style.animationName = config.animation.concat('-close')
			timeoutIds.animation[key] = setTimeout(
				() => {
					setTooltips(Object.fromEntries(Object.entries(tooltipsRef.current).filter(t => t[1].props.id !== eventTarget)))
				},
				config.animationLength ? config.animationLength * 100 : 200
			)
			return
		}
		setTooltips(Object.fromEntries(Object.entries(tooltipsRef.current).filter(t => t[1].props.id !== eventTarget)))
	}

	return [allTooltips, tooltipEventHandler]
}

export default useTooltip
