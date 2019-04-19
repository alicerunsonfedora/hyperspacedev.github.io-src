import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { withStyles, Typography, Button } from "@material-ui/core"

const styles = {
  root: {
    paddingLeft: 64,
    paddingRight: 64,
    paddingTop: 64,
    flexGrow: 1,
    paddingBottom: 64,
  },
}

const NotFoundPage = ({ classes }) => (
  <Layout>
    <SEO title="Page not found" />
    <div className={classes.root}>
      <Typography variant="h2" component="h1">
        <b>404: Page not found</b>
      </Typography>
      <br />
      <Typography variant="h4" component="p">
        The page you're looking for can't be found.
      </Typography>
      <br />
      <Typography paragraph component="div">
        It's possible one of the following may have happened:
        <ul>
          <li>The page never existed.</li>
          <li>The page did exist but was relocated or deleted.</li>
          <li>The page existed temporarily but was removed.</li>
          <li>The URL has an incorrect path.</li>
          <li>Someone pranked you and gave you a faulty link.</li>
        </ul>
        There's no need to worry, though! Just use our magical teleporter to go
        back to the homepage.
      </Typography>
      <Button component={Link} to="/" color="primary" variant="contained">
        Teleport home
      </Button>
    </div>
  </Layout>
)

export default withStyles(styles)(NotFoundPage)
