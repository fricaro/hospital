import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import UserService from "../../services/UserService";
import { Redirect, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

const TableComponent = ({ users, setUsersTable }) => {
  let history = useHistory();
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const removeUser = async (user) => {
    try {
      await UserService.delete(user.id);
      let usersFiltered = users.filter((u) => u.id !== user.id);
      setUsersTable(usersFiltered);
      toast.success("Usuário removido com sucesso.");
    } catch (error) {
      toast.error("Falha ao remover usuário.");
    }
  };

  const updateUser = async (user) => {
    history.push({ pathname: "/update", state: { user: user } });

    return (
      <Redirect
        to={{
          pathname: "/update",
          state: { user: user },
        }}
      />
    );
  };

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome de usuário</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {user.username}
                </TableCell>
                <TableCell align="right">
                  <Button onClick={() => updateUser(user)}>
                    <CreateIcon />
                  </Button>
                  <Button onClick={() => removeUser(user)}>
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonText="Anterior"
        nextIconButtonText="Próximo"
        onChangePage={handleChangePage}
      />
    </TableContainer>
  );
};

export default TableComponent;
