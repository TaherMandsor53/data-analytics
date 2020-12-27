import React from 'react';
import { Tab } from 'semantic-ui-react';
import HomeTab from './HomeTab';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	tabComponent = () => {
		const panes = [
			{
				menuItem: 'Home',
				render: () => <HomeTab {...this.props} />,
			},
			{
				menuItem: 'Chart Details',
				render: () => <h1>Chart Details</h1>,
			},
		];

		return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />;
	};

	render() {
		return (
			<div className="home-main-component">
				<div className="header-text">Chart Dashboard</div>
				<div className="as-tab-details">{this.tabComponent()}</div>
			</div>
		);
	}
}

export default Home;
