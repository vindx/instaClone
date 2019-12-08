// const UPDATE_NEW_USER_INFO = 'UPDATE_NEW_USER_INFO';
// const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
// const UPDATE_LOGIN_INFO = 'UPDATE_LOGIN_INFO';
// const LOGIN_CHECK = 'LOGIN_CHECK';
// const LOGOUT = 'LOGOUT';
// const REMOVE_REQUEST = 'REMOVE_REQUEST';
//
// const usersReducer = (state, action) => {
//   const { emailOrUserName, email, fullName, userName, password } = action;
//   let activeUser = state.existedUsers.find(user => user.activeNow);
//   switch (action.type) {
//     case UPDATE_NEW_USER_INFO:
//       state.newUser = {
//         activeNow: false,
//         email: email.replace(/\s/g, ''),
//         userName: userName.replace(/\s/g, ''),
//         fullName,
//         password: password.replace(/\s/g, ''),
//         profilePhoto: '',
//         removeRequest: false,
//         posts: [],
//       };
//       state.newUserCheck.emailIsNull = state.newUser.email === '';
//       state.newUserCheck.userNameIsNull = state.newUser.userName === '';
//       state.newUserCheck.passwordIsNull = state.newUser.password === '';
//       state.newUserCheck.shortPassword = state.newUser.password.length < 6;
//
//       state.newUserCheck.emailOrUserNameAlreadyExist = !!state.existedUsers.find(
//         ({ email, userName }) =>
//           email === state.newUser.email ||
//           email === state.newUser.userName ||
//           userName === state.newUser.userName ||
//           userName === state.newUser.email
//       );
//       return state;
//     case CREATE_ACCOUNT:
//       state.newUser.activeNow = true;
//       state.existedUsers.push(state.newUser);
//       state.newUser = {
//         activeNow: false,
//         email: '',
//         userName: '',
//         fullName: '',
//         profilePhoto: '',
//         password: '',
//         removeRequest: false,
//         posts: [],
//       };
//       return state;
//     case UPDATE_LOGIN_INFO:
//       state.loginUser = {
//         emailOrUserName: emailOrUserName.replace(/\s/g, ''),
//         password: password.replace(/\s/g, ''),
//       };
//       state.loginCheck.emailOrUserNameIsNull =
//         state.loginUser.emailOrUserName === '';
//       state.loginCheck.passwordIsNull = state.loginUser.password === '';
//       state.loginCheck.shortPassword = state.loginUser.password.length < 5;
//       state.loginCheck.successLogin = !!state.existedUsers.find(
//         ({ email, userName, password }) =>
//           (email === state.loginUser.emailOrUserName ||
//             userName === state.loginUser.emailOrUserName) &&
//           password === state.loginUser.password
//       );
//       return state;
//     case LOGIN_CHECK:
//       let foundedUser = state.existedUsers.find(
//         ({ email, userName, password }) =>
//           (email === state.loginUser.emailOrUserName ||
//             userName === state.loginUser.emailOrUserName) &&
//           password === state.loginUser.password
//       );
//       foundedUser.activeNow = true;
//       state.loginUser = {
//         emailOrUserName: '',
//         password: '',
//       };
//       return state;
//     case LOGOUT:
//       activeUser.activeNow = false;
//       return state;
//     case REMOVE_REQUEST:
//       activeUser.removeRequest = !activeUser.removeRequest;
//       return state;
//     default:
//       return state;
//   }
// };
//
// export default usersReducer;
