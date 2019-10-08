import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/frontpage/Hero'
import About from '../components/frontpage/About'
import RecentPosts from '../components/frontpage/RecentPosts'
import ContactSection from '../components/frontpage/Contact'

const Index = () => (
  <Layout>
    <>
      <Hero />
      <About />
      <RecentPosts />
      <ContactSection />
    </>
  </Layout>
)

export default Index
