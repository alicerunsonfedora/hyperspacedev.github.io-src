import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import heroImage from "../images/homepage-hero.png"
import layoutImage from "../images/homepage-layout.png"
import configImage from "../images/homepage-config.png"
import fossImage from "../images/homepage-oss.png"


import { withStyles, Typography, Button, Grid, Divider } from "@material-ui/core"
import { siteTheme } from "../theme"

const styles = {
  hero: {
    backgroundColor: siteTheme.palette.primary.dark,
    textAlign: "center",
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 76,
    paddingBottom: 300,
    [siteTheme.breakpoints.up("sm")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    color: "white",
    position: "relative",
  },
  heroBg: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundPosition: "top",
    backgroundSize: "cover",
    width: "100%",
    height: "50%",
  },
  buttons: {
    display: "inline-block",
    marginTop: 8,
    marginBottom: 8,
  },
  button: {
    marginLeft: 8,
    marginRight: 8,
  },
  root: {
    paddingLeft: 64,
    paddingTop: 40,
    paddingRight: 40,
    paddingBottom: 40,
    [siteTheme.breakpoints.up('sm')]: {
      paddingLeft: '15%',
      paddingRight: '15%'
    }
  },
  featureImage: {
    width: '100%'
  }
}

const IndexPage = ({ classes }) => (
  <Layout>
    <SEO
      title="The fluffiest client for the fediverse"
      keywords={[`hyperspace`, `application`, `react`]}
    />
    <div className={classes.hero}>
      <div
        className={classes.heroBg}
        style={{ backgroundImage: `url('${heroImage}')` }}
      />
      <Typography component="h1" variant="h3" color="inherit">
        <b>Meet Hyperspace.</b>
      </Typography>
      <br />
      <Typography paragraph color="inherit">
        Hyperspace is the fluffiest client for Mastodon and other fediverse
        networks written in TypeScript and React. Hyperspace offers a fun,
        clean, fast, and responsive design that scales beautifully across
        devices and enhances the fediverse experience.
      </Typography>
      <div className={classes.buttons}>
        <Button
          to="/app/"
          component={Link}
          className={classes.button}
          color="secondary"
          variant="contained"
        >
          Try Online
        </Button>
        <Button
          to="/downloads/"
          component={Link}
          className={classes.button}
          color="secondary"
          variant="contained"
        >
          Download apps
        </Button>
      </div>
    </div>
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid xs={12} sm={6}>
          <Typography variant="h4" component="h2"><b>A layout and design that makes sense. Anywhere.</b></Typography>
          <br/>
          <Typography paragraph>Hyperspace is beautifully designed to put your content front and center and bring a familiar experience to Mastodon. View threads and profiles with ease and compose anywhere with the compose button. And, of course, Hyperspace scales across devices beautifully, providing the same experience anywhere.</Typography>
        </Grid>
        <Grid xs={12} sm={6}>
          <img src={layoutImage} className={classes.featureImage} alt="Hyperspace layout"/>
        </Grid>
        <Grid xs={12}><Divider/><br/></Grid>
        <Grid xs={12} sm={6}>
          <img src={configImage} className={classes.featureImage} alt="Configured Hyperspace"/>
        </Grid>
        <Grid xs={12} sm={6}>
          <Typography variant="h4" component="h2"><b>Designed for everyone, configurable by anyone.</b></Typography>
          <br/>
          <Typography paragraph>Hyperspace allows customization and configuration at every level, from the server level with branding and instance setup, down to the user level with dark mode and custom themes. And, if the default configuration settings aren't enough, anyone can make their own version of Hyperspace with custom additions.</Typography>
        </Grid>
        <Grid xs={12}><Divider/><br/></Grid>
        <Grid xs={12} sm={6}>
          <Typography variant="h4" component="h2"><b>Open to everyone. Down to the source.</b></Typography>
          <br/>
          <Typography paragraph>Hyperspace is free (libre) and open-source software. Licensed under the Apache 2.0 License, anyone can modify, redistribute, or contribute to the Hyperspace project without restriction. Hyperspace is written in TypeScript and takes advantage of multiple open-source libraries and projects such as React, Megalodon, and Material-UI, so web and Node.js developers will feel right at home.</Typography>
        </Grid>
        <Grid xs={12} sm={6}>
          <img src={fossImage} className={classes.featureImage} alt="GitHub page"/>
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default withStyles(styles)(IndexPage)
