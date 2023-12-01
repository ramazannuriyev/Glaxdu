import React from 'react'
import './Navbar.css'

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="nav-left">
				<img src="https://template.hasthemes.com/glaxdu/glaxdu/assets/img/logo/logo.png" alt="loqo" />
			</div>
			<div className="nav-right">
				<a href="">HOME</a>
				<a href="">ABOUT</a>
				<a href="">SHOP</a>
				<a href="">PAGES</a>
				<a href="">COURSES/PROGRAMMES</a>
				<a href="">BLOG</a>
				<a href="">CONTACT</a>
				<a href=""><i className="fa-sharp fa-solid fa-cart-plus"></i></a>
				<a href=""><i className="fa-solid fa-magnifying-glass"></i></a>
			</div>

		</div>
	)
}

export default Navbar