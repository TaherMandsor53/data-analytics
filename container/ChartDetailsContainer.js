import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestChartDetails } from '../actions/actions';
import Home from '../component/Home';

const mapStateToProps = state => ({
	chartDetailsData: state.chartDetails.chartDetailsData,
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			requestChartDetails,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
