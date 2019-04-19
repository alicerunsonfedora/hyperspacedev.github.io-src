import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { withStyles, Typography, Button, Paper } from "@material-ui/core"
import { siteTheme } from "../theme"

const styles = {
  hero: {
    backgroundColor: siteTheme.palette.primary.dark,
    textAlign: "center",
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 76,
    paddingBottom: 128,
    [siteTheme.breakpoints.up("sm")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    color: "white",
  },
  content: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 48,
    paddingBottom: 48,
    [siteTheme.breakpoints.up("sm")]: {
      paddingLeft: "17.5%",
      paddingRight: "17.5%",
    },
    color: "white",
    position: "relative",
  },
  doc: {
    width: "100%",
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 32,
    paddingRight: 32,
    marginTop: 8,
    marginBottom: 8,
  },
  docTitle: {
    fontSize: "1.75rem",
    fontWeight: 500,
  },
  docContent: {
    fontSize: "1.05rem",
    fontWeight: 400,
  },
  docButton: {
    textAlign: "right",
  },
}

const Docs = ({ classes, data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Docs" />
      <div className={classes.hero}>
        <Typography variant="h3" component="h1" color="inherit">
          <b>Hyperspace Documentation</b>
        </Typography>
        <br />
        <Typography paragraph color="inherit">
          Looking to deploy Hyperspace to your site or make a custom
          installation? Look no further.
        </Typography>
      </div>
      <div className={classes.content}>
        {edges.map(edge => {
          const { frontmatter } = edge.node
          return (
            <Paper className={classes.doc} key={"doc_" + frontmatter.title + "_" + frontmatter.priority}>
              <Typography variant="h5" className={classes.docTitle}>
                {frontmatter.title}
              </Typography>
              <Typography variant="h6" className={classes.docContent}>
                {frontmatter.description}
              </Typography>
              <div className={classes.docButton}>
                <Button component={Link} to={frontmatter.path} color="secondary">
                  Read doc
                </Button>
              </div>
            </Paper>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___priority] }) {
      edges {
        node {
          frontmatter {
            title
            path
            description
            priority
          }
        }
      }
    }
  }
`

export default withStyles(styles)(Docs)
