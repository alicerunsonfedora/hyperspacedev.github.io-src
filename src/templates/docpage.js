import React from "react"
import { graphql, Link } from "gatsby"
import {
  AppBar,
  Toolbar,
  Typography,
  MuiThemeProvider,
  withStyles,
  IconButton,
  Tooltip,
} from "@material-ui/core"
import { siteTheme } from "../theme"

import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import ShareIcon from '@material-ui/icons/Share'

import SEO from "../components/seo"
import "../components/layout.css"

const styles = {
  root: {
    height: '100%'
  },
  docHeader: {
    backgroundColor: siteTheme.palette.primary.main,
    color: "white",
    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: 48,
    paddingRight: 48,
    [siteTheme.breakpoints.up("sm")]: {
      paddingLeft: 64,
      paddingRight: 64,
    },
  },
  docDescription: {
    fontSize: "1.25rem",
  },
  backIcon: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    flexGrow: 1
  },
  docTitle: {
    fontWeight: 500
  },
  docContent: {
    paddingLeft: 64,
    paddingRight: 64,
    paddingTop: 64,
    paddingBottom: 48,
    fontSize: '1rem',
    backgroundColor: siteTheme.palette.background.default,
    [siteTheme.breakpoints.up("sm")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
    '& a': {
      textDecoration: 'none',
      color: siteTheme.palette.secondary.main
    },
    '& hr': {
      marginTop: 32,
      marginBottom: 24,
      borderColor: siteTheme.palette.divider
    },
    '& img': {
      maxWidth: '100%',
      width: 500,
      boxShadow: '0px 0px 4px #333',
      [siteTheme.breakpoints.up('md')]: {
        marginLeft: '25%',
        marginRight: '25%'
      },
      marginTop: 8,
      marginBottom: 8
    },
    '& blockquote': {
      borderColor: siteTheme.palette.grey[600],
      borderLeftWidth: 4,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderStyle: 'solid',
      paddingLeft: 24,
      paddingRight: 8,
      paddingTop: 4,
      paddingBottom: 4,
      marginLeft: 0,
      fontSize: '1.10rem',
      fontStyle: 'italic',
      backgroundColor: siteTheme.palette.background.paper
    },
    '& code': {
      fontSize: '1.2rem'
    },
    '& table': {
      boxShadow: siteTheme.shadows[8],
      width: '100%',
      '& thead tr th': {
        paddingTop: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        paddingLeft: 12,
        borderStyle: 'solid',
        borderColor: siteTheme.palette.divider,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        textAlign: 'left'
      },
      '& tbody tr td': {
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 8,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderColor: siteTheme.palette.divider,
        borderStyle: 'solid',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0
      },
      '& tbody tr:last-child td': {
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 8,
        paddingBottom: 12,
        borderBottomWidth: 0,
        borderColor: siteTheme.palette.divider,
        borderStyle: 'solid',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0
      }
    }
  },
}

const Template = ({ data, classes }) => {
  const title = data.markdownRemark.frontmatter.title
  const description = data.markdownRemark.frontmatter.description
  const html = data.markdownRemark.html
  const path = data.markdownRemark.frontmatter.path

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={siteTheme}>
        <SEO title={`${title} - Hyperspace Docs`} />
        <AppBar position="static" color="default">
          <Toolbar>
              <Tooltip title="Back to docs">
                <IconButton
                component={Link}
                to="/docs/"
                color="inherit"
                className={classes.backIcon}
              >
                  <ArrowBackIcon />
                </IconButton>
              </Tooltip>
            <Typography variant="h6" color="inherit" className={classes.title}>
              Hyperspace Docs
            </Typography>
            {/* <IconButton color="inherit" onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: title,
                  text: description,
                  url: "http://www.google.com"
                }).then(() => console.log("Share successful"))
                  .catch((error) => console.error("Error while sharing: " + error));
              } else { 
                let tempDiv = document.createElement('input');
                tempDiv.value = `https://${window.location.host}${window.location.pathname}`;
                tempDiv.select();
                document.execCommand("copy");
              }
            }}>
                  <ShareIcon />
                </IconButton> */}
          </Toolbar>
        </AppBar>
        <div className={classes.docHeader}>
          <Typography variant="h2" component="h1" color="inherit" className={classes.docTitle}>
            {title}
          </Typography>
          <br />
          <Typography color="inherit" className={classes.docDescription}>
            {description}
          </Typography>
        </div>
        <Typography paragraph component="div" className={classes.docContent}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Typography>
      </MuiThemeProvider>
    </div>
  )
}

export const postQuery = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        path
        description
      }
    }
  }
`

export default withStyles(styles)(Template)
