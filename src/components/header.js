import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  AppBar,
  Typography,
  Toolbar,
  withStyles,
  IconButton,
  Tooltip,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button,
} from "@material-ui/core"
import CloudDownloadIcon from "@material-ui/icons/CloudDownload"
import DescriptionIcon from "@material-ui/icons/Description"
import PublicIcon from "@material-ui/icons/Public"
import GithubCircleIcon from "mdi-material-ui/GithubCircle"
import PatreonIcon from "mdi-material-ui/Patreon"
import HomeIcon from "@material-ui/icons/Home"
import MenuIcon from "@material-ui/icons/Menu"

import {siteTheme} from '../theme'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  mobileHide: {
    display: 'none',
    [siteTheme.breakpoints.up('sm')]: {
      display: 'inline-block'
    }
  },
  desktopHide: {
    display: 'inline-block',
    [siteTheme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  menuButton: {
    marginRight: siteTheme.spacing.unit * 2,
    marginLeft: siteTheme.spacing.unit * -1
  },
  drawerList: {
    width: 250
  },
}

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: false
    };
  }

  toggleDrawer(to) {
    this.setState({ drawerOpen: to });
  }

  drawer() {
    const { classes } = this.props;
    return (
      <Drawer open={this.state.drawerOpen} onClose={() => this.toggleDrawer(false)}>
        <div className={classes.drawerList}>
          <List>
            <ListItem>
              <ListItemText><b>Hyperspace</b></ListItemText>
            </ListItem>
            <Divider/>
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText>Homepage</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/app">
              <ListItemIcon>
                <PublicIcon/>
              </ListItemIcon>
              <ListItemText>Try online</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/downloads">
              <ListItemIcon>
                <CloudDownloadIcon/>
              </ListItemIcon>
              <ListItemText>Download apps</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/docs">
              <ListItemIcon>
                <DescriptionIcon/>
              </ListItemIcon>
              <ListItemText>Documentation</ListItemText>
            </ListItem>
            <ListItem button component="a" href="https://github.com/hyperspacedev/hyperspace">
              <ListItemIcon>
                <GithubCircleIcon/>
              </ListItemIcon>
              <ListItemText>GitHub</ListItemText>
            </ListItem>
            <ListItem button component="a" href="https://patreon.com/hyperspacedev">
              <ListItemIcon>
                <PatreonIcon/>
              </ListItemIcon>
              <ListItemText>Support on Patreon</ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
    )
  }

  render() {
    const { classes, siteTitle } = this.props;
    return (
      <div className={classes.root}>
          <AppBar position="static" color="default">
            <Toolbar>
              <div className={classes.desktopHide}>
                <IconButton onClick={() => this.toggleDrawer(true)} color="inherit" className={classes.menuButton}>
                  <MenuIcon />
                </IconButton>
              </div>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                {siteTitle}
              </Typography>
              <div className={classes.mobileHide}>
                <Tooltip title="Homepage">
                  <IconButton component={Link} to="/" color="inherit">
                    <HomeIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Try online">
                  <IconButton component={Link} to="/app/" color="inherit">
                    <PublicIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Download apps">
                  <IconButton component={Link} to="/downloads/" color="inherit">
                    <CloudDownloadIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Documentation">
                  <IconButton component={Link} to="/docs/" color="inherit">
                    <DescriptionIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="GitHub">
                  <IconButton
                    href="https://github.com/hyperspacedev"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <GithubCircleIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Support on Patreon">
                  <IconButton
                    href="https://patreon.com/hyperspacedev"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    <PatreonIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </Toolbar>
          </AppBar>
          {this.drawer()}
        </div>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Header)
