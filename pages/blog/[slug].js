import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../../components/es/Layout.js'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Image from 'next/image';

export default function PostPage({
  frontmatter: { title, date, cover_image, alt, excerpt, author, author_image, author_description, tags, topics },
  slug, 
  content,
}) {
  return (
    <Layout>
      <NextSeo
        title={`Garúa | ${title}`}
        openGraph={{
          url: `https://www.estudiogarua.com/blog/${slug}`,
          title: `Garúa | ${title} `,
          description:`${excerpt}`,
          siteName: 'Garúa',
          type: 'article',
          article: {
            publishedTime: date,
            author: author,
            tags: tags
          },
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_BASE_URL}${cover_image}`,
              width: 500,
              height: 500,
              alt: `${alt}`, 
            },
          ],
        }}
      />
      <main className="sm: py-8 pl-4 pr-4 flex flex-row-reverse max-w-6xl mx-auto">
        {/*Side*/}
        <div className="sticky top-[9rem] ml-auto right-0 h-full invisible lg:visible hidden lg:block">
          <div className="w-[15rem] bg-black">
            {/*Author*/}
            <div className="mt-0 mx-1">
              <img
                src={author_image} 
                width={80}
                height={80}
                alt={author}
                className="rounded-full"
              />
            </div>
            <p className="mt-4 text-base mx-1">{author}</p>
            <p className="mt-2 text-xs leading-relaxed mx-1">{author_description}</p>
            {/*Tags*/}
            <div className="mt-6">
              <div className="flex flex-wrap">
                {topics.map((topic, index) => (
                  <p key={index} className="px-4 py-2 mt-2 mx-1 w-fit text-xs bg-gray rounded-full">
                    {topic}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto justify-between lg:pl-28 ">
          {/*Contenido*/}
          <div className="flex flex-col max-w-6xl mx-auto lg:mx-0 w-full mt-0 sm:max-w-lg">
            <p className="mb-4 text-sm">{date}</p>
            <h1 className="text-2xl md:text-4xl leading-normal md:leading-snug mb-4">{title}</h1>
            <p className="mb-4">{excerpt}</p>
            {/*Side mobile*/}
            <div className="visible lg:invisible lg:hidden mt-4">
              <div className="w-full mt-2">
                {/*Author*/}
                <div className="flex justify-start items-start">
                  <div className="mt-0">
                    <img
                      src={author_image} 
                      width={50}
                      height={50}
                      alt={author}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col ml-4 justify-start items-start">
                    <p className="mt-0 text-sm">{author}</p>
                    <p className="mt-2 text-xs leading-relaxed">{author_description}</p>
                  </div>
                </div>
                {/*Tags*/}
                <div className="mt-2">
                  <div className="flex flex-wrap mb-6">
                    {topics.map((topic, index) => (
                      <p key={index} className="px-4 py-2 mt-2 mx-1 w-fit text-xs bg-gray rounded-full">
                        {topic}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Image
                src={cover_image} 
                width={640}
                height={640}
                alt={alt}
              />
            </div>
            {/*Markdown*/}
            <div className="mt-4">
              <div className="leading-relaxed" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
          </div>
        </div>  
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
