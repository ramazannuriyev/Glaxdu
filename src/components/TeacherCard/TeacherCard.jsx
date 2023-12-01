import React, { useEffect, useState } from 'react'
import './TeacherCard.css'
import axios from 'axios'

const TeacherCard = () => {
	const [data, setData] = useState([])
	useEffect(() => {
		axios.get(`https://api.icd-academy.com/api/Teacher`).then(resp => setData(resp.data))
	}, [])
	return (
		<>
			{
				data && data.map((e) => {
					return (
						<div className="teacher-card card col-2 m-3">
							<img className="teacher-img card-img-top" src={`https://api.icd-academy.com/img/${e.imageName}`} alt="Card image cap" />
							<div className="teacher-body card-body">
								<h5 className="teacher-h5 card-title">{e.firstname}</h5>
								<h5 className="teacher-h5 card-title">{e.lastname}</h5>
							</div>
						</div>
					)
				})
			}

		</>
	)
}

export default TeacherCard