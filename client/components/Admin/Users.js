import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllUsersThunk} from '../../store/users'
import history from '../../history'
import {Link} from 'react-router-dom'
/***
 * UI *
 **
 ***/
import {Button, Typography, Grid, ListItemText} from '@material-ui/core'

const Users = () => {
  // const classes = useStyles()

  let users = useSelector(state => state.users)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUsersThunk())
  }, [])
  return (
    <div>
      <Typography variant="h2" color="initial" align="center" gutterBottom>
        All Users
      </Typography>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="baseline"
      >
        <Typography>{users.users}</Typography>
        {users.length === 0 ? (
          <h4>NO USERS TO SHOW</h4>
        ) : (
          <Grid container columns={{xs: 4, sm: 8, md: 12}} key={users.id}>
            {users.map(user => {
              const {id, email, isAdmin} = user
              return (
                <Grid item xs={2} sm={4} md={4} key={id}>
                  <ListItemText>
                    <Typography gutterBottom variant="h5" component="h2">
                      UserId: {id}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h3"
                      component="h3"
                      color="secondary"
                    >
                      Email: {email}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h3"
                      component="h3"
                      color="primary"
                    >
                      Admin: {isAdmin}
                    </Typography>
                    <Button
                      onClick={() => history.push(`/users/${id}`)}
                      size="small"
                      color="primary"
                    >
                      Details
                    </Button>
                  </ListItemText>
                </Grid>
              )
            })}
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default Users
