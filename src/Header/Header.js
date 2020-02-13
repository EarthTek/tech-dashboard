import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';


import {Drawer, CssBaseline, AppBar, Toolbar, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Typography, Button, Menu, MenuItem} from "@material-ui/core";

import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft, Radio, Storage, QuestionAnswer, ViewList, AccountCircle, Lock } from '@material-ui/icons';
import { useAuth0 } from '../Auth/react-auth0-spa';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));


export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const profileMenuOpen = Boolean(anchorEl);

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {

  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color="primary"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
           PSA Tech Dashboard
          </Typography>
          {!isAuthenticated && (
        <IconButton color="inherit" onClick={() => loginWithRedirect({})}>
          <Lock />
        </IconButton>
      )}

      {/* {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>} */}
      {
        isAuthenticated &&
        (
          <div>
            <IconButton
              aria-label="user profile"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={profileMenuOpen}
            onClose={handleProfileMenuClose}>
              <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
              <MenuItem onClick={() => logout()}>Log Out</MenuItem>
            </Menu>
          </div>
        )
      }
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        
        <Divider />
        <List>
        <ListItem button key={"Home"} component={Link} to="/">
          <ListItemIcon>
            <ViewList />
          </ListItemIcon>
          <ListItemText primary={"Quick Links"} />
        </ListItem>
        <ListItem button key={"All Data"} component={Link} to="/table">
          <ListItemIcon>
            <ViewList />
          </ListItemIcon>
          <ListItemText primary={"All Data"} />
        </ListItem>

        <ListItem button key={"Issues"} component={Link} to="/issues">
          <ListItemIcon>
            <QuestionAnswer />
          </ListItemIcon>
          <ListItemText primary={"Issues"} />
        </ListItem>

        <ListItem button key="Devices" component={Link} to="/devices">
          <ListItemIcon>
            <Radio />
          </ListItemIcon>
          <ListItemText primary="Devices" />
        </ListItem>
        <ListItem button key="Forms" component={Link} to="/kobo-forms">
          <ListItemIcon>
            <Storage />
          </ListItemIcon>
          <ListItemText primary="Forms" />
        </ListItem>
      </List>

      </Drawer>
      </div>
      );
          };
