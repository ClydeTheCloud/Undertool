import React from 'react'
import { Prism as Highlight } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { ClipPath, clipPathCode } from '../../Assets/code_snippets'

function Arguments() {
	return (
		<>
			<h3 className="row-header click" id="arguments">
				Arguments
			</h3>
			<div className="intro-wrapper">
				<p>
					<code className="inline-code">useUndertool</code> function takes a single argument, an object. This object is used
					for providing additional options.
				</p>
				<Highlight language="javascript" style={materialOceanic}>
					{'function useUndertool({ children, defaultConfigString, clipPaths = {}, commonClipPath, globalSingle})'}
				</Highlight>
				<p>
					<code className="inline-code">children</code> propety should contain an object and is used to provide content for a
					tooltip. In said object use the same keys as <code className="inline-code">data-tooltip-content-id</code>{' '}
					attributes on corresponding elements.
				</p>
				<p>
					<code className="inline-code">defaultConfigString</code> propety takes config string, just like{' '}
					<code className="inline-code">data-tooltip-config</code>. This config string will be used as default settings for
					any tooltip of that <code className="inline-code">useUndertool</code> instance.
				</p>
				<p>
					<code className="inline-code">clipPaths</code> propety takes an object. In that object use keys as IDs, same as in{' '}
					<code className="inline-code">children</code> propety. Values for those keys should be an element that will work as
					cliping path for tooltip.
				</p>

				<Highlight language="javascript" style={materialOceanic}>
					{clipPathCode}
				</Highlight>

				<p>Try scrolling the box below.</p>

				<div className="box-wrapper">
					<ClipPath />
				</div>

				<p>
					<code className="inline-code">commonClipPath</code> can be provided if you need to clip all of the tooltips of this
					instance with the same clip path. Note that individual clip path has a priority over{' '}
					<code className="inline-code">commonClipPath</code>.
				</p>

				<p>
					If <code className="inline-code">localSingle</code> is set to <code className="inline-code">true</code>, then only
					one tooltip of this instance can be opened at a time.
				</p>

				<p>
					If <code className="inline-code">globalSingle</code> is set to <code className="inline-code">true</code>, then only
					one tooltip of all instances can be opened at a time.
				</p>
			</div>
		</>
	)
}

export default Arguments
