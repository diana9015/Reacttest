import './scss/style.scss';
import { Route, Switch } from 'react-router-dom';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Layout from './components/common/Layout';

//sub
import Aboutus from './components/sub/Aboutus';
import News from './components/sub/News';
import Contactus from './components/sub/Contactus';
import Member from './components/sub/Member';
import Join from './components/sub/Join';

//main
import Visual from './components/main/Visual';
import Content from './components/main/Content';

const path = process.env.PUBLIC_URL;

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header />
					<Visual />
				</Route>

				<Route path='/'>
					<Header />
				</Route>
			</Switch>

			<Route path='/aboutus' component={Aboutus} />
			<Route path='/news' component={News} />

			<Route path='/contactus' component={Contactus} />

			<Route path='/member' component={Member} />

			<Route path='/join' component={Join} />

			<Route path='/layout' component={Layout} />

			<Route path='/visual' component={Visual} />

			<Route path='/content' component={Content} />
			<Footer />
		</>
	);
}

export default App;
