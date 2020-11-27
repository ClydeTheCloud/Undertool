import React from 'react'
import { Prism as Highlight } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { Example, exampleCode, FineTune, finetuneCode, CloseAll, closeAllCode, finetuneCSS } from '../../Assets/code_snippets'

function Intro() {
	return (
		<>
			<h3 className="row-header click" id="introduction">
				Introduction
			</h3>
			<div className="intro-wrapper">
				<p>Undertool is multi-tooltip instrument for React powered by Popperjs.</p>
				<p>Easy to use.</p>
				<p>Installation:</p>
				<div className="installation">
					<p>
						{' '}
						<code className="inline-code">npm i undertool</code> or CDN <span>https://unpkg.com/undertool</span>
					</p>
				</div>
				<Highlight language="javascript" style={materialOceanic}>
					{'const [tooltips, handler] = useUndertool({})'}
				</Highlight>
				<p>
					Put <code className="inline-code">tooltips</code> anywhere in your component and it will render all tooltips.
				</p>
				<p>
					Use universal <code className="inline-code">handler</code> to manage click and hover events.
				</p>
				<p>Undertool works out of the box with minimal configuration.</p>
				<p>
					Undertool has an fall-back config, so if you're lazy like me, you can just throw handler and{' '}
					<code className="inline-code">data-tooltip-content</code> on an element and call it a day!
				</p>
				<Highlight language="javascript" style={materialOceanic}>
					{exampleCode}
				</Highlight>
				<p>Here how it looks on page, click on a square below to open tooltip.</p>
				<div className="box-wrapper">
					<Example />
				</div>
				<p>
					However, if you want to finetune behavior and appearance, you can provide{' '}
					<code className="inline-code">data-tooltip-config</code> attribute:
				</p>
				<Highlight language="javascript" style={materialOceanic}>
					{finetuneCode}
				</Highlight>
				<Highlight language="css" style={materialOceanic}>
					{finetuneCSS}
				</Highlight>
				<p>Here is the result:</p>
				<div className="box-wrapper">
					<FineTune />
				</div>
				<p>
					There is a third item returned to you by calling <code className="inline-code">useUndertool({})</code>, and that is
					special function that is able to close all open tooltips on page. By default it closes all tooltips of the same
					instnace of <code className="inline-code">useUndertool({})</code>, but if you call it with{' '}
					<code className="inline-code">true</code> argument, it will close all tooltips of all instnances.
				</p>
				<Highlight language="javascript" style={materialOceanic}>
					{closeAllCode}
				</Highlight>
				<div className="box-wrapper">
					<CloseAll />
				</div>
			</div>
		</>
	)
}

export default Intro
