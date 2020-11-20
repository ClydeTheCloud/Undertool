import React from 'react'

function Click({ handler }) {
	return (
		<>
			<h3 className="row-header click">Click tooltips</h3>
			<div className="code click">CODE FOR CLICK GOES HERE</div>
			<div className="wrapper click">
				<div
					className="box one"
					data-tooltip-config="left slide class:test-class delay1-2"
					data-tooltip-content="This is a click-tooltip from the left"
					onClick={handler}
				></div>
				<div
					className="box two"
					data-tooltip-config="top slide delay4"
					data-tooltip-content="This is a click-tooltip from the top"
					onClick={handler}
				></div>
				<div
					className="box three center"
					data-tooltip-config="bottom slide"
					data-tooltip-content-id="thirdBox"
					// data-tooltip-content={'This is a hover-tooltip withChild'}
					onClick={handler}
				>
					<div className="test-box center">Click not working here</div>
				</div>
				<div
					className="box four"
					data-tooltip-config="right slide6 flip:on maxw:150px"
					data-tooltip-content="This is a click-tooltip from the right"
					onClick={handler}
				></div>
			</div>
		</>
	)
}

export default Click
