import React from 'react';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter  } from 'react-icons/fi';
import './Footer.css';

const Footer = ({ id }) => {
	return (
		<>
			<div className="footerContainer" id={id}>
				<div className="footerColumnH">
					<h3>Follow Us</h3>
					<div><FiFacebook /></div>
					<div><FiInstagram /></div>
					<div><FiLinkedin /></div>
					<div><FiTwitter /></div>
				</div>
				<div className="footerColumn">
					<br />
					<h4>About Us&#8620;</h4>
					<h4>Contact Us&#8620;</h4>
					<h4>Careers&#8620;</h4>
				</div>
				<div className="footerColumnH">
					<h3>Location</h3>
          <br />
					<h5>Denmark</h5>
          <br />
					<h5>Netherland</h5>
				</div>
			</div>
			<div className="copyright">&copy;2022&nbsp;&nbsp;All Rights Reserved.</div>
		</>
	);
};

export default Footer;
