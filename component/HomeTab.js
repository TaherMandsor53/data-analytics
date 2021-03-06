import React from 'react';
import PieChart from './chart-component/PieChart';
import transform from '../utils/transform';
import LineChart from './chart-component/LineChart';
import AreaChart from './chart-component/AreaChart';

class HomeTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.props.requestChartDetails();
	}

	render() {
		const { chartDetailsData } = this.props;
		let chartData = chartDetailsData && chartDetailsData.performanceChartData;
		let transformChartData = transform.pieChartDataTransform(chartData);
		let transformLineData = transform.lineChartDataTransform(chartData);
		let lineData = transformLineData && transformLineData.lineData;

		let transformAreaChart = transform.areaChartDataTransform(chartData);
		console.log('Trasnform chart data:', transformAreaChart);
		return (
			<div className="chart-dashboard">
				<div className="chart-row">
					{transformChartData && <PieChart data={transformChartData} figureId="pie-chart" />}

					{lineData && lineData.length > 0 && <LineChart data={lineData} figureId="line-chart" />}
				</div>
				<div className="chart-row">
					{transformAreaChart && <AreaChart data={transformAreaChart} figureId="area-chart" />}
				</div>
			</div>
		);
	}
}

export default HomeTab;
