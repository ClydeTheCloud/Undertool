import React, { useEffect, useRef } from 'react'
import useUndertool from 'undertool'

export function Example() {
	const [tooltips, handler] = useUndertool()

	return (
		<div>
			<div className="box four" onClick={handler} data-tooltip-content="Put your text here"></div>
			{tooltips}
		</div>
	)
}

export const exampleCode = `function Example() {
	const [tooltips, handler] = useUndertool()

	return (
		<div>
			<div className="box four" onClick={handler} data-tooltip-content="Put your text here"></div>
			{tooltips}
		</div>
	)
}`

export function FineTune() {
	const [tooltips, handler] = useUndertool()

	return (
		<div>
			<div
				className="box one"
				onClick={handler}
				data-tooltip-content="Put your text here"
				data-tooltip-config="bottom-end fade6 arrow:lg magnet:on maxw:150px class:fancy-tooltip-class"
			></div>
			{tooltips}
		</div>
	)
}

export const finetuneCode = `function FineTune() {
	const [tooltips, handler] = useUndertool()

	return (
		<div>
			<div
				className="box one"
				onClick={handler}
				data-tooltip-content="Put your text here"
				data-tooltip-config="bottom-end fade6 arrow:lg magnet:on maxw:150px class:fancy-tooltip-class"
			></div>
			{tooltips}
		</div>
	)
}`
export const finetuneCSS = `.fancy-tooltip-class {
	background-color: tomato;
	color: #032030;
	padding: 1em;
}`

export function CloseAll() {
	const [tooltips, handler, closeAll] = useUndertool()
	const [anotherTooltips, anotherHandler] = useUndertool() //another instance

	return (
		<div style={{ margin: '0 auto' }}>
			<div className="close-all-wrapper">
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
	const [tooltips, handler, closeAll] = useUndertool()
	const [anotherTooltips, anotherHandler] = useUndertool() //another instance

	return (
		<div style={{ margin: '0 auto' }}>
			<div className="close-all-wrapper">
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
}`

export function ContentExample() {
	const [tooltips, handler] = useUndertool()
	return (
		<div>
			<div className="box three" onMouseEnter={handler} onMouseLeave={handler} data-tooltip-content="This is easy"></div>
			{tooltips}
		</div>
	)
}

export const contentExampleCode = `function ContentExample() {
	const [tooltips, handler] = useUndertool()
	return (
		<div>
			<div className="box three" onMouseEnter={handler} onMouseLeave={handler} data-tooltip-content="This is easy"></div>
			{tooltips}
		</div>
	)
}`

export function ChildrenExample() {
	function InnerComponent() {
		return (
			<p style={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold', padding: '.5em' }}>Or even another component!</p>
		)
	}

	const [tooltips, handler] = useUndertool({
		children: {
			uniqueIdOne: 'This can be a string',
			uniqueIdTwo: <InnerComponent />,
		},
	})
	return (
		<div className="flex-center w100 flex-wrap">
			<div className="box one" onClick={handler} data-tooltip-content-id="uniqueIdOne"></div>
			<div className="box two" onClick={handler} data-tooltip-content-id="uniqueIdTwo"></div>
			{tooltips}
		</div>
	)
}

export const childrenExampleCode = `function ChildrenExample() {
	function InnerComponent() {
		return (
			<p style={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold', padding: '.5em' }}>Or even another component!</p>
		)
	}

	const [tooltips, handler] = useUndertool({
		children: {
			uniqueIdOne: 'This can be a string',
			uniqueIdTwo: <InnerComponent />,
		},
	})
	return (
		<div className="flex-center w100 flex-wrap">
			<div className="box one" onClick={handler} data-tooltip-content-id="uniqueIdOne"></div>
			<div className="box two" onClick={handler} data-tooltip-content-id="uniqueIdTwo"></div>
			{tooltips}
		</div>
	)
}`

export function ClipPath() {
	const clipRef = useRef()
	const [tooltips, handler] = useUndertool({
		clipPaths: {
			scrollBox: clipRef,
		},
	})

	useEffect(() => {
		clipRef.current = document.getElementById('scroller-outer')
		document.querySelector('.scroller-inner > .box').click()
	}, [])

	return (
		<>
			<div id="scroller-outer">
				<div className="scroller-inner">
					<div
						className="box one"
						data-tooltip-content="That's how you clip!"
						data-tooltip-content-id="scrollBox"
						onClick={handler}
					></div>
				</div>
			</div>
			{tooltips}
		</>
	)
}

export const clipPathCode = `function ClipPath() {
	const clipRef = useRef()
	const [tooltips, handler] = useUndertool({
		clipPaths: {
			scrollBox: clipRef,
		},
	})

	useEffect(() => {
		clipRef.current = document.getElementById('scroller-outer')
		document.querySelector('.scroller-inner > .box').click()
	}, [])

	return (
		<>
			<div id="scroller-outer">
				<div className="scroller-inner">
					<div
						className="box one"
						data-tooltip-content="That's how you clip!"
						data-tooltip-content-id="scrollBox"
						onClick={handler}
					></div>
				</div>
			</div>
			{tooltips}
		</>
	)
}`
