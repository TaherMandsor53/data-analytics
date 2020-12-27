import * as types from './actionTypes';

export function requestChartDetails() {
	return {
		type: types.CHART_DETAILS_REQUEST,
	};
}
