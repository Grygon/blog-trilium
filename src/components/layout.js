import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import styled from "styled-components"

import Img from "gatsby-image"

const TopNavBar = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Layout = ({ location, title, children, data }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  let navBarContent = {
    Contact: "/contact",
    Blog: "/blog",
    Projects: "/projects"
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <TopNavBar>
        {Object.keys(navBarContent).map(key => {
          return (<Link to={navBarContent[key]} className="navBarButton">{key}</Link>)
        })}
      </TopNavBar>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        <StaticQuery
        query={graphql`
          query {
            fileName: file(relativePath: { eq: "GitHub-Mark-64px.png" }) {
              childImageSharp {
                fluid(maxWidth:24) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <a href="https://github.com/Grygon/blog-trilium">
            <Img fluid={data.fileName.childImageSharp.fluid} className="githubFooter" alt="Source"/>
          </a>
          )
        }
      />
      </footer>
    </div>
  )
}

export default Layout
