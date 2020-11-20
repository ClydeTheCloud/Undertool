import React from 'react'
import useTooltip from '../../useTooltip/useTooltip'
import { Prism as Highlight } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'

const introCode = `
function Example() {
	const [tooltips, handler] = useTooltip({})

	return (
		<div>
			<div className="box one" onClick={handler} data-tooltip-content="Put your text here"></div>
			{tooltips}
		</div>
	)
}
`

function Intro({ handler }) {
	return (
		<>
			<h3 className="row-header click">Introduction</h3>
			{/* <div className="code click">CODE FOR CLICK GOES HERE</div> */}
			<div className="intro-wrapper">
				<p>Undertool is multi-tooltip instrument.</p>
				<p>Easy to use.</p>
				<Highlight language="javascript" style={materialOceanic}>
					const [tooltips, handler] = useTooltip({})
				</Highlight>
				<p>Put tooltips anywhere on in your component and it will render all tooltips.</p>
				<p>Use universal handler to manage click and hover events.</p>
				<p>Undertool works out of the box with minimal configuration.</p>
				<p>
					Undertool has an fall-back config, so if you're lazy like me, you can just throw handler and data-tooltip-content
					and call it a day!
				</p>

				<Highlight language="javascript" style={materialOceanic}>
					{introCode}
				</Highlight>

				<p>Here how it looks on page, click on a square below to open tooltip.</p>
				<div className="box-wrapper">
					<Example />
				</div>

				<p>However, if you want to finetune behavior and appearance, you can provide data-tooltip-config attribute:</p>
			</div>
		</>
	)
}

export default Intro

function Example() {
	const [tooltips, handler] = useTooltip({})

	return (
		<div>
			<div className="box four" onClick={handler} data-tooltip-content="Put your text here"></div>
			{tooltips}
		</div>
	)
}
