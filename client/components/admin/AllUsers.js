//
import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography
} from '@material-ui/core'
import {isAdmin, deleteUserThunk} from '../../store/user'

class AllUsers extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    const {data} = await axios.get('/api/users/')
    this.setState({
      users: data
    })
  }

  handleDeleteUser(userId) {
    this.props.deleteUser(userId)
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== userId)
    }))
  }

  render() {
    return (
      <Fragment>
        {this.props.isAdmin && (
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User Id</TableCell>
                  <TableCell>User Email</TableCell>
                  <TableCell> Admin Status</TableCell>
                  <TableCell>Edit User</TableCell>
                  <TableCell>Delete User</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.users.map(user => {
                  console.log('User', user)
                  return (
                    <TableRow key={user.id}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        {user.isAdmin ? (
                          <Typography>Admin</Typography>
                        ) : (
                          <Typography>User</Typography>
                        )}
                      </TableCell>
                      <TableCell>
                        <Button variant="outlined" color="primary">
                          Edit
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          color="secondary"
                          onClick={() => this.handleDeleteUser(user.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </Paper>
        )}
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isAdmin: (userId, adminStatus) => dispatch(isAdmin(userId, adminStatus)),
    deleteUser: userId => dispatch(deleteUserThunk(userId, true))
  }
}

const mapStateToProps = state => {
  return {
    isAdmin: state.user.isAdmin
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers)
