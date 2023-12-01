import React, { useEffect, useState } from 'react'
import Button from '../components/Button/Button'
import BookCard from '../components/BookCard/BookCard'
import axios from 'axios'
import CoursesCard from '../components/CoursesCard/CoursesCard'
import Achievement from '../components/Achievement/Achievement'
import RegisterCard from '../components/RegisterCard/RegisterCard'
import Teacher from '../components/Teacher/Teacher'
import OurEvent from '../components/OurEvent/OurEvent'
import OurNewsfeed from '../components/OurNewsfeed/OurNewsfeed'
import Footer from '../components/Footer/Footer'

const Home = () => {
	const [data, setData] = useState([])
	useEffect(() => {
		axios.get(`https://api.icd-academy.com/api/About`).then(resp => setData(resp.data))
	}, [])

	const [course, setCourse] = useState([])
	useEffect(() => {
		axios.get(`https://api.icd-academy.com/api/Course`).then(resp => setCourse(resp.course))
	}, [])
	return (
		<div className="home_body">
			<div className="body_cards">
				<div className="left_body_card">
					<h1>MakeYour Own World</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
					<div className="body-btn">
						<div className="p-5 pt-0"><Button title={'ABOUT US'} /></div>
						<div className=""><Button title={'CONTACT US'} /></div>
					</div>
				</div>
				<div className="right_body_card">
					<img src="https://template.hasthemes.com/glaxdu/glaxdu/assets/img/slider/single-slide-1.png" alt="" />
				</div>
			</div>
			<div className="colored-cards d-flex justify-content-center">
				<BookCard imgSrc={'https://template.hasthemes.com/glaxdu/glaxdu/assets/img/icon-img/service-1.png'} />
				<BookCard imgSrc={'https://template.hasthemes.com/glaxdu/glaxdu/assets/img/icon-img/service-2.png'} />
				<BookCard imgSrc={'https://template.hasthemes.com/glaxdu/glaxdu/assets/img/icon-img/service-1.png'} />
				<BookCard imgSrc={'https://template.hasthemes.com/glaxdu/glaxdu/assets/img/icon-img/service-1.png'} />
			</div>
			<div className="about-cards">
				<div className="about-left w-50">
					<h2 className='w-75'>About Us</h2>
					<p className='about-text text-success'>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
					<p className='about-text'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven iam, quis nostrud exer citation ullamco laboris nisi ut perspiciatis unde omnis iste natus error sit voluptate</p>
					<div className="about-card-btn w-75 mt-4"><Button title={'ABOUT US'} /></div>
				</div>
				{
					data && data.map((e) => {
						return (
							<div className="about-right w-50 justify-content-center ">
								<img src={`https://api.icd-academy.com/img/${e.imageName}`} alt="" />
							</div>
						)
					})

				}
			</div>

			<div className="courses">
				<div className="container mt-5 w-75">
					<div className="courses-top mt-5">
						<h2>Our Courses</h2>
						<p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
					</div>
					<div className="courses-bottom mt-5">
						<div className="row">
							<CoursesCard />

						</div>

					</div>
				</div>

			</div>
			<div className="Achievement d-flex justify-content-center">
				<Achievement />
			</div>
			<div className="Register">
				<RegisterCard />
			</div>
			<div className="Teacher d-flex justify-content-center">
				<Teacher />
			</div>
			<div className="OurEvent d-flex justify-content-center mt-5">
				<OurEvent/>
			</div>
			<div className="OurNewsfeed d-flex justify-content-center mt-5">
				<OurNewsfeed/>
			</div>
			<div className="Footer d-flex justify-content-center flex-column mt-5">
				<Footer/>
			</div>

		</div >
	)
}

export default Home