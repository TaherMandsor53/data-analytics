import axios from 'axios';

const baseURL = `http://localhost:9191/`;

const fetchChartDetails = () => {
	const URL = `${baseURL}src/store/response.json`;
	// const URL = `${baseURL}/api/chartDetails`;
	return axios.get(URL);
};

export default {
	fetchChartDetails,
};
