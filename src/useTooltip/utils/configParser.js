// Prop-types and respective possible prop-values
const possibleValues = [
	{ position: 'top bottom left right' },
	{ method: 'click hover' },
	{ closedelay: 'closedelay' },
	{ nested: 'nested' },
	{ animation: 'fade slide pop scale' },
]

function configParser(configString) {
	// Conver string into array
	const configArray = configString.toLowerCase().trim().split(' ')

	// Check and transform values in array
	const finalConfig = check(configArray)

	if (!finalConfig.method || !finalConfig.position) {
		throw new Error(
			`Requirements for a minimal setup is not met. Make sure to provide position and method in your config-string: ${configString}`
		)
	} else if (
		(finalConfig.method === 'click' && finalConfig.methodLength) ||
		finalConfig.positionLength ||
		finalConfig.nestedLength
	) {
		console.warn(`Unnecessary length was provided in config-string ${configString}`)
	}

	// Return redy-to-use config object
	return finalConfig
}

function extractValuefromString(str, reverse = false) {
	if (reverse) {
		return str.replace(/\d/g, '')
	} else {
		return str.replace(/\D/g, '')
	}
}

function check(array) {
	let values = {}
	// Additional values-object for tracking if all entries from incoming array is converted
	const valuesConverted = []

	// Go through each prop-value in config array...
	array.forEach(a => {
		// ...and each prop-type in 'possible-values' array.
		possibleValues.forEach(b => {
			const [[bKey, bValue]] = Object.entries(b)
			// Check if prop-value (stripped of number at the end with RegExp) is found in 'possible-values' array...
			if (bValue.includes(extractValuefromString(a, true))) {
				// Check for props of the same type (e.g. 'top' and 'left'), if found - throw an error.
				if (values.hasOwnProperty(bKey)) {
					throw new Error(`Found conflicting property values: value ${a} and value ${values[bKey]} of property ${bKey}`)
				}
				// ...and add found prop-types and prop-values to value array (if there's number at the end, split it into two different props (e.g. animation & animationLength  ))
				if (a.match(/\d$/)) {
					values = {
						...values,
						[bKey]: extractValuefromString(a, true),
						[`${bKey}Length`]: extractValuefromString(a),
					}
				} else {
					values = { ...values, [bKey]: a }
				}
				valuesConverted.push(a)
			}
		})
	})

	const checkForUnknowns = array.map(v => [v, valuesConverted.some(vConverted => v === vConverted)])
	checkForUnknowns.forEach(e => {
		if (!e[1]) {
			throw new Error(`Unknown config value: ${e[0]}`)
		}
	})

	return values
}

export default configParser
