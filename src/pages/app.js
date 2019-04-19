import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { withStyles, Typography, Button, Divider } from "@material-ui/core"
import {siteTheme} from "../theme"

import currentApp from '../images/app-ver.png'

const styles = {
  root: {
    paddingLeft: 64,
    paddingRight: 64,
    paddingTop: 64,
    paddingBottom: 64,
  },
  hero: {
      backgroundColor: siteTheme.palette.primary.dark,
      paddingLeft: 76,
      paddingTop: 64,
      paddingRight: 76,
      paddingBottom: 76,
      color: 'white',
      [siteTheme.breakpoints.up('md')]: {
          paddingRight: '25%'
      },
      position: 'relative',
      zIndex: 0
  },
  appVersion: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundImage: `url('${currentApp}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '50%',
    height: '100%',
    [siteTheme.breakpoints.down('sm')]: {
      display: 'none'
    },
    zIndex: -1
  },
  heroContent: {
    zIndex: 1
  },
  appList: {
    padding: 24,
  }
}

const AppPage = ({ classes }) => (
  <Layout>
    <SEO title="Try Hyperspace online" />
    <div className={classes.hero}>
        <div className={classes.appVersion}/>
        <div className={classes.heroContent}>
        <Typography variant="h3" component="h1" color="inherit">
          <b>Try Hyperspace online</b>
        </Typography>
        <br />
        <Typography variant="h5" component="p" color="inherit">
          Want to try Hyperspace? Try out our online version here.
        </Typography>
        <Typography variant="h6" component="p" color="inherit">
          If you're feeling adventourous, you can also try out the beta version to see what's coming next.
        </Typography>
        <br />
        <br/>
        <Button href="https://classicspace.marquiskurt.net" color="secondary" variant="contained" style={{marginRight: 8}}>
          Try Stable*
        </Button>
        <Button href="https://hyperspaceapp-next.herokuapp.com" variant="contained">
          Try the beta
        </Button>
        <br/><br/>
        <Typography variant="caption">*The current stable version available is 0.7, which predates the Material redesign.</Typography>
      </div>
    </div>
    <div className={classes.root}>
        <Typography variant="h4" component="h2">
            <b>Or try out Hyperspace from our friends</b>
        </Typography>
        <Typography>
            This section contains all of the known Hyperspace instances as well as apps built from Hyperspace.
        </Typography>
        <br/>
        <div className={classes.appList}>
          <Typography>We currently don't have any Hyperspace instances from friends yet.</Typography>
        </div>
        <br/>
        <Divider/>
        <br/>
        <Typography variant="h5" component="h2">
            <b>Got an instance of Hyperspace you want to see here?</b>
        </Typography>
        <Typography>
            Let us know on the GitHub repository for this site as an issue.
        </Typography>
        <br/>
        <Button color="primary" variant="contained" href="https://github.com/hyperspacedev/hyperspacedev.github.io/issues/new">Add my instance</Button>
    </div>
  </Layout>
)

export default withStyles(styles)(AppPage)
