import { takeLatest, put, call } from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import api from '../api/api';

function* fetchChartDetails(action) {
	try {
		const chartDetails = yield call(api.fetchChartDetails);
		yield put({
			type: types.CHART_DETAILS_SUCCESS,
			chartDetailsData: chartDetails.data,
		});
	} catch (e) {
		yield put({ type: types.CHART_DETAILS_ERROR, message: e.message });
	}
}

function* chartDetailsSaga() {
	yield takeLatest(types.CHART_DETAILS_REQUEST, fetchChartDetails);
}

export default chartDetailsSaga;
