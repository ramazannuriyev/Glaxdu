import React, { useEffect, useState } from "react";
import axios from "axios";
import OurEventCard from '../OurEventCard/OurEventCard'
import { useNavigate } from "react-router-dom";
import './OurNewsfeed.css'

const OurNewsfeed = () => {
	const [product, setProduct] = useState([]);
	const [limit, setLimit] = useState(4); // Установите здесь ваш лимит

	useEffect(() => {
		axios
			.get(`https://fakestoreapi.com/products`)
			.then((resp) => setProduct(resp.data));
	}, []);
	const limitedProducts = product.slice(1, limit);

	const navigate = useNavigate();

	return (
		<div className="OurNewsfeed-card">
			<div className="OurNewsfeed-header w-75">
				<h2>Our Newsfeed</h2>
				<p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
			</div>
			<div className="OurNewsfeed-bottom mt-5">
				<div className="row d-flex justify-content-center">
					{limitedProducts &&
						limitedProducts.map((e) => {
							return (
								<div onClick={() => navigate(`/product-detail/${e.id}`)} className="col-lg-4 col-md-6 sol-sm-12">
									<OurEventCard title={e.title} price={e.price} imgSrc={e.image} category={e.category} />
								</div>
							);
						})}

				</div>
			</div>
		</div>
	)
}

export default OurNewsfeed