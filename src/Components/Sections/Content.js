import React from 'react'
import { Prism as Highlight } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'

import {
	DataStringContent,
	dataStringContentCode,
	ArgumentChildrenContent,
	argumentChildrenContentCode,
} from '../../Assets/code_snippets'

function Content() {
	return (
		<>
			<h3 className="row-header click" id="content">
				Content
			</h3>
			<div className="intro-wrapper">
				<p>You can set content of a tooltip in two ways. First is setting data attribute on your event target:</p>
				<Highlight language="javascript" style={materialOceanic}>
					{dataStringContentCode}
				</Highlight>
				<div className="box-wrapper">
					<DataStringContent />
				</div>
				<p>
					Another way is to provide an object under <code className="inline-code">children</code> property. In this object
					keys are used as unique IDs and valuse as content. For this to work you also should provide corresponding{' '}
					<code className="inline-code">data-tooltip-content-id</code> attribute on your event target:
				</p>
				<Highlight language="javascript" style={materialOceanic}>
					{argumentChildrenContentCode}
				</Highlight>
				<div className="wrapper">
					<ArgumentChildrenContent />
				</div>
			</div>
		</>
	)
}

export default Content
