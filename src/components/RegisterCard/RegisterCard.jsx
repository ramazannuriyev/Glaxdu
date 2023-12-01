import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './RegisterCard.css'
import Button from '../Button/Button'

const RegisterCard = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_v1xp6yf', 'template_bajhnrl', form.current, 'SZZPN1qOcmAJ60D29')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
	};
	return (
		<div className="RegisterCard">
			<div className="register ">
				<div className="Register-header mb-5">
					<h2>Register Now</h2>
					<p>Winter Admission Is Going On. We are announcing Special discount for winter batch 2019.</p>
				</div>
				<div className="input-header-text ">
					<h4>Get A free Registration</h4>
				</div>

				<div className="Register-center">
					<form ref={form} onSubmit={sendEmail}>
						<div className="input-top  d-flex flex-row ">
							<input className='input' type="text" placeholder='First Name' name='name' />
							<input className='input' type="text" placeholder='Last Name' name='lastname' />
						</div>
						<div className="input-center d-flex flex-row mt-4">
							<input className='input' type="text" placeholder='Phone' name='phone' />
							<input className='input' type="email" placeholder='Email' name='email' />
						</div>
						<div className="input-bottom mt-4">
							<textarea placeholder="Message" id="" cols="30" rows="10" name='message'></textarea>
						</div>
						<div className="w-100">
							<Button title={'SUBMIT NOW'} value="Send" />
						</div>
					</form>
				</div>

			</div>


		</div>
	)
}

export default RegisterCard