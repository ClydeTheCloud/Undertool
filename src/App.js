import React from 'react'

import './App.css'
import Introduction from './Components/Sections/Introduction'
import Content from './Components/Sections/Content'
import Configuration from './Components/Sections/Configuration'
import Arguments from './Components/Sections/Arguments'
import useSidebar from './Components/Sidebar'

function App() {
	const Sidebar = useSidebar()
	return (
		<>
			{Sidebar}
			<header>
				<h1>Undertool</h1>
			</header>
			<Introduction />
			<Content />
			<Configuration />
			<Arguments />
			<footer>
				<div>
					<p>
						Powered by <a href="https://popper.js.org/">Popper.js</a>.
					</p>
				</div>
				<div>
					<p>
						Made by <a href="https://clydethecloud.github.io/">Alexandr Diakov</a>. 2020
					</p>
				</div>
			</footer>
		</>
	)
}

export default App
