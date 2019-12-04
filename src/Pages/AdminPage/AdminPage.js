import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import {
  deleteAccountActionCreator,
  logOutActionCreator
} from "../../redux/actions";
import styles from "./AdminPage.module.css";

const columns = [
  { id: "userName", label: "Username" },
  { id: "email", label: "Email" },
  { id: "fullName", label: "Full name", align: "center" },
  { id: "removeRequest", label: "Remove request", align: "center" }
];

const useStyles = makeStyles({
  root: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50
  },
  tableWrapper: {
    height: 595,
    overflow: "auto"
  },
  tableHead: {
    fontWeight: 600,
    color: "rgba(0, 0, 0, 1)"
  }
});

const AdminPage = props => {
  const { users: dataBase, /*logOut,*/ /* deleteUser,*/ dispatch } = props;
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleLogOut = () => {
    localStorage.clear();
    dispatch(logOutActionCreator());
  };

  const handleDeleteAccount = userName => {
    dispatch(deleteAccountActionCreator(userName));
  };

  return (
    <>
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    className={classes.tableHead}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataBase
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow tabIndex={-1} key={row.userName}>
                      {columns.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ height: 25 }}
                          >
                            {typeof value === "boolean" && value ? (
                              <button
                                className={styles.button}
                                onClick={() =>
                                  handleDeleteAccount(row.userName)
                                }
                              >
                                Delete profile
                              </button>
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
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
            "aria-label": "previous page"
          }}
          nextIconButtonProps={{
            "aria-label": "next page"
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <div className={styles.logOutButtonContainer}>
        <Link to="/">
          <button className={styles.button} onClick={handleLogOut}>
            Log Out
          </button>
        </Link>
      </div>
    </>
  );
};

export default AdminPage;
