function DuplicateValue(val1, val2, prop) {
	this.val1 = val1;
	this.val2 = val2;
	this.prop = prop;
}

const possibleValues = [
	{ position: 'top bottom left right' },
	{ method: 'click hover' },
	{ autoclose: 'true false' },
	{ delay: '0 1 2 3 4 5 6 7 8 9 10' },
];

function configParser(configString) {
	// Conver string into array
	const configArray = configString.split(' ');

	const finalConfig = check(configArray);

	return finalConfig;
}

function check(array) {
	let values = {};

	array.forEach((a) => {
		possibleValues.forEach((b) => {
			if (Object.values(b).toString().includes(a)) {
				if (values.hasOwnProperty(Object.keys(b).toString())) {
					throw new DuplicateValue(a, values[Object.keys(b)], Object.keys(b).toString());
				}
				values = { ...values, [Object.keys(b)]: a };
			}
		});
	});

	return values;
}

export default configParser;
