/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import {
  CssBaseline,
  MuiThemeProvider,
  Typography,
  withStyles,
  Link,
} from "@material-ui/core"
import { siteTheme } from "../theme"

const styles = {
  footer: {
    paddingLeft: 64,
    paddingTop: 32,
    paddingBottom: 32,
    paddingRight: 64,
    [siteTheme.breakpoints.up("md")]: {
      paddingRight: "25%",
    },
    backgroundColor: siteTheme.palette.background.paper,
    flexShrink: 0,
    marginBottom: 0,
  },
  children: {
    flex: '1 0 auto',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: '100vh'
  },
  document: {
    height: '100%'
  }
}

const Layout = ({ classes, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={data => (
      <div className={classes.document}>
        <MuiThemeProvider theme={siteTheme}>
          <CssBaseline />
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className={classes.root}>
            <main className={classes.children}>{children}</main>
            <footer className={classes.footer}>
              <div>
                <Typography variant="caption">
                  © {new Date().getFullYear()} {data.site.siteMetadata.author}.
                </Typography>
                <Typography variant="caption" paragraph>
                  Apple, the Apple logo, Mac, iPhone, and iPad are trademarks of
                  Apple Inc., registered in the U.S. and other countries and
                  regions. App Store is a service mark of Apple Inc. Windows is
                  a registered trademark of Microsoft.
                </Typography>
                <Typography variant="caption">
                  <Link href="https://github.com/hyperspacedev" color="textSecondary">View GitHub profile</Link> | <Link href="mailto:hyperspacedev@marquiskurt.net" color="textSecondary">Contact via email</Link> | <Link href="https://mastodon.social/hyperspacedev" color="textSecondary">Follow on Mastodon</Link> | <Link href="https://discord.gg/c69AXwk" color="textSecondary">Join Discord server</Link> | <Link href="https://matrix.to/#/#hyperspace-general:matrix.org" color="textSecondary">Chat on Matrix</Link>
                </Typography>
              </div>
            </footer>
          </div>
        </MuiThemeProvider>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withStyles(styles)(Layout)
