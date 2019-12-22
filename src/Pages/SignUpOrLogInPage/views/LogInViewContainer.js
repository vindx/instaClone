import { connect } from 'react-redux';

import { logIn } from '../../../redux/reducers/authReducer';
import LogInView from './LogInView';

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching,
  error: state.auth.error,
});

export default connect(mapStateToProps, { logIn })(LogInView);
