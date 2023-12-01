import React, { useEffect, useState } from 'react'
import './CoursesCard.css'
import axios from 'axios'

const CoursesCard = () => {

	const [data, setData] = useState([])
	useEffect(() => {
		axios.get(`https://api.icd-academy.com/api/Course`).then(resp => setData(resp.data))
	}, [])
	return (
		<>
			{
				data && data.map((e) => {
					return (
						<div className="card col-3 Courses-card">
							<img className="card-img-top" src={`https://api.icd-academy.com/img/${e.imageName}`} alt="Card image cap" />
							<div className="card-body course-body">
								<h5 className="card-title">{e.courseName}</h5>
								<p className="card-text">{e.module}</p>
							</div>
						</div>
					)
				})
			}
		</>




	)
}

export default CoursesCard