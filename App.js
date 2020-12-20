import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store/store';
import ChartDetailsContainer from './container/ChartDetailsContainer';

class App extends Component {
	render() {
		return (
			<div>
				<Provider store={Store}>
					<Router>
						<Route exact path="/home" component={ChartDetailsContainer}></Route>
					</Router>
				</Provider>
			</div>
		);
	}
}
export default App;
