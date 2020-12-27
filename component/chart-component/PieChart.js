import React from 'react';
var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/variable-pie')(Highcharts);

class PieChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.renderPieChart();
	}

	renderPieChart = () => {
		const { data, figureId } = this.props;
		console.log('Data in chart comp:', data);
		Highcharts.chart(figureId, {
			chart: {
				type: 'variablepie',
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

			tooltip: {
				headerFormat: '',
				pointFormat:
					'<span style="color:{point.color}">\u25CF</span> <b> {point.name}: </b>' + '<b>{point.y}</b>',
			},
			series: [
				{
					minPointSize: 10,
					innerSize: '20%',
					zMin: 0,
					name: 'Product Performance',
					data,
				},
			],
			plotOptions: {
				variablepie: {
					colors: [
						'#585148',
						'#D7C2AA',
						'#A36650',
						'#E8C880',
						'#BEBEBE',
						'#D4AD9C',
						'#BFD6EB',
						'#3B8085',
						'#427C99',
						'#DEDFB3',
						'#B4B77B',
						'#B89D83',
						'#92B8D6',
						'#DBAA35',
					],
				},
				series: {
					dataLabels: {
						enabled: true,
						format: '{point.name}',
						padding: 0,
						style: {
							fontSize: '10px',
						},
					},
				},
			},
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

export default PieChart;
