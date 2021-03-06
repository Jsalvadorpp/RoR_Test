import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouteWithLayout from './components/routeWithLayout';
import Layout from './layouts/layout';
import Home from './pages/general/home';
import Restaurant from './pages/restaurant/restaurant';
import Toastr from './components/toastr';

function App() {
	return (
		<Router>
			<Toastr />
			<Switch>
				<RouteWithLayout component={Home} layout={Layout} exact path="/" />
				<RouteWithLayout component={Restaurant} layout={Layout} exact path="/restaurant/:id" />
			</Switch>
		</Router>
	);
}

export default App;
