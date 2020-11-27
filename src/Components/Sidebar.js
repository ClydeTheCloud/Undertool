import React, { useState } from 'react'

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
	return (
		<>
			<SideButton isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
			<div className={`sidebar sidebar-${isSidebarOpen ? 'open' : 'closed'}`}>
				<div className="sidebar-item">
					<a href="#introduction">Introduction</a>
				</div>
				<div className="sidebar-item">
					<a href="#content">Content</a>
				</div>
				<div className="sidebar-item">
					<a href="#configuration">Configuration</a>
				</div>
				<div className="sidebar-item">
					<a href="#arguments">Arguments</a>
				</div>
			</div>
		</>
	)
}

function SideButton({ isSidebarOpen, setIsSidebarOpen }) {
	return (
		<button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={`side-button ${isSidebarOpen ? 'open' : 'closed'}`}>
			{isSidebarOpen ? 'Close' : 'Open'}
		</button>
	)
}

function useSidebar() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	return <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
}

export default useSidebar
