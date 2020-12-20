import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestChartDetails } from '../actions/action';
import Home from '../component/Home';

const mapStateToProps = state => ({
	chartDetailsData: state.userDetails.userDetailsData.data,
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			requestChartDetails,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
