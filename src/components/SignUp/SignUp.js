import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styles from './SignUp.module.css';
import {Link} from "react-router-dom";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import primaryInstaColor from "../PrimaryInstaColor";

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

const SignUp = () => {
    const classes = useStyles();

    return (
        <>
            <Container className={styles.mainContainer} component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <Typography component='h1' variant='h1'>
                        <div className={styles.headerText}>InstaClone</div>
                    </Typography>
                    <Typography align='center' component="h1" variant="h5">
                        Sign up to see photos and videos from your friends.
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="fullName"
                                    variant="outlined"
                                    fullWidth
                                    id="fullName"
                                    label="Full name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="userName"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    id="userName"
                                    label="Username"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                />
                            </Grid>
                        </Grid>
                        <ThemeProvider theme={primaryInstaColor}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color='primary'
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                        </ThemeProvider>
                    </form>
                </div>
            </Container>
            <Container className={styles.mainContainer} component="main" maxWidth="xs">
                <div style={{margin: 20}}>
                    <Typography align='center'>
                        Have an account?
                        <Link to='/login' style={{marginLeft: 5, color: '#3897f1'}}>Log in</Link>
                    </Typography>
                </div>
            </Container>
        </>
    )
};

export default SignUp;
