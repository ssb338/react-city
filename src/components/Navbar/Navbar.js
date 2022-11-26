import React from 'react'
import './navbar.scss'
import logo from '../../logo.jpeg'

export default function Navbar() {
	return (
		<nav className="nav-bar">
			<img src={logo} alt="city tours logo"/>
			<ul className="nav-links">
			<li>
				<a href="/" className="nav-link">Home</a>
			</li>
			<li>
				<a href="/" className="nav-link">About</a>
			</li>
			<li>
				<a href="/" className="nav-link active">Tours</a>
			</li>
			</ul>
		</nav>

	)
}