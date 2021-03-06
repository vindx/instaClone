import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'proptypes';

import BigPreloader from '../../shares/components/Preloaders/BigPreloader/BigPreloader';
import Button from '../../shares/components/Button/Button';
import LogOutContainer from '../../shares/components/LogOut/LogOutContainer';
import styles from './AdminPage.module.scss';

const columns = [
  { id: 'userName', label: 'Username' },
  { id: 'email', label: 'Email' },
  { id: 'fullName', label: 'Full name', align: 'center' },
  { id: 'removeRequest', label: 'Remove request', align: 'center' },
];

const useStyles = makeStyles({
  root: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
  },
  tableWrapper: {
    height: 595,
    overflow: 'auto',
  },
  tableHead: {
    fontWeight: 600,
    color: 'rgba(0, 0, 0, 1)',
  },
});

const AdminPage = props => {
  const { getAllUsers, initIsFetching, deletingIsFetching, data, deleteUser } = props;
  const { users: dataBase } = data;

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDeleteAccount = event => {
    deleteUser(event.target.value);
  };

  if (initIsFetching) return <BigPreloader />;

  return (
    <>
      {deletingIsFetching && <BigPreloader />}
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell key={column.id} align={column.align} className={classes.tableHead}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {dataBase.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                <TableRow tabIndex={-1} key={row._id}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} style={{ height: 25 }}>
                        {typeof value === 'boolean' && value ? (
                          <Button
                            btn_name="Delete profile"
                            value={row._id}
                            onClick={handleDeleteAccount}
                          />
                        ) : (
                          value
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={dataBase.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <div className={styles.logOutButtonContainer}>
        <LogOutContainer />
      </div>
    </>
  );
};

AdminPage.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  initIsFetching: PropTypes.bool.isRequired,
  deletingIsFetching: PropTypes.bool.isRequired,
  data: PropTypes.shape({ users: PropTypes.arrayOf(PropTypes.object).isRequired }).isRequired,
  error: PropTypes.string,
};

AdminPage.defaultProps = {
  error: null,
};

export default AdminPage;
