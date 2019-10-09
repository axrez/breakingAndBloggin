import React from 'react'
import { useRecentPosts } from './useRecentPosts'
import { ButtonLink, ButtonLinkList, DateLine, Heading } from '../style'
import NextNavArrow from '../../svg/nextNavArrow'

const RecentPosts = () => {
  const posts = useRecentPosts()
  return (
    <>
      <Heading overlay="true">Latest Posts</Heading>
      <ButtonLinkList>
        {posts.map(({ node }, index) => (
          <ButtonLink secondary="true" key={index} to={node.fields.slug}>
            {node.frontmatter.title}
            <NextNavArrow />
            <DateLine>{`${new Date(
              node.frontmatter.date
            ).toDateString()}`}</DateLine>
          </ButtonLink>
        ))}
      </ButtonLinkList>
    </>
  )
}

export default RecentPosts
