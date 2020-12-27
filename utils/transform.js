const pieChartDataTransform = data => {
	return (
		data &&
		data.map((_, index) => {
			return {
				name: 'Product' + index,
				y: parseFloat(_.performanceValue),
				z: index + 1,
			};
		})
	);
};

const lineChartDataTransform = data => {
	let lineData = [];
	data &&
		data.map((_, index) => {
			lineData.push(parseFloat(_.performanceValue));
		});
	return {
		lineData,
	};
};

export default {
	pieChartDataTransform,
	lineChartDataTransform,
};
