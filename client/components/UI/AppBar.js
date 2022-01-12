import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import {Box, Button, Tooltip} from '@material-ui/core'
import {Avatar} from '@material-ui/core'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

export default function MenuAppBar() {
  const classes = useStyles()
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  //   const [anchorEl, setAnchorEl] = React.useState(null)

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const handleChange = event => {
    setAuth(event.target.checked)
  }

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const popoverOpen = Boolean(anchorEl)
  const handleTogglePopover = event => {
    event.preventDefault()
    if (anchorEl === null) {
      setAnchorEl(event.currentTarget)
    } else {
      setAnchorEl(null)
    }
  }
  return (
    <div className={classes.root}>
      {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
            <Typography>Menu</Typography>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
            className={classes.title}
          >
            INSTRUCTOS
          </Typography>

          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'}
              }}
            >
              <Link to="/home">
                <MenuItem key="home" onClick={handleCloseNavMenu}>
                  <Typography align="center" color="primary">
                    Home
                  </Typography>
                </MenuItem>
              </Link>
              <Link to="/experiences">
                <MenuItem key="experiences" onClick={handleCloseNavMenu}>
                  <Typography align="center">Experiences</Typography>
                </MenuItem>
              </Link>
              <Link to="/instructors">
                <MenuItem key="instructors" onClick={handleCloseNavMenu}>
                  <Typography align="center">Instructors</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>

          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            <Link to="/home">
              <Button
                key="home"
                onClick={handleCloseNavMenu}
                sx={{my: 2, color: 'white', display: 'block'}}
              >
                home
              </Button>
            </Link>
            <Link to="/experiences">
              <Button
                key="experiences"
                onClick={handleCloseNavMenu}
                sx={{my: 2, color: 'white', display: 'block'}}
              >
                experiences
              </Button>
            </Link>
            <Link to="/instructors">
              <Button
                key="instructors"
                onClick={handleCloseNavMenu}
                sx={{my: 2, color: 'white', display: 'block'}}
              >
                instructors
              </Button>
            </Link>
          </Box>

          {auth ? (
            <Box sx={{flexGrow: 0}}>
              <Tooltip title="Open settings">
                <IconButton
                  size="medium"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-owns={popoverOpen ? 'my-popover-id-name' : undefined}
                  aria-haspopup={true}
                  onClick={handleTogglePopover}
                  color="inherit"
                  sx={{p: 0}}
                >
                  <Avatar alt="default" src="/img/default.png" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorEl}
                // anchorOrigin={{
                //   vertical: 'bottom',
                //   horizontal: 'left'
                // }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem key="account" onClick={handleCloseNavMenu} href="#">
                  <Typography align="center">Account</Typography>
                </MenuItem>
                <MenuItem key="setting" onClick={handleCloseNavMenu} href="#">
                  <Typography align="center">Setting</Typography>
                </MenuItem>
                <MenuItem key="logout" onClick={handleChange} href="#">
                  <Typography align="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box>
              {/* The navbar will show these links before you log in */}
              <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                <Link to="/login">
                  <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                    <Button
                      key="home"
                      sx={{my: 2, color: 'white', display: 'block'}}
                    >
                      LOGIN
                    </Button>
                  </Box>
                </Link>
                <Link to="/signup">
                  <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                    <Button
                      key="home"
                      sx={{my: 2, color: 'white', display: 'block'}}
                    >
                      SIGN UP
                    </Button>
                  </Box>
                </Link>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
