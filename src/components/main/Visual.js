import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Visual() {
	const path = process.env.PUBLIC_URL;
	return (
		<div className='visual'>
			<div className='inner'>
				<div className='bannerbox'>
					<div className='wrap'>
						<div className='text'>
							<h2>ARCHITECTURE / INTERIOR</h2>
							<h3>
								WE ARE BULDING
								<br />
								EXPERTS
							</h3>
						</div>
					</div>
				</div>
				<div className='dis'>
					<div className='box1'>
						<div className='pic1'>
							<img src={`${path}/img/small1.jpg`} />
						</div>
						<div className='pic2'>
							<img src={`${path}/img/small2.jpg`} />
						</div>
					</div>
					<div className='box2'>
						<h2>WHO WE ARE</h2>
						<h3>
							ARCHITECTURE
							<br />
							STUDIO
						</h3>
						<h2>
							An award-winning design and developement <br />
							team that is proud of work
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum
							dolor sit amet. consequatur eaque reprehenderit assumenda mollitia
							eveniet aliquam, necessitatibus vero illo commodi fugit officiis
							nostrum rerum, beatae, exercitationem at. Nihil voluptatum optio
							dolores non vero sed iste dolor molestiae alias nostrum
							recusandaesit, illo sequi mollitia?
						</p>
						<button>
							<NavLink to='/aboutus'>READ MORE</NavLink>
						</button>
					</div>
				</div>
				<div
					className='
				serv'>
					<div className='wrap'>
						<h2>WHAT WE DO</h2>
						<h3>
							PROVIDE THE BEST
							<br />
							SERVICE
						</h3>
						<div className='box'>
							<article></article>
							<article></article>
							<article></article>
							<article></article>
						</div>
					</div>
				</div>
				<div className='banner'>
					<article>
						<div className='wrap'>
							<FontAwesomeIcon icon={faPlus} className='plus' />
							<h3>
								SQUARE BULDING
								<br />
								PROJECTS
							</h3>
						</div>
					</article>
					<article>
						<div className='wrap'>
							<FontAwesomeIcon icon={faPlus} className='plus' />
							<h3>
								OUR INTERIORS
								<br />
								PROJECTS
							</h3>
						</div>
					</article>
					<article>
						<div className='wrap'>
							<FontAwesomeIcon icon={faPlus} className='plus' />
							<h3>
								FURNITURE DESIGN
								<br />
								PROJECTS
							</h3>
						</div>
					</article>
				</div>
				<div className='news'>
					<div className='wrap'>
						<h2>BLOG</h2>
						<h3>
							SOME OF OUR LATEST
							<br />
							NEWS
						</h3>
						<div className='box'>
							<article>
								<div className='pic'>
									<img src={`${path}/img/bottom1.jpg`} />
								</div>
								<div className='text'>
									<h4>SOMETHING I NEED TO TELL YOU</h4>
									<h2>MAY 16, 2022</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Nihil, vel!
									</p>
								</div>
							</article>
							<article>
								<div className='pic'>
									<img src={`${path}/img/bottom2.jpg`} />
								</div>
								<div className='text'>
									<h4>ARE YOU DOING THE WRIGHT WAY?</h4>
									<h2>MAY 01, 2022</h2>
									<p>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Corporis dolore odio, accusamus pariatur
									</p>
								</div>
							</article>
							<article>
								<div className='pic'>
									<img src={`${path}/img/bottom3.jpg`} />
								</div>

								<div className='text'>
									<h4> WHY YOU SHOULD ALWAYS FIRST</h4>
									<h2>MARCH 20, 2022</h2>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Iure doloremque adipisci exercitationem commodi molestias.
									</p>
								</div>
							</article>
						</div>
						<button>READ MORE</button>
					</div>
				</div>
				<div className='contact'>
					<div className='wrap'>
						<h3>LET'S WORK TOGETHER</h3>
						<h2>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							<br /> Explicabo necessitatibus commodi ratione cupiditate debitis
							provident excepturi odit, delectus voluptatem iste?
						</h2>
						<button>
							<NavLink to='/member'>READ MORE</NavLink>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Visual;
