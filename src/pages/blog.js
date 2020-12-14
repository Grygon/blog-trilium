import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PostList from "../components/postListing"


const Blog = ({ location, data }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`;

    return (
        <Layout location={location} title={siteTitle}>
            <h1>All Posts</h1>
            <ol style={{ listStyle: `none` }}>
                <PostList posts={data.allMarkdownRemark.nodes}></PostList>
            </ol>
        </Layout>
    )
};

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`