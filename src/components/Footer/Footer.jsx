import React from 'react'
import './Footer.css'

const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="container d-flex justify-content-around">
					<div className="about-us">
						<div className="footer-title"><h4>ABOUT US</h4></div>
						<div className="footer-about">
							<p>Ugiat nulla pariatur. Edeserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natu</p>
							<div className="street"><i class="fa-solid fa-house-chimney "></i><span>Uttara, Dhaka, Bangladesh</span></div>
							<div className="mail mt-1"><i class="fa-regular fa-envelope"></i><a className='' href="#">education@email.com</a></div>
							<div className="phone mt-1"><i class="fa-sharp fa-solid fa-phone"></i><span className=''> +98 558 547 589</span></div>
						</div>
					</div>

					<div className="quick-link">
						<div className="footer-title"><h4>QUICK LINK</h4></div>
						<div className="footer-list mt-4">
							<ul>
								<li><a href="index.html">Home</a></li>
								<li><a href="about-us.html">About Us</a></li>
								<li><a href="course.html">Courses</a></li>
								<li><a href="#">Admission</a></li>
								<li><a href="#">Terms &amp; Conditions</a></li>
							</ul>
						</div>

					</div>

					<div className="courses-title">
						<div className="footer-title"><h4>COURSES</h4></div>
						<div class="footer-list mt-4">
							<ul>
								<li><a href="#">Under Graduate Programmes </a></li>
								<li><a href="#">Graduate Programmes </a></li>
								<li><a href="#">Diploma Courses</a></li>
								<li><a href="#">Others Programmes</a></li>
								<li><a href="#">Short Courses</a></li>
							</ul>
						</div>


					</div>

					<div className="gallery">
						<div className="footer-title"><h4>GALLERY</h4></div>
						<div class="footer-gallery">
							<ul>
								<li><a href="#"><img src="https://template.hasthemes.com/glaxdu/glaxdu/assets/img/gallery/gallery-1.png" alt="" /></a></li>
								<li><a href="#"><img src="https://template.hasthemes.com/glaxdu/glaxdu/assets/img/gallery/gallery-2.png" alt="" /></a></li>
								<li><a href="#"><img src="https://template.hasthemes.com/glaxdu/glaxdu/assets/img/gallery/gallery-3.png" alt="" /></a></li>
								<li><a href="#"><img src="https://template.hasthemes.com/glaxdu/glaxdu/assets/img/gallery/gallery-4.png" alt="" /></a></li>
							</ul>
						</div>

					</div>

					<div className="news-latter">
						<div className="footer-title"><h4>NEWS LATTER</h4></div>
						<div className="footer-news d-flex flex-column">
							<p>Dugiat nulla pariatur. Edeserunt mollit anim id est laborum. Sed ut perspiciatis unde</p>
							<input type="text" placeholder='Your E-mail Adress' />
							<button>SUBMIT</button>
						</div>


					</div>
				</div>
			</div>
		</>
	)
}

export default Footer