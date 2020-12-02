import React, { useState } from 'react'
import { Link } from 'react-scroll'

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
	return (
		<>
			<SideButton isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
			<div className={`sidebar sidebar-${isSidebarOpen ? 'open' : 'closed'}`}>
				<div className="sidebar-item">
					<Link
						className="sidebar-link"
						activeClass="sidebar-link-active"
						to="introduction"
						smooth={true}
						duration={500}
						spy={true}
					>
						Introduction
					</Link>
				</div>
				<div className="sidebar-item">
					<Link
						className="sidebar-link"
						activeClass="sidebar-link-active"
						to="content"
						smooth={true}
						duration={500}
						spy={true}
					>
						Content
					</Link>
				</div>
				<div className="sidebar-item">
					<Link
						className="sidebar-link"
						activeClass="sidebar-link-active"
						to="configuration"
						smooth={true}
						duration={500}
						spy={true}
					>
						Configuration
					</Link>
				</div>
				<div className="sidebar-item">
					<Link
						className="sidebar-link"
						activeClass="sidebar-link-active"
						to="arguments"
						smooth={true}
						duration={500}
						spy={true}
					>
						Arguments
					</Link>
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
