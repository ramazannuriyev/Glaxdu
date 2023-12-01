import React from 'react'
import './BookCard.css'

const BookCard = ({imgSrc}) => {
	return (
		<div className="card text-white bg-primary book-card d-flex flex-row">
			<div className="card-header"><img src={imgSrc} alt="" /></div>
			<div className="card-body">
				<h3 className="card-title">Scholarship Facility</h3>
				<p className="card-text mt-2">magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation.</p>
			</div>
		</div>
	)
}

export default BookCard