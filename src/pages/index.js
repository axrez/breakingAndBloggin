import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Hero from '../components/frontpage/Hero'
import About from '../components/frontpage/About'
import RecentPosts from '../components/frontpage/RecentPosts'
import ContactSection from '../components/frontpage/Contact'

const Index = () => (
  <Layout>
    <>
      <SEO
        meta="Hi, I’m a frontend dev based out of Zealand, Denmark. I love technologies such as JavaScript, React, Gatsby, next.js and node.js"
        title="Emil Østergaard"
      />
      <Hero />
      <About />
      <RecentPosts />
      <ContactSection />
    </>
  </Layout>
)

export default Index
