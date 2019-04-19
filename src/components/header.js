import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  AppBar,
  Typography,
  Toolbar,
  withStyles,
  IconButton,
  Tooltip,
} from "@material-ui/core"
import CloudDownloadIcon from "@material-ui/icons/CloudDownload"
import DescriptionIcon from "@material-ui/icons/Description"
import PublicIcon from "@material-ui/icons/Public"
import GithubCircleIcon from "mdi-material-ui/GithubCircle"
import HomeIcon from "@material-ui/icons/Home"

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
}

const Header = ({ classes, siteTitle }) => (
  <div className={classes.root}>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {siteTitle}
        </Typography>
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
      </Toolbar>
    </AppBar>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Header)
