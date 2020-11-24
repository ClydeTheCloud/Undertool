import React from 'react'
import { Prism as Highlight } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { possibleValues } from '../../useTooltip/utils/configParser'

import {} from '../code_snippets'
import ConfigCard from '../ConfigCard'

const info = {
	position: {
		title: 'Position',
		desc: 'Dictates where to place your tooltip.',
		options: possibleValues[0].position.split(' '),
	},
	animation: {
		title: 'Animation',
		desc:
			'Dictates what animation to play on mount and unmount events. Default length of animation is 200ms. Provide number to customize length, one unit equals to 100ms, so "fade6" will play pop animation with duration of 600ms.',
		options: possibleValues[1].animation.split(' '),
	},
	class: {
		title: 'Class',
		desc:
			'Gives you ability to provide a custom css-class to alter appearance. Tooltip arrow will mimick background-color and border properties.',
		options: ['class:your-class-name-here'],
	},
	arrow: {
		title: 'Arrow',
		desc: `Specifies what size of arrow to use.
		"sm", "md" ,"lg" are different sizes. "rd" are round.
		"arrow:sm" is used by default.`,
		options: possibleValues[3].arrow.split(' '),
	},
	flip: {
		title: 'Flip',
		desc: `If turned on, places the tooltip on other side of reference element if there's not enough space.
		Turned on by default.`,
		options: possibleValues[4].flip.split(' '),
	},
	fixed: {
		title: 'Fixed',
		desc: 'Turn this on if reference element is using "position: fixed".',
		options: possibleValues[5].fixed.split(' '),
	},
	delay: {
		title: 'Delay',
		desc: `Specifies delay before mounting and unmounting tooltip if used with "onMouseEnter" and "onMouseLeave". Useless if used with "onClick".
		Provide one number at the end to use same delay for both mounting and unmounting.
		Provide two numbers divided by a dash to use different delays for mounting (first number) and unmounting (second number).
		One unit equals to 500ms, so "delay2" will delay mounting and unmounting by 1s, while "delay2-4" will delay mounting for 1s and unmounting for 2s.

		Default is 500ms`,
		options: possibleValues[6].delay.split(' '),
	},
	group: {
		title: 'Group',
		desc: '',
		options: possibleValues[7].group.split(' '),
	},
	magnet: {
		title: 'Click magnet',
		desc: '',
		options: possibleValues[8].magnet.split(' '),
	},
	merge: {
		title: 'Merge configs',
		desc: '',
		options: possibleValues[9].merge.split(' '),
	},
	maxw: {
		title: 'Max width',
		desc: '',
		options: possibleValues[10].maxw.split(' '),
	},
}

function Configuration() {
	return (
		<>
			<h3 className="row-header click">Configuration</h3>
			<div className="intro-wrapper">
				<p>
					To fine-tune appearance and behavior of a tooltip use <code className="inline-code">data-tooltip-config</code>{' '}
					attribute. Provide properties as a string, divided by space.
				</p>
				<p>Possible options are:</p>
				{Object.values(info).map(i => (
					<ConfigCard key={i.title} title={i.title} desc={i.desc} options={i.options} />
				))}
				{/* <ConfigCard
					title="Position"
					desc="Decides where to place your tooltip."
					options={}
				/>
				<ConfigCard
					title="Animation"
					desc="Decides where to place your tooltip."
					options={possibleValues[0].position.split(' ')}
				/>
				<ConfigCard
					title="Position:"
					desc="Decides what animation to play on mount and unmount events. Default length of animation is 200ms. Provide
					number to customize length, one unit equals to 100ms, so <code className='inline-code'>fade6</code> will
					play pop animation with duration of 600ms.{' '}"
					options={possibleValues[0].position.split(' ')}
				/> */}

				{/* <div className="possible-item">
					<div className="possible-info">
						<p className="possible-title">Animation:</p>
						<div className="divider" />
						<p className="possible-description">
							Decides what animation to play on mount and unmount events. Default length of animation is 200ms. Provide
							number to customize length, one unit equals to 100ms, so <code className="inline-code">fade6</code> will
							play pop animation with duration of 600ms.{' '}
						</p>
					</div>
					<div className="possible-options">
						<p>fade slide pop scale static</p>
					</div>
				</div>
				<div className="possible-item">
					<div className="possible-info">
						<p className="possible-title">Class:</p>
						<div className="divider" />
						<p className="possible-description">
							Gives you ability to provide a custom css-class to alter appearance. Tooltip arrow will mimick
							background-color and border properties.
						</p>
					</div>
					<div className="possible-options">
						<p>class:your-class-goes-here</p>
					</div>
				</div> */}
			</div>
		</>
	)
}

export default Configuration
