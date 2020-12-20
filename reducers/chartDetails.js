import * as types from '../actions/actionTypes';

const chartDetails = (
	state = {
		isLoading: false,
		chartDetailsData: [],
	},
	action,
) => {
	switch (action.type) {
		case types.CHART_DETAILS_REQUEST:
			return Object.assign({}, state, {
				isLoading: true,
			});
		case types.CHART_DETAILS_SUCCESS:
			return Object.assign({}, state, {
				isLoading: false,
				chartDetailsData: action.chartDetailsData,
			});
		case types.CHART_DETAILS_ERROR:
			return Object.assign({}, state, {
				isLoading: false,
				error: action.message,
			});
		default:
			return state;
	}
};

export default chartDetails;
