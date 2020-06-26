function coordinator(target, config) {
	// Get target's position
	const pos = target.getBoundingClientRect();
	let horizontalDirection, verticalDirection;

	// If Tooltip must be on top or bottom side of the element then horizontal direction is set to left
	if (config.position === 'top' || config.position === 'bottom') {
		horizontalDirection = 'left';
	} else {
		// If Tooltip must be on the left of the element then we position Tooltip based on distance from right border of client's window and vice versa
		horizontalDirection = config.position === 'right' ? 'left' : 'right';
	}

	const horizontalValue =
		config.position === 'left' || config.position === 'right'
			? config.position === 'left'
				? document.documentElement.clientWidth - (pos.left - 20)
				: pos.right + 20
			: pos.left + pos.width / 2;

	// If Tooltip must be on left or right side of the element then horizontal direction is set to top
	if (config.position === 'left' || config.position === 'right') {
		verticalDirection = 'top';
	} else {
		// If Tooltip must be on the bottom of the element then we position Tooltip based on distance from top border of client's window and vice versa
		verticalDirection = config.position === 'bottom' ? 'top' : 'bottom';
	}

	const verticalValue =
		config.position === 'top' || config.position === 'bottom'
			? config.position === 'top'
				? document.documentElement.clientHeight - (pos.top - 20)
				: pos.bottom + 20
			: pos.top + pos.height / 2;

	// console.log('Position is', config.position);

	// console.log('HD =', horizontalDirection);
	// console.log('HV =', horizontalValue);
	// console.log('VD =', verticalDirection);
	// console.log('VV =', verticalValue);

	return [horizontalDirection, horizontalValue, verticalDirection, verticalValue];
}

export default coordinator;
