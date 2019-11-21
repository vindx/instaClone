import React from 'react';
import {Container, Grid, TextField} from "@material-ui/core";
import styles from "./Header.module.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Container className={styles.container} maxWidth='xl'>
            <Grid
                container
                direction='row'
                justify='space-evenly'
                alignItems='center'
            >
                <Grid item xs={2} className={styles.cursorPointer}>
                    <Link to='/posts' style={{color: 'black'}} onClick={window.scrollTo(0, 0)}>
                        <Grid container direction='row' wrap='nowrap' justify='flex-start' alignItems='center'>
                            <img src='https://www.instagram.com/static/images/ico/favicon.svg/fc72dd4bfde8.svg'
                                 style={{minWidth: 25, marginTop: 5}}/>
                            <div style={{fontSize: 30, marginLeft: 15, marginRight: 15, fontFamily: 'none'}}>|</div>
                            <div className={styles.headerText}>InstaClone</div>
                        </Grid>
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        variant='outlined'
                        className={styles.textField}
                        id="search"
                        label="Search"
                        type="search"
                        margin="dense"
                    />
                </Grid>
                <Grid item xs={1}>
                    <Link to='/profile' style={{color: 'black'}} onClick={window.scrollTo(0, 0)}>
                        <span className={`material-icons ${styles.cursorPointer}`}>
                        perm_identity
                        </span>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Header;
