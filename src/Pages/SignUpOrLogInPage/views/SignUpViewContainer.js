import { connect } from 'react-redux';

import { createAccount } from '../../../redux/reducers/authReducer';
import SignUpView from './SignUpView';

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching,
  error: state.auth.error,
});

export default connect(mapStateToProps, { createAccount })(SignUpView);
