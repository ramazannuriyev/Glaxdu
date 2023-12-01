import React from 'react'
import './Teacher.css'
import TeacherCard from '../TeacherCard/TeacherCard'

const Teacher = () => {
	return (
		<div className="Teacher-card">
			<div className="Teacher-header ">
				<h2>Best Teacher</h2>
				<p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
			</div>
			<div className="Teacher-bottom mt-5">
				<div className="row">
					<TeacherCard/>
				</div>
			</div>
		</div>
	)
}

export default Teacher