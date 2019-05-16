import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  withStyles,
  Typography,
  Button,
  Link as MLink,
  Paper,
  Grid
} from "@material-ui/core"

import { siteTheme } from "../theme"

import appHero from "../images/download-app.png"
import appLaptop from "../images/desktop_new.png"
import masButton from "../images/mas-button.svg"
import snapButton from "../images/snap-button.svg"

const styles = {
  root: {
    paddingLeft: 64,
    paddingRight: 64,
    paddingTop: 64,
    paddingBottom: 64,
    backgroundColor: siteTheme.palette.primary.dark,
    color: "white",
    position: 'relative',
    zIndex: 0
  },
  rootBackground: {
    position: 'absolute',
    bottom: 0,
    right: 16,
    backgroundImage: `url('${appHero}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '45%',
    height: '95%',
    [siteTheme.breakpoints.down('sm')]: {
      display: 'none'
    },
    zIndex: -1
  },
  rootContent: {
    zIndex: 1
  },
  rootButton: {
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 8,
  },
  downloads: {
    paddingTop: 48,
    paddingLeft: 72,
    paddingBottom: 48,
    paddingRight: 72,
  },
  download: {
    marginBottom: 48,
  },
  downloadPaper: {
    ...siteTheme.mixins.gutters(),
    paddingTop: siteTheme.spacing.unit * 3,
    paddingBottom: siteTheme.spacing.unit * 3,
  },
  downloadButton: {
    marginRight: 8,
    height: 40,
  },
  downloadButtonImage: {
    height: 40,
    width: "auto",
    verticalAlign: "middle",
  },
}

const DownloadsPage = ({ classes, data }) => {
  const { release } = data.site.siteMetadata
  const newDesktopApp = "https://github.com/hyperspacedev/hyperspace/pull/52"
  return (
    <Layout>
      <SEO title="Download Hyperspace" />
      <div className={classes.root}>
        <div className={classes.rootBackground}/>
        <div className={classes.rootContent}>
          <Typography variant="h2" component="h1" color="inherit">
            <b>Download Hyperspace</b>
          </Typography>
          <br />
          <Typography variant="h5" component="p" color="inherit">
            Select the download for your platform below or download the web files
            here.
          </Typography>
          <br />
          <Button
            href={release.static}
            color="secondary"
            variant="contained"
            className={classes.rootButton}
          >
            Download Web Files
          </Button>
          <Button
            href={release.zip}
            variant="contained"
            className={classes.rootButton}
          >
            Download Source (ZIP)
          </Button>
          <Button
            href={release.targz}
            variant="contained"
            className={classes.rootButton}
          >
            Download Source (TAR.GZ)
          </Button>
          <br />
          <br />
          <Typography color="inherit">
            Need help setting up Hyperspace on your server?{" "}
            <MLink color="inherit" component={Link} to="/docs/getting-started">
              <b>Follow the guide.</b>
            </MLink>
          </Typography>
        </div>
      </div>
      <div className={classes.downloads}>
        <div className={classes.download}>
          <Paper elevation={2} className={classes.downloadPaper}>
            <Grid container spacing={8}>
              <Grid item xs={12} md={8}>
                <Typography variant="h4" component="h2">
                  <b>The new desktop app, coming soon.</b>
                </Typography>
                <br/>
                <Typography paragraph>The brand new Hyperspace desktop app for Windows, macOS, and Linux is coming soon with a brand new design and all the features you know and love from Hyperspace 1.0 beta, from managing follow requests and an easier login system to themes and more customization options.</Typography>
                <br />
                <Button
                  href={newDesktopApp}
                  target="_blank"
                  rel="noopener noreferrer nofollower"
                  className={classes.downloadButton}
                >
                  Learn more
                </Button>
              </Grid>
              <Grid item xs={12} md={4} style={{textAlign: 'center'}}>
                <img src={appLaptop} alt="New Hyperspace app for macOS" style={{width: '75%'}}/>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <div className={classes.download}>
          <Typography variant="h4" component="h2">
            Windows
          </Typography>
          <Typography>Requires Windows 7 or higher</Typography>
          <br />
          <Button
            href={release.win32}
            className={classes.downloadButton}
            color="primary"
          >
            Download EXE
          </Button>
        </div>
        <div className={classes.download}>
          <Typography variant="h4" component="h2">
            macOS
          </Typography>
          <Typography>
            Requires macOS 10.10 (Yosemite) or higher, 64-bit processor
          </Typography>
          <br />
          <Button
            href={release.mac}
            className={classes.downloadButton}
            color="primary"
          >
            Download DMG
          </Button>
          <a href="https://itunes.apple.com/us/app/hyperspace/id1454139710?mt=12">
            <img
              src={masButton}
              className={classes.downloadButtonImage}
              alt="Get on the Mac App Store"
            />
          </a>
        </div>
        <div className={classes.download}>
          <Typography variant="h4" component="h2">
            Linux
          </Typography>
          <Typography>64-bit (x86) processor</Typography>
          <br />
          <Button
            href={release.linux.deb}
            className={classes.downloadButton}
            color="primary"
          >
            Download DEB
          </Button>
          <Button
            href={release.linux.appimage}
            className={classes.downloadButton}
            color="primary"
          >
            Download AppImage
          </Button>
          <a href="https://snapcraft.io/hyperspace">
            <img
              src={snapButton}
              className={classes.downloadButtonImage}
              alt="Get on Snap Store"
            />
          </a>
        </div>
        <div className={classes.download}>
          <Typography variant="h4" component="h2">
            iOS/Android
          </Typography>
          <Typography>
            Currently, mobile devices can make use of their browser to add the app to their
            home screen.
          </Typography>
          <br />
          <Button
            component={Link}
            to="/docs/add-to-home-screen"
            className={classes.downloadButton}
            color="primary"
          >
            Find out how
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        release {
          static
          zip
          targz
          win32
          mac
          linux {
            deb
            appimage
          }
        }
      }
    }
  }
`

export default withStyles(styles)(DownloadsPage)
