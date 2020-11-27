import React from 'react'

import './App.css'
import Introduction from './Components/Sections/Introduction'
import Content from './Components/Sections/Content'
import Configuration from './Components/Sections/Configuration'
import Arguments from './Components/Sections/Arguments'
import useSidebar from './Components/Sidebar'

function App() {
	const Sidebar = useSidebar()
	// TODO cool presentation (with tooltips, obviously)
	// TODO rename everything to useUndertool

	// ----------==========########## DONE ##########==========---------
	// fix arrows
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
			{Sidebar}
			<header>
				<h1>Undertool</h1>
			</header>
			<Introduction />
			<Content />
			<Configuration />
			<Arguments />
			<footer>
				<div>
					<p>
						Powered by <a href="https://popper.js.org/">Popper.js</a>.
					</p>
				</div>
				<div>
					<p>
						Made by <a href="https://clydethecloud.github.io/">Alexandr Diakov</a>. 2020
					</p>
				</div>
			</footer>
		</>
	)
}

export default App
