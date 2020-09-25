import React from 'react'

import useTooltip from './useTooltip/useTooltip'
import './App.css'

function Test(props) {
	return <div className="component">{props.text}</div>
}

function App() {
	const [tooltips, handler] = useTooltip({
		children: {
			thirdBox: <Test text="This is a click-tooltip with component" />,
			seventhBox: <Test text="This is a hover-tooltip with component" />,
		},
	})

	// TODO merge opendelay and closedelay (maybe like this: delay:0-3)
	// TODO cool presentation (with tooltips, obviously)
	// TODO nesting logic
	// TODO fixed/relative logic

	// ----------==========########## DONE ##########==========---------
	// default options (no 'min-config' bullshit)
	// add all missing positioning options
	// flip option
	// different arrows

	// ----------==========########## NOTES for presentation ##########==========---------
	// Do not use % in border-radius of a custom tooltip class

	return (
		<>
			{tooltips}
			<header>
				<h1>dke's TOOLTIP</h1>
			</header>

			<div className="grid">
				<h3 className="row-header click">Click tooltips</h3>
				<div className="code click">CODE FOR CLICK GOES HERE</div>
				<div className="wrapper click">
					<div
						className="box one"
						tooltipconfig="left slide class:test-class"
						tooltipcontent="This is a click-tooltip from the left"
						onClick={handler}
					></div>
					<div
						className="box two"
						tooltipconfig="top slide"
						tooltipcontent="This is a click-tooltip from the top"
						onClick={handler}
					></div>
					<div
						className="box three center"
						tooltipconfig="bottom nested slide"
						tooltipcontentid="thirdBox"
						// tooltipcontent={'This is a hover-tooltip withChild'}
						onClick={handler}
					>
						<div className="test-box center">Click not working here</div>
					</div>
					<div
						className="box four"
						tooltipconfig="right slide6 flip:on"
						tooltipcontent="This is a click-tooltip from the right"
						onClick={handler}
					></div>
				</div>
				<h3 className="row-header hover">Hover tooltips</h3>
				<div className="code hover">CODE FOR HOVER GOES HERE</div>
				<div className="wrapper hover">
					<div
						className="box one"
						// tooltipconfig="left opendelay2 closedelay3 scale1"
						tooltipcontent="This is a hover-tooltip from the left"
						onMouseEnter={handler}
						onMouseLeave={handler}
					></div>
					<div
						className="box two"
						tooltipconfig="top opendelay2 closedelay3 slide3"
						tooltipcontent="This is a hover-tooltip from the top"
						onMouseEnter={handler}
						onMouseLeave={handler}
					></div>
					<div
						className="box three center"
						tooltipconfig="bottom opendelay2 slide6"
						tooltipcontentid="seventhBox"
						onMouseEnter={handler}
						onMouseLeave={handler}
					>
						<div className="test-box center">HELLO</div>
					</div>
					<div
						className="box four"
						tooltipconfig="right opendelay2 slide10"
						tooltipcontent="This is a hover-tooltip from the right"
						onMouseEnter={handler}
						onMouseLeave={handler}
					></div>
				</div>
			</div>
		</>
	)
}

export default App
