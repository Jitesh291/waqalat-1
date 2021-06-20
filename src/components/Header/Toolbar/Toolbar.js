import React from "react";
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { fade, withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Typography, Link, AppBar, Toolbar, InputBase, MenuItem, Menu, Button } from "@material-ui/core";
import UserDropdown from './UserDropdown/UserDropdown';
import { resetSignIn } from "../../../actions/signIn";

const styles = theme => ({
    logo: {
        height: "30px"
    },
  grow: {
    flexGrow: 1
  },
  customiseToolbar: {
    minHeight: 80
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#e0e0e0', 0.15),
    "&:hover": {
      backgroundColor: fade('#e0e0e0', 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "primary",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});
export class ToolbarComponent extends React.Component {
  state = {
    achorEl: false,
    MobileMoreAnchorEl: false
  };

  handleProfileMenuOpen = event => {
    this.setState({
      achorEl: event.currentTarget
    });
  };

  handleMobileMenuClose = () => {
    this.setState({
      mobileMoreAnchorEl: null
    });
  };

  handleMenuClose = () => {
    this.setState({
      achorEl: null,
      mobileMoreAnchorEl: null
    });
  };

  handleMobileMenuOpen = event => {
    this.setState({
      mobileMoreAnchorEl: event.currentTarget
    });
  };

  render() {
    const { classes } = this.props;
    const isMenuOpen = Boolean(this.state.anchorEl);
    const isMobileMenuOpen = Boolean(this.state.mobileMoreAnchorEl);
    const isLoggedIn = this.props.signIn.isSignedIn ? true : false;
    const menuId = "primary-search-account-menu";
    const renderMenu = (
      <Menu
        anchorEl={this.state.anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
      <Menu
        anchorEl={this.state.mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>Profile</MenuItem>
      </Menu>
    );

    return (
      <div className={classes.grow}>
        <AppBar position="static" color='transparent'>
          <Toolbar  className={classes.customiseToolbar}>
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="open drawer"
              onClick={this.props.openDrawerHandler}
            >
                <MenuIcon />
            </IconButton> */}
            <div className="logo">
                <img className={classes.logo} src={'./Waqalat_Normal.png'} alt='company logo' onClick={()=>this.props.history.push('/')} style={{'cursor': 'pointer'}}/>
            </div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            {isLoggedIn ? 
              <Button variant='contained' style={{margin: '0 360px 0 0'}}onClick={()=>this.props.history.push('/documents')}>View Documents</Button> : null
            }
            {!isLoggedIn ? 
              <Typography><Link style={{cursor: 'pointer'}} color="inherit" onClick={()=>this.props.history.push('/signIn')}>Sign In</Link></Typography> 
              :
              <UserDropdown user={this.props.signIn.user} {...this.props}/>
            }
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
      signIn: state.signIn
  }
}
const mapDispatchToProps = dispatch => {
  return {
      resetSignIn: () => dispatch(resetSignIn())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ToolbarComponent)));
