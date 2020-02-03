import { connect } from 'react-redux';

import { changeRemoveRequestStatus } from '../../../../../redux/actions/profileActions';
import ProfileHeader from './ProfileHeader';

const mapStateToProps = state => ({
  viewMode: state.profile.viewMode,
  removeRequestIsFetching: state.profile.removeRequestIsFetching,
});

export default connect(mapStateToProps, { changeRemoveRequestStatus })(ProfileHeader);
