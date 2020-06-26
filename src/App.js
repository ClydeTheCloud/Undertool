import React from 'react';
import useTooltip from './useTooltip/useTooltip';
import './App.css';

function App() {
	const [tooltips, handler, handlerClose] = useTooltip();

	return (
		<div className='wrapper'>
			<div className='box one' tooltipconfig='left click' content='This is a click-tooltip from the left' onClick={handler}></div>
			<div
				className='box two'
				tooltipconfig='top hover'
				content='This is a hover-tooltip from the top'
				onMouseEnter={handler}
				onMouseLeave={handlerClose}
			></div>
			<div
				className='box three'
				tooltipconfig='bottom hover autoclose 3'
				content='This is a hover-tooltip from the bottom'
				onMouseEnter={handler}
				onMouseLeave={handlerClose}
			></div>
			<div className='box four' tooltipconfig='right click' content='This is a click-tooltip from the right' onClick={handler}></div>
			{tooltips}
		</div>
	);
}

export default App;
