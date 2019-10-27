import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import {
  ButtonLink,
  ButtonLinkList,
  Heading,
  DateLine,
  BlogContent,
} from '../components/style'
import NextNavArrow from '../svg/nextNavArrow'

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <>
        <Heading inline="true">Welcome to my blog</Heading>
        <BlogContent blogFront="true">
          <p>
            Hi there, welcome to my blog. This blog is a place where I write
            about different topics, primarily dominated by JavaScript and React.
            I could tell you a lot about what my ambitions for the blog but I
            think you should have a look yourself:
          </p>
        </BlogContent>
        <Heading inlineOverlay="true" overlay="true">
          Latest Posts
        </Heading>
        <ButtonLinkList>
          {edges.map(({ node }) => (
            <ButtonLink
              secondary="true"
              key={node.fields.slug}
              to={`/posts${node.fields.slug}`}
            >
              {node.frontmatter.title}
              <NextNavArrow />
              <DateLine>{`${new Date(
                node.frontmatter.date
              ).toDateString()}`}</DateLine>
            </ButtonLink>
          ))}
        </ButtonLinkList>
      </>
    </Layout>
  )
}

Blog.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query BlogMainPage {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Blog
