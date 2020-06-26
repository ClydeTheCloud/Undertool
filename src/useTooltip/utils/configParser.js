// Function that provides info about duplicated-props error
function DuplicateValue(val1, val2, prop) {
	this.val1 = val1;
	this.val2 = val2;
	this.prop = prop;
}

// Prop-types and respective possible prop-values
const possibleValues = [{ position: 'top bottom left right' }, { method: 'click hover' }, { autoclose: 'autoclose' }, { delay: '1 2 3 4 5 6 7 8 9 10' }];

function configParser(configString) {
	// Conver string into array
	const configArray = configString.split(' ');

	// Check and transform values in array
	const finalConfig = check(configArray);

	// Return redy-to-use config object
	return finalConfig;
}

function check(array) {
	let values = {};

	// Go through each prop-value in config array...
	array.forEach((a) => {
		// ...and each prop-type in 'possible-values' array.
		possibleValues.forEach((b) => {
			// Check if prop-value is found 'possible-values' array...
			if (Object.values(b).toString().includes(a)) {
				// Check for props of the same type (e.g. 'top' and 'left'), if found - throw an error.
				if (values.hasOwnProperty(Object.keys(b).toString())) {
					throw new DuplicateValue(a, values[Object.keys(b)], Object.keys(b).toString());
				}
				// ...and add found prop-types and prop-values to value array
				values = { ...values, [Object.keys(b)]: a };
			}
		});
	});

	return values;
}

export default configParser;
