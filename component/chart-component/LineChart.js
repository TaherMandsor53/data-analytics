import React from 'react';
var Highcharts = require('highcharts');

class LineChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.renderLineChart();
	}

	renderLineChart = () => {
		const { data, figureId } = this.props;
		Highcharts.chart(figureId, {
			chart: {
				type: 'line',
			},
			title: false,
			subtitle: false,
			legend: {
				enabled: false,
			},
			credits: {
				enabled: false,
			},
			exporting: {
				enabled: false,
			},

			plotOptions: {
				line: {
					dataLabels: {
						enabled: true,
					},
					enableMouseTracking: false,
				},
			},
			series: [
				{
					data,
				},
			],
		});
	};

	render() {
		return (
			<div>
				<figure>
					<div id={this.props.figureId}></div>
				</figure>
			</div>
		);
	}
}

export default LineChart;
