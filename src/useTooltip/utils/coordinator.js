function coordinator(target, config) {
	// Get target's position
	const pos = target.getBoundingClientRect();
	let horizontalDirection, verticalDirection;

	// If Tooltip must be on the left element then we position Tooltip from right border client window
	if (config.position === 'top' || config.position === 'bottom') {
		horizontalDirection = 'left';
	} else {
		horizontalDirection = config.position === 'right' ? 'left' : 'right';
	}

	const horizontalValue =
		config.position === 'left' || config.position === 'right'
			? config.position === 'left'
				? document.documentElement.clientWidth - (pos.left - 20)
				: pos.right + 20
			: pos.left + pos.width / 2;

	// If Tooltip must be above element then we position Tooltip from bottom
	if (config.position === 'left' || config.position === 'right') {
		verticalDirection = 'top';
	} else {
		verticalDirection = config.position === 'bottom' ? 'top' : 'bottom';
	}

	const verticalValue =
		config.position === 'top' || config.position === 'bottom'
			? config.position === 'top'
				? document.documentElement.clientHeight - (pos.top - 20)
				: pos.bottom + 20
			: pos.top + pos.height / 2;

	console.log('Position is', config.position);

	console.log('HD =', horizontalDirection);
	console.log('HV =', horizontalValue);
	console.log('VD =', verticalDirection);
	console.log('VV =', verticalValue);

	return [horizontalDirection, horizontalValue, verticalDirection, verticalValue];
}

export default coordinator;
