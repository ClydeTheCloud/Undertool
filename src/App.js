import React, { useEffect, useRef } from 'react'

import useTooltip from './useTooltip/useTooltip'
import './App.css'
import Click from './Components/Sections/Click'
import Test from './Components/InnerComponent'
import Hover from './Components/Sections/Hover'
import Scroll from './Components/Sections/Scroll'

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
		scrollRef.current = document.querySelector('.scroller-outer')
	}, [])

	// TODO cool presentation (with tooltips, obviously)
	// TODO nesting logic
	// TODO Single-tooltip-at-a-time option (out of all tooltips or out of specific set)
	// TODO autoclose on mouseleave event
	// TODO click on empty space to close a tooltip(uncaptured click event?)
	// TODO fix bubbling and capturing
	// TODO explicit no-animation option (and other options lika that)
	// TODO refactor attributes into data-properties

	// ----------==========########## DONE ##########==========---------
	// fixed/relative logic
	// clipping boundary (set by user)
	// animation prop in config (refactor to be like delay prop(array of animation name and animation length))
	// ???rewrite configParser??? (maybe...) // made some subtle changes
	// merge opendelay and closedelay (maybe like this: delay:0-3)
	// default options (no 'min-config' bullshit)
	// add all missing positioning options
	// flip option
	// different arrows

	// ----------==========########## NOTES for presentation ##########==========---------
	// Do not use % in border-radius of a custom tooltip class
	// useRef and useEffect for a toolip clip-path

	return (
		<>
			{tooltips}
			<header>
				<h1>dke's TOOLTIP</h1>
			</header>

			<div className="grid">
				<Click handler={handler} />

				<Hover handler={handler} />

				<Scroll handler={handler} />
			</div>
		</>
	)
}

export default App
