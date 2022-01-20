import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom/cjs/react-router-dom.min'

import {alpha, makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import {Avatar} from '@material-ui/core'
import history from '../../history'
import {Box, Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import {logout, me} from '../../store'
import {grey, white} from '@material-ui/core/colors/'

import {getUserCart} from '../../store/userCart'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}))

function MenuAppBar({handleClick, isLoggedIn, isAdmin}) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  // //NEW
  const dispatch = useDispatch()

  // //setting const to state value
  let currentUser = useSelector(state => state.user)

  //useEffect to pull state based on parameters if necessary
  useEffect(() => {
    dispatch(me())
  }, [])
  const id = currentUser.id

  let currentUserCart = useSelector(state => state.userCart)

  let totalCartQuantity = currentUserCart
    .map(cartItem => {
      return cartItem.quantity
    })
    .reduce((totalQuantity, itemQuantity) => {
      return (totalQuantity += itemQuantity)
    }, 0)
  console.log(totalCartQuantity)

  useEffect(() => {
    dispatch(getUserCart())
  }, [])

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      id={menuId}
      keepMounted
      transformOrigin={{vertical: 'top', horizontal: 'right'}}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleClick} to="#">
        Logout
      </MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      sx={{mt: '45px'}}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{vertical: 'top', horizontal: 'right'}}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton aria-label="show orders" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
            <Typography>Order History</Typography>
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      <MenuItem>
        <IconButton
          aria-label="show cart"
          color="inherit"
          onClick={() => history.push('/cart')}
        >
          <Badge badgeContent={totalCartQuantity} color="secondary">
            {/* <NotificationsIcon /> */}
            <Typography>My Cart</Typography>
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {/* <AccountCircle /> */}
          <Avatar alt="default" src="/img/default.png" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => {
              history.push('/')
            }}
            edge="start"
            className={classes.homeButton}
            color="inherit"
            aria-label="menu"
          >
            <Typography className={classes.title} variant="h6" noWrap>
              INSTRUCTOS
            </Typography>
          </IconButton>
          <IconButton
            onClick={() => {
              history.push('/experiences')
            }}
            aria-label="experiences"
            color="inherit"
          >
            <Typography>Experiences</Typography>
          </IconButton>

          {/* <IconButton
            onClick={() => {
              history.push('/instructors')
            }}
            aria-label="instructors"
            color="inherit"
          >
          <Typography>Instructors</Typography>
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}> */}

          {/* <SearchIcon/> */}
          {/* <Typography>Search</Typography> */}

          {/* </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{'aria-label': 'search'}}
            />
            </div> */}

          <div className={classes.grow} />
          {isLoggedIn ? (
            <div>
              <div className={classes.sectionDesktop}>
                {isAdmin && (
                  <IconButton
                    onClick={() => history.push('/admin')}
                    aria-label="admin portal"
                    color="inherit"
                  >
                    <Typography>Admin Portal</Typography>
                  </IconButton>
                )}
                {/* <IconButton
                  onClick={() => history.push('/orders')}
                  aria-label="show orders"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="secondary">
                    <Typography>Order History</Typography>
                  </Badge>
                </IconButton> */}
                <IconButton
                  aria-label="show cart"
                  color="inherit"
                  userId={id}
                  onClick={() => location.reload(history.push(`/cart`))}
                >
                  <Badge badgeContent={totalCartQuantity} color="secondary">
                    <Typography>My Cart</Typography>
                  </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  {/* <AccountCircle /> */}
                  <Avatar alt="default" src="/img/default.png" />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  {/* <MoreIcon /> */}
                  <Typography>More</Typography>
                </IconButton>
                {renderMobileMenu}
                {renderMenu}
              </div>
            </div>
          ) : (
            <Box>
              {/* The navbar will show these links before you log in */}
              <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                <IconButton
                  onClick={() => {
                    history.push('/login')
                  }}
                  aria-label="login"
                  color="inherit"
                >
                  <Typography>Login</Typography>
                </IconButton>
                <IconButton
                  onClick={() => {
                    history.push('/signup')
                  }}
                  aria-label="signup"
                  color="inherit"
                >
                  <Typography>Signup</Typography>
                </IconButton>

                <IconButton
                  onClick={() => {
                    history.push('/cart')
                  }}
                  aria-label="cart"
                  color="inherit"
                >
                  <Typography>Cart</Typography>
                </IconButton>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: !!state.user.isAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}
// export default MenuAppBar;
export default connect(mapState, mapDispatch)(MenuAppBar)

/**
 * PROP TYPES
 */
MenuAppBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}
