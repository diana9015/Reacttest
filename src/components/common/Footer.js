import React from 'react';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
	return (
		<div className='bottom'>
			<div className='wrap'>
				<FontAwesomeIcon icon={faTwitter} />
				<FontAwesomeIcon icon={faFacebook} />
				<FontAwesomeIcon icon={faPinterest} />
				<FontAwesomeIcon icon={faInstagram} />
				<FontAwesomeIcon icon={faGoogle} />
			</div>
		</div>
	);
}

export default Footer;
