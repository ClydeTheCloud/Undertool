import React from 'react';
import useTooltip from './useTooltip/useTooltip';
import './App.css';

function App() {
	function Test() {
		const styleDiv = {
			width: 50,
			height: 50,
			backgroundColor: '#9922ee',
		};

		return <div style={styleDiv}>TEST</div>;
	}

	const [tooltips, handler] = useTooltip();
	const [tooltipWithChild, handlerChild] = useTooltip(<Test />);

	return (
		<div className='wrapper'>
			<div className='box one' tooltipconfig='left click' content='This is a click-tooltip from the left' onClick={handler}></div>
			<div
				className='box two'
				tooltipconfig='top hover'
				content='This is a hover-tooltip from the top'
				onMouseEnter={handler}
				onMouseLeave={handler}
			></div>
			<div
				className='box three'
				tooltipconfig='bottom hover autoclose 3'
				content={'This is a hover-tooltip withChild'}
				onMouseEnter={handlerChild}
				onMouseLeave={handlerChild}
			></div>
			<div className='box four' tooltipconfig='right click' content='This is a click-tooltip from the right' onClick={handler}></div>
			{tooltips}
			{tooltipWithChild}
		</div>
	);
}

export default App;
