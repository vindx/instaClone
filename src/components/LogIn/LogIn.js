import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styles from './LogIn.module.css';
import {Link} from "react-router-dom";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import primaryInstaColor from "../PrimaryInstaColor";

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
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

const LogIn = () => {
    const classes = useStyles();

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
                                    variant="outlined"
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
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
                        <Link to='/signup' style={{marginLeft: 5}}>Sign up</Link>
                    </Typography>
                </div>
            </Container>
        </>
    )
};

export default LogIn;
