import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../../store'

const ResponsiveAppBar = ({handleClick, isLoggedIn}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [anchorEl, setAnchorEl] = React.useState(null)

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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
          >
            INSTRUCTORS
          </Typography>

          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>
              <Link to="/experiences">
                <MenuItem key="experiences" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Experiences</Typography>
                </MenuItem>
              </Link>
              <Link to="/instructors">
                <MenuItem key="instructors" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Instructors</Typography>
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

          {isLoggedIn ? (
            <Box sx={{flexGrow: 0}}>
              <Tooltip title="Open settings">
                <IconButton
                  size="large"
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
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={popoverOpen}
                onClose={handleTogglePopover}
              >
                <MenuItem key="account" onClick={handleCloseNavMenu} href="#">
                  <Typography textAlign="center">Account</Typography>
                </MenuItem>
                <MenuItem key="setting" onClick={handleCloseNavMenu} href="#">
                  <Typography textAlign="center">Setting</Typography>
                </MenuItem>
                <MenuItem key="logout" onClick={handleClick} href="#">
                  <Typography textAlign="center">Logout</Typography>
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
      </Container>
    </AppBar>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}
// export default ResponsiveAppBar;
export default connect(mapState, mapDispatch)(ResponsiveAppBar)

/**
 * PROP TYPES
 */
ResponsiveAppBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
