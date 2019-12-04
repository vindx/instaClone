import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import {
  getLikesStatusActionCreator,
  loginCheckActionCreator,
  updateLoginInfoActionCreator,
} from '../../redux/actions';
import primaryInstaColor from '../../components/PrimaryInstaColor';
import styles from './LogInPage.module.css';

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

const LogInPage = props => {
  const {
    loginUser,
    loginCheck,
    /*updateLoginInfo, logInCheck,*/ signUpUrl,
    dispatch,
  } = props;
  const classes = useStyles();

  let existAccountEmailOrUserName = React.createRef();
  let existAccountPassword = React.createRef();

  const onInputChange = () => {
    let emailOrUserName = existAccountEmailOrUserName.current.value;
    let password = existAccountPassword.current.value;
    dispatch(updateLoginInfoActionCreator({ emailOrUserName, password }));
  };

  const handleLogIn = () => {
    const {
      successLogin,
      emailOrUserNameIsNull,
      passwordIsNull,
      shortPassword,
    } = loginCheck;
    if (emailOrUserNameIsNull && passwordIsNull) {
      existAccountEmailOrUserName.current.parentElement.classList.add(
        styles.fillThisField
      );
      existAccountPassword.current.parentElement.classList.add(
        styles.fillThisField
      );
    } else if (emailOrUserNameIsNull) {
      existAccountEmailOrUserName.current.parentElement.classList.add(
        styles.fillThisField
      );
    } else if (passwordIsNull) {
      existAccountPassword.current.parentElement.classList.add(
        styles.fillThisField
      );
    } else if (shortPassword) {
      existAccountPassword.current.parentElement.classList.add(
        styles.shortPassword
      );
    } else if (!successLogin) {
      existAccountEmailOrUserName.current.parentElement.classList.add(
        styles.wrongData
      );
      existAccountPassword.current.parentElement.classList.add(
        styles.wrongData
      );
    } else {
      dispatch(loginCheckActionCreator());
      localStorage.activeUser = JSON.stringify(loginUser.emailOrUserName);
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
          <form className={classes.form} noValidate>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  inputRef={existAccountEmailOrUserName}
                  variant="outlined"
                  fullWidth
                  id="loginData"
                  label="Email or username"
                  name="loginData"
                  value={loginUser.emailOrUserName}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={existAccountPassword}
                  variant="outlined"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={loginUser.password}
                  onChange={onInputChange}
                />
              </Grid>
            </Grid>
            <ThemeProvider theme={primaryInstaColor}>
              {loginCheck.successLogin ? (
                <Link to="/">
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleLogIn}
                  >
                    Log In
                  </Button>
                </Link>
              ) : (
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleLogIn}
                >
                  Log In
                </Button>
              )}
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
            Don't have an account?
            <Link to={signUpUrl} style={{ marginLeft: 5, color: '#3897f1' }}>
              Sign up
            </Link>
          </Typography>
        </div>
      </Container>
    </>
  );
};

export default LogInPage;
