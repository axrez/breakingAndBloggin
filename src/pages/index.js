import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/frontpage/Hero'
import About from '../components/frontpage/About'
import RecentPosts from '../components/frontpage/RecentPosts'

const Index = () => (
  <Layout>
    <>
      <Hero />
      <About />
      <RecentPosts />
    </>
  </Layout>
)

export default Index
