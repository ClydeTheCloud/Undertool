import React from 'react'

import useUndertool from '../useUndertool/useUndertool'

const possibleValues = [
	{
		position:
			'auto auto-start auto-end top top-start top-end bottom bottom-start bottom-end right right-start right-end left left-start left-end',
	},
	{ animation: 'fade slide pop scale static' },
	{ class: 'class:' },
	{ arrow: 'arrow:sm arrow:md arrow:lg arrow:rd arrow:none' },
	{ flip: 'flip:off flip:on' },
	{ fixed: 'fixed:off fixed:on' },
	{ delay: 'delay' },
	{ group: 'group:' },
	{ magnet: 'magnet:on magnet:off' },
	{ merge: 'merge overwrite' },
	{ maxw: 'maxw:' },
]

const valuesTemplate = [
	{ position: undefined },
	{ animation: undefined },
	{ class: undefined },
	{ arrow: undefined },
	{ flip: undefined },
	{ fixed: undefined },
	{ delay: undefined },
	{ group: undefined },
	{ magnet: undefined },
	{ merge: undefined },
	{ maxw: undefined },
]

function ConfigPreview() {
	const [valuesForConfig, setValuesForConfig] = useState({ valuesTemplate })

	const test = possibleValues.map(item => {
		const [category, values] = Object.entries(item)
	})
}

export default ConfigPreview
