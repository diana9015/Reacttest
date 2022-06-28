import React, { useRef, useEffect, useState } from 'react';
import Layout from '../common/Layout';

function Contactus() {
	const container = useRef(null);
	//window전역객체 안에서 kakao라는 객체를 찾은 다음에 kakao라는 변수이름으로 비구조화 할당
	const { kakao } = window;

	useEffect(() => {
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3,
		};

		//첫번째 인수로 지도가 들어갈 프레임 등록, 두번째 인수로 지도위치, 줌레벨 옵션값 등록해서 인스턴스 생성
		const map = new kakao.maps.Map(container.current, options);
	}, []);

	return (
		<Layout name='Contactus'>
			<div className='contact'>
				<div className='map'>
					{/* container객체를 해당 가상돔에 참조 */}
					<div id='map' ref={container}></div>
				</div>

				<div className='box'>
					<div className='info'>
						<h3>Contact Info:</h3>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
							mollitia a quasi dolorem doloremque fuga velit atque. Fugit quas
							itaque ullam repellendus quam, nemo aut dicta delectus consequatur
							non voluptates officia sit ea. Blanditiis assumenda at, magni
							facilis.
						</p>
						<h4>
							<span>Address:</span>10111 Santa Monica Boiulevard, LA
						</h4>
						<h4>
							<span>Phone:</span>+44 987 065 908
						</h4>
						<h4>
							<span>Email</span>info@Example.com
						</h4>
						<h4>
							<span>Fax:</span>+44 987 065 909
						</h4>
					</div>
					<div className='getin'>
						<h3>Get in Touch:</h3>
						<fieldset>
							<legend>contact form</legend>
							<form action='#'>
								<input
									type='text'
									name='name'
									id='name'
									placeholder='YOUR NAME'
								/>
								<input
									type='email'
									id='email'
									name='email'
									placeholder='YOUR EMAIL'
								/>
								<input
									type='text'
									name='title'
									id='title'
									placeholder='YOUR TITLE'
								/>
								<textarea
									cols='30'
									rows='20'
									name='comment'
									value='YOUR COMMENT'></textarea>
								<input type='submit' value='SEND MESSAGE' />
							</form>
						</fieldset>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Contactus;
