import { possibleValues } from '../../node_modules/undertool/src/utils/configParser'

const configInfo = {
	position: {
		title: 'Position',
		desc: 'Dictates where to place your tooltip.',
		options: possibleValues[0].position.split(' '),
	},
	animation: {
		title: 'Animation',
		desc: `Dictates what animation to play on mount and unmount events. Default length of animation is 200ms. Provide number to customize length, one unit equals to 100ms, so "fade6" will play pop animation with duration of 600ms.
			"static" disables animation. `,
		options: possibleValues[1].animation.split(' '),
	},
	class: {
		title: 'Class',
		desc: `Gives you ability to provide a custom css-class to alter appearance. Tooltip arrow will mimick background-color and border properties.
			Note: percentage units in border-radius property are not supported.`,
		options: ['class:your-class-name-here'],
	},
	arrow: {
		title: 'Arrow',
		desc: `Specifies what size of arrow to use.
		"sm", "md" ,"lg" are different sizes. "rd" are rounded.
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
		desc: 'Turn this on if reference element is using "position: fixed" in CSS rules.',
		options: possibleValues[5].fixed.split(' '),
	},
	delay: {
		title: 'Delay',
		desc: `Specifies delay before mounting and unmounting tooltip if used with "onMouseEnter" and "onMouseLeave". Useless if used with "onClick".
		Provide one number at the end to use same delay for both mounting and unmounting.
		Provide two numbers divided by a dash to use different delays for mounting (first number) and unmounting (second number).
		One unit equals to 500ms, so "delay2" will delay mounting and unmounting by 1s, while "delay2-4" will delay mounting for 1s and unmounting for 2s.
		Default is delay1-3.`,
		options: possibleValues[6].delay.split(' '),
	},
	group: {
		title: 'Group',
		desc:
			'Gives you ablity to group together different reference element. Their click or hover events will be treated as the same (which means that only one of them can be open at a time), while content and configuration of tooltips can be different',
		options: ['group:your-group-name-here'],
	},
	magnet: {
		title: 'Cursor magnet',
		desc: 'If turned on, tooltip will be pointing at cursor rather then reference element',
		options: possibleValues[8].magnet.split(' '),
	},
	merge: {
		title: 'Merge configs',
		desc: `If default config is provided, this option dictates how the "data-tooltip-config" should behave.
		"merge" will merge two configs, "data-tooltip-config" having a priority if some properties do overlap.
		"overwrite" will completly disregard default config and use provided config instead`,
		options: possibleValues[9].merge.split(' '),
	},
	maxw: {
		title: 'Max width',
		desc: `In case you are fine with default appearance of a tooltip and don't want to provide custom class, you can specify max-width with this option.
		Provide number and units like "maxw:150px" or "maxw:5em".`,
		options: possibleValues[10].maxw.split(' '),
	},
	hideable: {
		title: 'Hideable',
		desc: `If turned on, tooltip will be hidden if refference elemen is not visible.
		Turned on by default.`,
		options: possibleValues[11].hideable.split(' '),
	},
}

export default configInfo
