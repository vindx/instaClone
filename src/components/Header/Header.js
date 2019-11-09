import React from 'react';
import {Container, Grid, TextField} from "@material-ui/core";
import styles from "./Header.module.css";

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
                    <Grid container direction='row' wrap='nowrap' justify='flex-start' alignItems='center'>
                        <img src='https://www.instagram.com/static/images/ico/favicon.svg/fc72dd4bfde8.svg'
                             style={{minWidth: 25, marginTop: 5}}/>
                        <div style={{fontSize: 30, marginLeft: 15, marginRight: 15, fontFamily: 'none'}}>|</div>
                        <div className={styles.headerText}>InstaClone</div>
                    </Grid>
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
                <Grid item xs={1} className={styles.cursorPointer}>
                    <i className="material-icons">
                        perm_identity
                    </i>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Header;
