 import React from 'react'

function Click({handler}) {
	return(<>
		<h3 className="row-header click">Click tooltips</h3>
		<div className="code click">CODE FOR CLICK GOES HERE</div>
		<div className="wrapper click">
			<div
				className="box one"
				tooltipconfig="left slide class:test-class delay1-2"
				tooltipcontent="This is a click-tooltip from the left"
				onClick={handler}
			></div>
			<div
				className="box two"
				tooltipconfig="top slide delay4"
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
	</>)
}

export default Click