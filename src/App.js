import React from 'react'
import useTooltip from './useTooltip/useTooltip'
import './App.css'

function Test(props) {
	return <div className="component">{props.text}</div>
}

function App() {
	const [tooltips, handler] = useTooltip({
		thirdBox: <Test text="This is a click-tooltip with component" />,
		seventhBox: <Test text="This is a hover-tooltip with component" />,
	})

	// TODO cool presentation (with tooltips, obviously)

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
						tooltipconfig="left click fade"
						tooltipcontent="This is a click-tooltip from the left"
						onClick={handler}
					></div>
					<div
						className="box two"
						tooltipconfig="top click slide"
						tooltipcontent="This is a click-tooltip from the top"
						onClick={handler}
					></div>
					<div
						className="box three center"
						tooltipconfig="bottom click nested pop"
						tooltipcontentid="thirdBox"
						// tooltipcontent={'This is a hover-tooltip withChild'}
						onClick={handler}
					>
						<div className="test-box center">Click not working here</div>
					</div>
					<div
						className="box four"
						tooltipconfig="right click scale"
						tooltipcontent="This is a click-tooltip from the right"
						onClick={handler}
					></div>
				</div>
				<h3 className="row-header hover">Hover tooltips</h3>
				<div className="code hover">CODE FOR HOVER GOES HERE</div>
				<div className="wrapper hover">
					<div
						className="box one"
						tooltipconfig="left hover2 closedelay3 scale2"
						tooltipcontent="This is a hover-tooltip from the left"
						onMouseEnter={handler}
						onMouseLeave={handler}
					></div>
					<div
						className="box two"
						tooltipconfig="top hover2 closedelay3 slide1"
						tooltipcontent="This is a hover-tooltip from the top"
						onMouseEnter={handler}
						onMouseLeave={handler}
					></div>
					<div
						className="box three center"
						tooltipconfig="bottom hover2 slide1"
						tooltipcontentid="seventhBox"
						onMouseEnter={handler}
						onMouseLeave={handler}
					>
						<div className="test-box center">HELLO</div>
					</div>
					<div
						className="box four"
						tooltipconfig="right hover2 slide10"
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
