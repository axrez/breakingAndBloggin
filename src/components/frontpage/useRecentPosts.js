import { useStaticQuery, graphql } from 'gatsby'

export const useRecentPosts = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query RecentPost {
        allMarkdownRemark(
          limit: 3
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
  )
  return allMarkdownRemark.edges
}
