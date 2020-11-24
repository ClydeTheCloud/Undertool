import React, { useEffect, useRef } from 'react'

import useTooltip from './useTooltip/useTooltip'
import './App.css'
import Click from './Components/Sections/Click'
import Test from './Components/InnerComponent'
import Hover from './Components/Sections/Hover'
import Scroll from './Components/Sections/Scroll'
import Introduction from './Components/Sections_new/Introduction'
import Content from './Components/Sections_new/Content'
import Configuration from './Components/Sections_new/Configuration'

function App() {
	const scrollRef = useRef()
	const [tooltips, handler] = useTooltip({
		children: {
			thirdBox: <Test text="This is a click-tooltip with component" />,
			seventhBox: <Test text="This is a hover-tooltip with component" />,
		},
		clipPaths: {
			scrollBox: scrollRef,
		},
	})

	useEffect(() => {
		// scrollRef.current = document.querySelector('.scroller-outer')
		// document.querySelector('.scroller-inner > .box').click()
	}, [])

	// TODO cool presentation (with tooltips, obviously)
	// TODO fix arrows
	// TODO autoclose on mouseleave event (from tooltip itself, not anchor element)

	// ----------==========########## DONE ##########==========---------
	// explicit no-animation option (and other options like that)
	// ability to merge common and specific configs instead of overwriting
	// Single-tooltip-at-a-time option (out of all tooltips or out of specific set) || single-tooltip option
	// refactor attributes into data-properties
	// fix bubbling and capturing
	// nesting logic(removed it, made it the other way)
	// fixed/relative logic
	// clipping boundary (set by user)
	// animation prop in config (refactor to be like delay prop(array of animation name and animation length))
	// ???rewrite configParser??? (maybe...) // made some subtle changes
	// merge opendelay and closedelay (maybe like this: delay:0-3)
	// default options (no 'min-config' bullshit)
	// add all missing positioning options
	// flip option
	// different arrows

	// ----------==========########## CAN'T DO ##########==========---------
	// click on empty space to close a tooltip(uncaptured click event?) || option to click on empty space to close tooltip

	// ----------==========########## NOTES for presentation ##########==========---------
	// Do not use % in border-radius of a custom tooltip class
	// useRef and useEffect for a toolip clip-path

	return (
		<>
			{tooltips}
			<header>
				<h1>Undertool</h1>
			</header>

			<Introduction />
			<Content />
			<Configuration />
		</>
	)
}

export default App
