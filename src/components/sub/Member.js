import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../common/Layout';
import abc from './db/Data.json';

function Member() {
	const path = process.env.PUBLIC_URL;
	const [datas, setDatas] = useState(abc.data);

	return (
		<Layout name='Members'>
			<div className='box'>
				<div className='inner'>
					<h2>OUR AMAZING TEAM</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
						iste, dicta illo unde id, cum distinctio facilis blanditiis
						perspiciatis, quidem nihil. Quae sunt consectetur fugit dolorem eos
						pariatur. Obcaecati, soluta.
					</p>
					<h3>IF you want to work with us, send your resume below!!</h3>
					<form action='#'>
						<input type='file' name='resume' id='resume' />
						<input type='submit' value='SEND' />
					</form>
				</div>
			</div>
			<ul className='memberList'>
				{datas.map((data, idx) => {
					return (
						<li key={idx}>
							<div className='wrap'>
								<div className='pic'>
									<img src={`${path}/img/${data.pic}`} />
								</div>
								<div className='pro'>
									<h2>{data.name}</h2>
									<p>{data.Department}</p>
								</div>
								<div className='say'>
									<p>{data.says}</p>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</Layout>
	);
}

export default Member;
