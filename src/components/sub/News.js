import { useState, useEffect, useRef } from 'react';
import Layout from '../common/Layout';

function News() {
	const path = process.env.PUBLIC_URL;
	const input = useRef(null);
	const textarea = useRef(null);

	const dummyPosts = [
		{
			title: 'Hello2',
			content:
				'Here comes description in detail.Here comes description in detail.Here comes description in detail',
		},
		{
			title: 'Hello1',
			content:
				'Here comes description in detailHere comes description in detail.Here comes description in detail.',
		},
	];
	const [posts, setPosts] = useState(dummyPosts);

	const resetPost = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	//post추가 함수
	const createPost = () => {
		setPosts([
			{ title: input.current.value, content: textarea.current.value },
			...posts,
		]);
		resetPost();
	};

	//post삭제 함수
	const deletePost = (index) => {
		console.log('삭제할 포스트 순번', index);

		setPosts(posts.filter((post, idx) => idx !== index));
	};

	return (
		<Layout name='News'>
			<div className='article'>
				<div className='pic'>
					<img src={`${path}/img/article1.jpg`} />
				</div>
				<div className='textbox'>
					<h3>The History of Nature</h3>
					<h4>
						MAY 25, 2022<span>NATURE</span>
					</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
						ratione quo laudantium dolorum aspernatur deserunt eos, fugiat rerum
						dolores quod atque voluptas voluptatibus praesentium similique.
						Dolorum quas dolorem facere ut, atque ducimus at facilis sit
						consequuntur magni, earum adipisci eveniet saepe ipsum nesciunt
						asperiores aliquid placeat. Tenetur totam excepturi nam doloremque,
						laudantium delectus dolorum nobis inventore, ullam quasi atque
						sequi.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
						quis commodi recusandae, animi voluptatem voluptate porro, placeat
						repudiandae, dolorum aliquid nam facere harum debitis quo tenetur
						reprehenderit magnam ea? Fugit, porro dolorem nesciunt molestiae
						vitae exercitationem? Ab quam exercitationem quos, facere vel,
						sapiente accusantium nihil maiores laborum laboriosam dignissimos
						voluptatibus incidunt enim animi consequuntur! In et velit veniam
						quis inventore, deleniti quidem. Nam necessitatibus animi tempore,
						repudiandae accusamus soluta vitae vel at. Pariatur ut ducimus iure
						ab minus, repellat, nam ipsam reprehenderit excepturi omnis ea?
					</p>
				</div>
				<div className='com'>
					<div className='box'>
						<h3>Comments</h3>
						<div className='showBox'>
							{posts.map((post, idx) => {
								return (
									<article key={idx}>
										<div className='wrap'>
											<h2>{post.title}</h2>
											<p>{post.content}</p>
										</div>
										<div className='btns'>
											{/* 순서1- 삭제버튼 클릭시 삭제포스트의 순서값 전달 */}
											<button onClick={() => deletePost(idx)}>delete</button>
										</div>
									</article>
								);
							})}
						</div>
						<h3>Leave a Comment</h3>
						<div className='inputBox'>
							<input type='text' placeholder='제목을 입력하세요' ref={input} />
							<br />
							<textarea
								cols='30'
								rows='10'
								placeholder='본문을 입력하세요.'
								ref={textarea}></textarea>

							<button>cancel</button>
							<button
								onClick={() => {
									setPosts([
										{
											title: input.current.value,
											content: textarea.current.value,
										},
										...posts,
									]);
								}}>
								create
							</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default News;
