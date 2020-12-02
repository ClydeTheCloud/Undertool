import React from 'react'
import { Prism as Highlight } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { ChildrenExample, childrenExampleCode, ContentExample, contentExampleCode } from '../../Assets/code_snippets'

function Content() {
	return (
		<>
			<h3 className="row-header click" id="content">
				Content
			</h3>
			<div className="intro-wrapper">
				<p>You can set content of a tooltip in two ways. First is setting data attribute on your event target:</p>
				<Highlight language="javascript" style={materialOceanic}>
					{contentExampleCode}
				</Highlight>
				<div className="box-wrapper">
					<ContentExample />
				</div>
				<p>
					Another way is to provide an object under <code className="inline-code">children</code> property. In this object
					keys are used as unique IDs and valuse as content. For this to work you also should provide corresponding{' '}
					<code className="inline-code">data-tooltip-content-id</code> attribute on your event target:
				</p>
				<Highlight language="javascript" style={materialOceanic}>
					{childrenExampleCode}
				</Highlight>
				<div className="wrapper">
					<ChildrenExample />
				</div>
			</div>
		</>
	)
}

export default Content
