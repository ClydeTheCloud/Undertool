import React from 'react'

function Hover({ handler }) {
	return (
		<>
			<h3 className="row-header hover">Hover tooltips</h3>
			<div className="code scroll">CODE FOR HOVER GOES HERE</div>
			<div className="wrapper scroll">
				<div className="scroller-outer">
					<div className="scroller-inner">
						<div
							className="box one"
							tooltipcontent="This section is about scroll"
							tooltipcontentid="scrollBox"
							onClick={handler}
						></div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Hover
