import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage';
import Homepagecontent from './components/Homepagecontent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Albumdetails from './components/Albumdetails';
import Sidebar from './components/Sidebar';
import Artistdetails from './components/Artistdetails';
function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/' exact>
						<Homepage />
						<Homepagecontent />
					</Route>
					<Route path='/albumdetails/:Id'>
						<Albumdetails />
					</Route>
					<Route path='/artistdetails/:Id'>
						<Artistdetails />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
