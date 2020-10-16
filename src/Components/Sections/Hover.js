import React from 'react'

function Hover({ handler }) {
	return (
		<>
			<h3 className="row-header hover">Hover tooltips</h3>
			<div className="code hover">CODE FOR HOVER GOES HERE</div>
			<div className="wrapper hover">
				<div
					className="box one"
					// tooltipconfig="left delay2-3 scale7"
					tooltipcontent="This is a hover-tooltip from the left"
					onMouseEnter={handler}
					onMouseLeave={handler}
				></div>
				<div
					className="box two"
					tooltipconfig="top delay0-3 slide3"
					tooltipcontent="This is a hover-tooltip from the top"
					onMouseEnter={handler}
					onMouseLeave={handler}
				></div>
				<div
					className="box three center"
					tooltipconfig="bottom delay2 slide6"
					tooltipcontentid="seventhBox"
					onMouseEnter={handler}
					onMouseLeave={handler}
				>
					<div className="test-box center">HELLO</div>
				</div>
				<div
					className="box four"
					tooltipconfig="right slide10"
					tooltipcontent="This is a hover-tooltip from the right"
					onMouseEnter={handler}
					onMouseLeave={handler}
				></div>
			</div>
		</>
	)
}

export default Hover
