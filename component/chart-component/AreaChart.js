import React from 'react';
var Highcharts = require('highcharts');

class AreaChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.renderAreaChart();
	}

	renderAreaChart() {
		const { data, figureId } = this.props;
		Highcharts.chart(figureId, {
			chart: {
				type: 'area',
				zoomType: 'x',
				panning: true,
				panKey: 'shift',
				scrollablePlotArea: {
					minWidth: 600,
				},
			},
			title: false,
			credits: {
				enabled: false,
			},
			legend: {
				enabled: false,
			},
			exporting: {
				enabled: false,
			},

			tooltip: {
				headerFormat: 'Product {point.x} <br>',
				pointFormat: '{point.y}',
				shared: true,
			},

			series: [
				{
					data,
					lineColor: Highcharts.getOptions().colors[1],
					color: Highcharts.getOptions().colors[2],
					fillOpacity: 0.5,
					marker: {
						enabled: false,
					},
					threshold: null,
				},
			],
		});
	}

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

export default AreaChart;
