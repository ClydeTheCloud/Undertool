import React from 'react'
import useTooltip from './useTooltip/useTooltip'
import './App.css'

function Test() {
	const styleDiv = {
		minWidth: 50,
		maxWidth: 100,
		minHeight: 50,
		backgroundColor: '#9922ee',
		display: 'flex',
		alignItems: 'center',
		padding: 10,
	}

	return <div style={styleDiv}>This is a hover tooltip with component</div>
}

function App() {
	const [tooltips, handler] = useTooltip()
	const [tooltipWithChild, handlerChild] = useTooltip(<Test />)

	return (
		<div className="wrapper">
			<div
				className="box one"
				tooltipconfig="left hover autoclose 3"
				content="This is a click-tooltip from the left"
				onMouseEnter={handler}
				onMouseLeave={handler}
			></div>
			<div
				className="box two"
				tooltipconfig="top hover autoclose 3"
				content="This is a hover-tooltip from the top"
				onMouseEnter={handler}
				onMouseLeave={handler}
			></div>
			<div
				className="box three"
				tooltipconfig="bottom hover autoclose 3"
				// content={'This is a hover-tooltip withChild'}
				onMouseEnter={handlerChild}
				onMouseLeave={handlerChild}
			></div>
			<div
				className="box four"
				tooltipconfig="right hover autoclose 3"
				content="This is a click-tooltip from the right"
				onMouseEnter={handler}
				onMouseLeave={handler}
			></div>
			{tooltips}
			{tooltipWithChild}
		</div>
	)
}

export default App
