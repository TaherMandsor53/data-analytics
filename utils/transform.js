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

export const convertDateIntoTimeStamp = dateVal => {
	let dateParts = dateVal.split('-');
	var newDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
	let timeStamp = newDate.getTime();
	return timeStamp;
};

const areaChartDataTransform = data => {
	return (
		data &&
		data.map((_, index) => {
			let timeStampVal = convertDateIntoTimeStamp(_.perDate);
			return {
				name: 'Product' + index,
				x: index,
				y: parseFloat(_.performanceValue),
			};
		})
	);
};

export default {
	pieChartDataTransform,
	lineChartDataTransform,
	areaChartDataTransform,
};
