import React from 'react';
import Layout from '../common/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

function Aboutus() {
	const path = process.env.PUBLIC_URL;

	return (
		<Layout name='Aboutus'>
			<div className='about'>
				<div className='intro'>
					<div className='introbox'>
						<h3>WHO WE ARE</h3>
						<h2>
							ARCHITECTURE
							<br />
							STUDIO
						</h2>
						<h3>
							An award-winning design and developement <br />
							team that is proud of work
						</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum
							dolor sit amet. consequatur eaque reprehenderit assumenda mollitia
							eveniet aliquam, necessitatibus vero illo commodi fugit officiis
							nostrum rerum, beatae, exercitationem at. Nihil voluptatum optio
							dolores non vero sed iste dolor molestiae alias nostrum
							recusandaesit, illo sequi mollitia?
						</p>
					</div>
				</div>
				<div className='project'>
					<div className='title'>
						<h2>Our Project</h2>
					</div>
					<div className='box'>
						<div className='name'>
							<h3>House</h3>
						</div>
						<div className='wrap'>
							<Swiper
								slidesPerView={1}
								spaceBetween={30}
								loop={true}
								pagination={{
									clickable: true,
								}}
								navigation={true}
								modules={[Pagination, Navigation]}
								className='mySwiper'>
								<SwiperSlide>
									<img src={`${path}/img/house1.jpg`} />
								</SwiperSlide>
								<SwiperSlide>
									<img src={`${path}/img/house2.jpg`} />
								</SwiperSlide>
								<SwiperSlide>
									<img src={`${path}/img/house3.jpg`} />
								</SwiperSlide>
								<SwiperSlide>
									<img src={`${path}/img/house4.jpg`} />
								</SwiperSlide>
								<SwiperSlide>
									<img src={`${path}/img/house6.jpg`} />
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
					<div className='box'>
						<div className='name'>
							<h3>Interior</h3>
						</div>
						<div className='wrap'>
							<Swiper
								slidesPerView={1}
								spaceBetween={30}
								loop={true}
								pagination={{
									clickable: true,
								}}
								navigation={true}
								modules={[Pagination, Navigation]}
								className='mySwiper'>
								<SwiperSlide>
									<img src={`${path}/img/interior1.jpg`} />
								</SwiperSlide>
								<SwiperSlide>
									<img src={`${path}/img/interior2.jpg`} />
								</SwiperSlide>
								<SwiperSlide>
									<img src={`${path}/img/interior3.jpg`} />
								</SwiperSlide>
								<SwiperSlide>
									<img src={`${path}/img/interior4.jpg`} />
								</SwiperSlide>
								<SwiperSlide>
									<img src={`${path}/img/interior5.jpg`} />
								</SwiperSlide>
								<SwiperSlide>
									<img src={`${path}/img/interior6.jpg`} />
								</SwiperSlide>
								<SwiperSlide>
									<img src={`${path}/img/interior7.jpg`} />
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
					<div className='box'>
						<div className='name'>
							<h3>Furniture</h3>
						</div>
						<div className='wrap'>
							<Swiper
								slidesPerView={1}
								spaceBetween={30}
								loop={true}
								pagination={{
									clickable: true,
								}}
								navigation={true}
								modules={[Pagination, Navigation]}
								className='mySwiper'>
								<SwiperSlide>
									<img src={`${path}/img/fur1.jpg`} />
								</SwiperSlide>
								<SwiperSlide>
									<img src={`${path}/img/fur2.jpg`} />
								</SwiperSlide>
								<SwiperSlide>
									<img src={`${path}/img/fur3.jpg`} />
								</SwiperSlide>
								<SwiperSlide>
									<img src={`${path}/img/fur4.jpg`} />
								</SwiperSlide>
								<SwiperSlide>
									<img src={`${path}/img/fur5.jpg`} />
								</SwiperSlide>
								<SwiperSlide>
									<img src={`${path}/img/fur6.jpg`} />
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
				<div className='journal'>
					<div className='title'>
						<h2>From the Journal</h2>
					</div>
					<div className='wrap'>
						<article>
							<div className='pic'>
								<img src={`${path}/img/journal1.jpg`} />
							</div>
							<div className='text'>
								<h3>Lorem ipsum dolor sit amet.</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Consequatur nemo iure vitae fugiat aperiam suscipit eveniet
									adipisci unde delectus praesentium!
								</p>
							</div>
						</article>
						<article>
							<div className='pic'>
								<img src={`${path}/img/journal2.jpg`} />
							</div>
							<div className='text'>
								<h3>Lorem ipsum dolor sit amet.</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Consequatur nemo iure vitae fugiat aperiam suscipit eveniet
									adipisci unde delectus praesentium!
								</p>
							</div>
						</article>
						<article>
							<div className='pic'>
								<img src={`${path}/img/journal3.jpg`} />
							</div>
							<div className='text'>
								<h3>Lorem ipsum dolor sit amet.</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Consequatur nemo iure vitae fugiat aperiam suscipit eveniet
									adipisci unde delectus praesentium!
								</p>
							</div>
						</article>
						<article>
							<div className='pic'>
								<img src={`${path}/img/journal4.jpg`} />
							</div>
							<div className='text'>
								<h3>Lorem ipsum dolor sit amet.</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Consequatur nemo iure vitae fugiat aperiam suscipit eveniet
									adipisci unde delectus praesentium!
								</p>
							</div>
						</article>
						<article>
							<div className='pic'>
								<img src={`${path}/img/journal5.jpg`} />
							</div>
							<div className='text'>
								<h3>Lorem ipsum dolor sit amet.</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Consequatur nemo iure vitae fugiat aperiam suscipit eveniet
									adipisci unde delectus praesentium!
								</p>
							</div>
						</article>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Aboutus;
