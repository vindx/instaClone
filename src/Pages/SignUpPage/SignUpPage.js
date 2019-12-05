import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import PropTypes from 'proptypes';

import {
  createAccountActionCreator,
  getLikesStatusActionCreator,
  updateNewUserInfoActionCreator,
} from '../../redux/actions';
import primaryInstaColor from '../../shares/components/PrimaryInstaColor';
import styles from './SignUpPage.module.scss';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 3),
  },
}));

const SignUpPage = props => {
  const {
    newUser,
    newUserCheck,
    /* createAccount, updateNewUserInfo, */
    logInUrl,
    dispatch,
  } = props;
  const classes = useStyles();

  const newAccountEmail = React.createRef();
  const newAccountUserName = React.createRef();
  const newAccountFullName = React.createRef();
  const newAccountPassword = React.createRef();

  const onInputChange = () => {
    const email = newAccountEmail.current.value;
    const fullName = newAccountFullName.current.value;
    const userName = newAccountUserName.current.value;
    const password = newAccountPassword.current.value;
    dispatch(
      updateNewUserInfoActionCreator({
        email,
        fullName,
        userName,
        password,
      })
    );
  };

  const createNewAccount = () => {
    const {
      emailIsNull,
      userNameIsNull,
      passwordIsNull,
      shortPassword,
      emailOrUserNameAlreadyExist,
    } = newUserCheck;
    if (emailIsNull && userNameIsNull && passwordIsNull) {
      newAccountEmail.current.parentElement.classList.add(styles.fillThisField);
      newAccountUserName.current.parentElement.classList.add(
        styles.fillThisField
      );
      newAccountPassword.current.parentElement.classList.add(
        styles.fillThisField
      );
    } else if (userNameIsNull && passwordIsNull) {
      newAccountUserName.current.parentElement.classList.add(
        styles.fillThisField
      );
      newAccountPassword.current.parentElement.classList.add(
        styles.fillThisField
      );
    } else if (emailIsNull && passwordIsNull) {
      newAccountEmail.current.parentElement.classList.add(styles.fillThisField);
      newAccountPassword.current.parentElement.classList.add(
        styles.fillThisField
      );
    } else if (emailIsNull && userNameIsNull) {
      newAccountEmail.current.parentElement.classList.add(styles.fillThisField);
      newAccountUserName.current.parentElement.classList.add(
        styles.fillThisField
      );
    } else if (emailIsNull) {
      newAccountEmail.current.parentElement.classList.add(styles.fillThisField);
    } else if (userNameIsNull) {
      newAccountUserName.current.parentElement.classList.add(
        styles.fillThisField
      );
    } else if (passwordIsNull) {
      newAccountPassword.current.parentElement.classList.add(
        styles.fillThisField
      );
    } else if (shortPassword) {
      newAccountPassword.current.parentElement.classList.add(
        styles.wrongPassword
      );
    } else if (emailOrUserNameAlreadyExist) {
      newAccountEmail.current.parentElement.classList.add(styles.alreadyExist);
      newAccountUserName.current.parentElement.classList.add(
        styles.alreadyExist
      );
    } else {
      dispatch(createAccountActionCreator());
      localStorage.activeUser = JSON.stringify(newUser.userName);
      dispatch(getLikesStatusActionCreator());
    }
  };

  return (
    <>
      <Container
        className={styles.mainContainer}
        component="main"
        maxWidth="xs"
      >
        <div className={classes.paper}>
          <Typography component="h1" variant="h1">
            <div className={styles.headerText}>InstaClone</div>
          </Typography>
          <Typography align="center" component="h1" variant="h5">
            Sign up to see photos and videos from your friends.
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  inputRef={newAccountEmail}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  value={newUser.email}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={newAccountFullName}
                  name="fullName"
                  variant="outlined"
                  fullWidth
                  id="fullName"
                  label="Full name"
                  value={newUser.fullName}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="username"
                  inputRef={newAccountUserName}
                  name="userName"
                  variant="outlined"
                  fullWidth
                  required
                  id="userName"
                  label="Username"
                  value={newUser.userName}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="current-password"
                  inputRef={newAccountPassword}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  placeholder="At least 6 characters"
                  value={newUser.password}
                  onChange={onInputChange}
                />
              </Grid>
            </Grid>
            <ThemeProvider theme={primaryInstaColor}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={createNewAccount}
              >
                Sign Up
              </Button>
            </ThemeProvider>
          </form>
        </div>
      </Container>
      <Container
        className={styles.mainContainer}
        component="main"
        maxWidth="xs"
      >
        <div style={{ margin: 20 }}>
          <Typography align="center">
            Have an account?
            <Link to={logInUrl} style={{ marginLeft: 5, color: '#3897f1' }}>
              Log in
            </Link>
          </Typography>
        </div>
      </Container>
    </>
  );
};

SignUpPage.propTypes = {
  newUser: PropTypes.shape({
    email: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
  }).isRequired,
  newUserCheck: PropTypes.shape({}).isRequired,
  logInUrl: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default SignUpPage;
