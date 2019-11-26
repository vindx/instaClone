import React from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import primaryInstaColor from "../PrimaryInstaColor";
import styles from './LogIn.module.css';

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
    }
}));

const LogIn = (props) => {
    const {loginUser, updateLoginInfo, logInCheck} = props;
    const classes = useStyles();

    let existAccountEmailOrUserName = React.createRef();
    let existAccountPassword = React.createRef();

    const onInputChange = () => {
        let emailOrUserName = existAccountEmailOrUserName.current.value;
        let password = existAccountPassword.current.value;
        updateLoginInfo({emailOrUserName, password});
    };

    const logIn = () => {
        const loginData = existAccountEmailOrUserName.current.value;
        const enteredPassword = existAccountPassword.current.value;
        if (!loginData && !enteredPassword) {
            existAccountEmailOrUserName.current.parentElement.classList.add(styles.fillThisField);
            existAccountPassword.current.parentElement.classList.add(styles.fillThisField);
        } else if (!loginData) {
            existAccountEmailOrUserName.current.parentElement.classList.add(styles.fillThisField);
        } else if (!enteredPassword) {
            existAccountPassword.current.parentElement.classList.add(styles.fillThisField);
        } else if (enteredPassword.length < 5) {
            existAccountPassword.current.parentElement.classList.add(styles.shortPassword);
        } else if (!logInCheck()) {
            existAccountEmailOrUserName.current.parentElement.classList.add(styles.wrongData);
            existAccountPassword.current.parentElement.classList.add(styles.wrongData);
        } else localStorage.activeUser = JSON.stringify(loginData);
    };

    return (
        <>
            <Container className={styles.mainContainer} component="main" maxWidth="xs">

                <div className={classes.paper}>
                    <Typography component='h1' variant='h1'>
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
                            <Button
                                fullWidth
                                variant="contained"
                                color='primary'
                                className={classes.submit}
                                onClick={logIn}
                            >
                                Log In
                            </Button>
                        </ThemeProvider>
                    </form>
                </div>
            </Container>
            <Container className={styles.mainContainer} component="main" maxWidth="xs">
                <div style={{margin: 20}}>
                    <Typography align='center'>
                        Don't have an account?
                        <Link to='/' style={{marginLeft: 5, color: '#3897f1'}}>Sign up</Link>
                    </Typography>
                </div>
            </Container>
        </>
    )
};

export default LogIn;
