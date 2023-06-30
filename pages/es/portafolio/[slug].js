import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../../../components/es/Layout'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Image from 'next/image';

export default function ProjectPage({
  frontmatter: { title, date, cover_image, alt, excerpt, author, author_image, author_description, publications },
  slug, 
  content,
}) {
  return (
    <Layout>
      <NextSeo
        title={`Garúa | ${title}`}
        openGraph={{
          url: `https://www.estudiogarua.com/es/portafolio/${slug}`,
          title: `Garúa | ${title} `,
          description:`${excerpt}`,
          siteName: 'Garúa',
          type: 'website',
          images: [
            {
              url: "https://raw.githubusercontent.com/aguerrajovane/estudiogarua/main/public/images/logo.png", // hacerlo dinamico
              width: 500,
              height: 500,
              alt: "Garúa", // hacerlo dinamico
            },
          ],
        }}
      />
        <div className="w-full">
        <Image
            src={cover_image} 
            width={1200}
            height={1200}
            alt={alt}
        />
        </div>
      <main className="flex flex-col w-full max-w-6xl mx-auto justify-between sm:pl-28 sm: py-8 pl-4 pr-4">
        {/*Side*/}
        <div className="sticky top-28 invisible lg:visible">
          <div className="absolute bg-black right-0 top-0 w-[15rem]">
            {/*Author*/}
            <div className="flex">
                <p className="text-xl font-bold">Autor</p>
                <div className="flex flex-col mb-2">
                    {author.map((author, index) => (
                    <p key={index} className="px-0 py-0 mt-4 mx-1 w-fit text-xs">
                        {author}
                    </p>
                    ))}
                </div>
            </div>
            <p className="mt-2 text-xs leading-relaxed">{author_description}</p>
            {/*Tags*/}
            <div className="mt-6">
              <p className="text-xl font-bold">Temas relacionados</p>
                
            </div>
          </div>
        </div>
        {/*Contenido*/}
        <div className="w-full mt-0 sm:mt-0 h-full sm:max-w-lg">
          <h1 className="text-2xl md:text-4xl leading-normal md:leading-snug	mb-6">{title}</h1>
          {/*Side mobile*/}
          <div className="visible lg:invisible lg:hidden mt-4">
            <div className="w-full">
              {/*Author*/}
              <p className="text-sm font-bold">Autor</p>
              <div className="flex justify-start items-start">
                <div className="mt-2">
                  <img
                    src={author_image} 
                    width={80}
                    height={80}
                    alt={author}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col ml-4 justify-start items-start">
                  <p className="mt-1 text-sm">{author}</p>
                  <p className="mt-2 text-xs leading-relaxed">{author_description}</p>
                </div>
              </div>
              {/*Tags*/}
              <div className="mt-6">
                <p className="text-sm font-bold">Temas relacionados</p>
                
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="leading-relaxed" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('projects'))

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
    path.join('projects', slug + '.md'),
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
