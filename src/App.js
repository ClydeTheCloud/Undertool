import React, { useRef } from 'react';
import Tooltip from './Tooltip';
import './App.css';

function App() {
	const parentRef = useRef(null);

	const clickHandler = event => {
		const pos = event.target.getBoundingClientRect();
		console.log(pos);
		const tooltipLeft = pos.left + pos.width / 2;
		const tooltipTop = pos.top - 20;
		console.log(tooltipLeft, tooltipTop);

		const tooltip = new Tooltip(tooltipLeft, tooltipTop);
		// const parent = event.target.parentNode;
		// const parent = event.target;

		console.log(parentRef.current, typeof parentRef.current);
		parentRef.current.appendChild(tooltip);
		// console.log(parent);
	};

	return (
		<div className="wrapper" ref={parentRef}>
			<div className="box one" onClick={clickHandler}></div>
			<div className="box two"></div>
			<div className="box three"></div>
		</div>
	);
}

export default App;
