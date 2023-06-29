import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../components/es/Layout.js'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/es/Post.js'
import { sortByDate } from '../utils'

export default function Blog ({ posts }) {
  return (
    <Layout> 
      <NextSeo
        title="Garúa | Blog"
        description="Estudio de arquitectura, diseño urbano y construcción."
        openGraph={{
          url: 'https://www.estudiogarua.com/es/blog',
          title: 'Garúa',
          description: 'Estudio de arquitectura, diseño urbano y construcción.',
          siteName: 'Garúa',
        }}
      />
     <main className="flex flex-col w-full max-w-6xl mx-auto justify-between lg:pl-28 sm: py-8 pl-4 pr-4">
        {/* Header */}
        <header className="relative h-screen my-0 py-0">
          <h1 className="absolute bottom-80 sm:bottom-60 text-5xl md:text-6xl font-bold leading-snug mb-4 fade-in-up">Blog</h1>
        </header>
        {/* Contenido */}
        <div className="w-full mt-10 sm:mt-0 h-full sm:min-h-screen flex flex-col justify-start">
          <div className="">
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  )
}
export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
