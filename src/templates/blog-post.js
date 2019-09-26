/* eslint-disable react/no-danger */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import ImageContainer from '../components/image'
import Layout from '../components/Layout'
import { BlogContent, Heading } from '../components/style'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <>
        <ImageContainer fluid={data.featuredImage.childImageSharp.fluid} />
        <Heading>{post.frontmatter.title}</Heading>
        <BlogContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query BlogPost($slug: String!, $featured_image: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        featured_image
      }
    }
    featuredImage: file(relativePath: { eq: $featured_image }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default BlogPost
