import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, TextField } from '@material-ui/core';

import styles from './Header.module.scss';

const Header = () => (
  <Container className={styles.container} maxWidth="xl">
    <Grid container direction="row" justify="space-evenly" alignItems="center">
      <Grid item xs={2} className={styles.logo}>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <Grid container direction="row" wrap="nowrap" justify="flex-start" alignItems="center">
            <img
              alt=""
              src="https://www.instagram.com/static/images/ico/favicon.svg/fc72dd4bfde8.svg"
            />
            <div className={styles.separator}>|</div>
            <div className={styles.headerText}>InstaClone</div>
          </Grid>
        </Link>
      </Grid>
      <Grid item xs={4}>
        {/*<TextField*/}
        {/*  className={styles.textField}*/}
        {/*  variant="outlined"*/}
        {/*  id="search"*/}
        {/*  label="Search"*/}
        {/*  type="search"*/}
        {/*  margin="dense"*/}
        {/*/>*/}
      </Grid>
      <Grid item className={styles.profileLogo}>
        <Link to="/profile" onClick={() => window.scrollTo(0, 0)}>
          <span className="material-icons">perm_identity</span>
        </Link>
      </Grid>
    </Grid>
  </Container>
);

export default Header;
