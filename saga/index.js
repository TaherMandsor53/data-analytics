import { fork } from 'redux-saga/effects';

import chartDetailsSaga from './chartDetails';

function* sagas() {
	yield fork(chartDetailsSaga);
}

export default sagas;
