import { connect } from 'react-redux';

import { changeRemoveRequestStatus } from '../../../../../redux/reducers/authReducer';
import ProfileHeader from './ProfileHeader';

const mapStateToProps = state => ({
  viewMode: state.profile.viewMode,
  isFetching: state.auth.isFetching,
});

export default connect(mapStateToProps, { changeRemoveRequestStatus })(ProfileHeader);
