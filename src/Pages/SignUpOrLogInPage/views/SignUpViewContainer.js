import { connect } from 'react-redux';

import { createAccount } from '../../../redux/actions/authActions';
import SignUpView from './SignUpView';

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching,
  error: state.auth.error,
});

export default connect(mapStateToProps, { createAccount })(SignUpView);
