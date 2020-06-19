import React from 'react';
import useTooltip from './useTooltip';
import './App.css';

function App() {
	const [handler, tooltips] = useTooltip();

	return (
		<div className='wrapper'>
			<div className='box one' onClick={handler}></div>
			<div className='box two' onClick={handler}></div>
			<div className='box three' onClick={handler}></div>
			{tooltips}
		</div>
	);
}

export default App;
