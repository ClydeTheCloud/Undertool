import React from 'react'
import useTooltip from '../useTooltip/useTooltip'

export function Example() {
	const [tooltips, handler] = useTooltip({})

	return (
		<div>
			<div className="box four" onClick={handler} data-tooltip-content="Put your text here"></div>
			{tooltips}
		</div>
	)
}

export const exampleCode = `function Example() {
	const [tooltips, handler] = useTooltip({})

	return (
		<div>
			<div className="box one" onClick={handler} data-tooltip-content="Put your text here"></div>
			{tooltips}
		</div>
	)
}`

export function FineTune() {
	const [tooltips, handler] = useTooltip({})

	return (
		<div>
			<div
				className="box one"
				onClick={handler}
				data-tooltip-content="Put your text here"
				data-tooltip-config="bottom-end fade6 arrow:md magnet:on maxw:150px class:fancy-tooltip-class"
			></div>
			{tooltips}
		</div>
	)
}

export const finetuneCode = `function FineTune() {
	const [tooltips, handler] = useTooltip({})

	return (
		<div>
			<div
				className="box one"
				onClick={handler}
				data-tooltip-content="Put your text here"
				data-tooltip-config="bottom-end fade6 arrow:md magnet:on maxw:150px class:fancy-tooltip-class"
			></div>
			{tooltips}
		</div>
	)
}`

export function CloseAll() {
	const [tooltips, handler, closeAll] = useTooltip({})
	const [anotherTooltips, anotherHandler] = useTooltip({}) //another instance

	return (
		<div style={{ margin: '0 auto' }}>
			<div>
				<div
					className="box one"
					onClick={handler}
					data-tooltip-content="This tooltip is from first instance"
					data-tooltip-config="top scale maxw:150px"
				></div>
				<div
					className="box two"
					onClick={handler}
					data-tooltip-content="This tooltip is also from first instance"
					data-tooltip-config="top pop maxw:150px"
				></div>
				<div
					className="box three"
					onClick={anotherHandler}
					data-tooltip-content="This tooltip is separate from others"
					data-tooltip-config="top slide maxw:150px"
				></div>
			</div>
			<div className="flex-center">
				<button className="close-some" onClick={() => closeAll(false)}>
					Close tooltips from first instance
				</button>
				<button className="close-all" onClick={() => closeAll(true)}>
					Close all tooltips
				</button>
			</div>
			{tooltips}
			{anotherTooltips}
		</div>
	)
}

export const closeAllCode = `function CloseAll() {
	const [tooltips, handler, closeAll] = useTooltip({})
	const [anotherTooltips, anotherHandler] = useTooltip({}) //another instance

	return (
		<div>
			<div>
				<div
					className="box one"
					onClick={handler}
					data-tooltip-content="This tooltip is from first instance"
					data-tooltip-config="top scale maxw:150px"
				></div>
				<div
					className="box two"
					onClick={handler}
					data-tooltip-content="This tooltip is also from first instance"
					data-tooltip-config="top pop maxw:150px"
				></div>
				<div
					className="box three"
					onClick={anotherHandler}
					data-tooltip-content="This tooltip is separate from others"
					data-tooltip-config="top slide maxw:150px"
				></div>
			</div>
			<div>
				<button className="close-some" onClick={() => closeAll(false)}>
					Close tooltips from first instance
				</button>
				<button className="close-all" onClick={() => closeAll(true)}>
					Close all tooltips
				</button>
			</div>
			{tooltips}
			{anotherTooltips}
		</div>
	)
}`

export function DataStringContent() {
	const [tooltips, handler] = useTooltip({})
	return (
		<div>
			<div className="box three" onClick={handler} data-tooltip-content="This is easy"></div>
			{tooltips}
		</div>
	)
}

export const dataStringContentCode = `function DataStringContent() {
	const [tooltips, handler] = useTooltip({})
	return (
		<div>
			<div className="box three" onClick={handler} data-tooltip-content="This is easy"></div>
			{tooltips}
		</div>
	)
}
`

export function ArgumentChildrenContent() {
	function InnerComponent() {
		return (
			<p style={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold', padding: '.5em' }}>Or even another component!</p>
		)
	}

	const [tooltips, handler] = useTooltip({
		children: {
			uniqueIdOne: 'This can be a string',
			uniqueIdTwo: <InnerComponent />,
		},
	})
	return (
		<div className="flex-center w100">
			<div className="box one" onClick={handler} data-tooltip-content-id="uniqueIdOne"></div>
			<div className="box two" onClick={handler} data-tooltip-content-id="uniqueIdTwo"></div>
			{tooltips}
		</div>
	)
}

export const argumentChildrenContentCode = `function ArgumentChildrenContent() {
	function InnerComponent() {
		return (<p style={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold' }}>
			Or even another component!
		</p>)
	}

	const [tooltips, handler] = useTooltip({
		children: {
			uniqueIdOne: 'This can be a string',
			uniqueIdTwo: <InnerComponent />,
		},
	})
	return (
		<div className="flex-center">
			<div className="box one" onClick={handler} data-tooltip-content-id="uniqueIdOne"></div>
			<div className="box two" onClick={handler} data-tooltip-content-id="uniqueIdTwo"></div>
			{tooltips}
		</div>
	)
}`
