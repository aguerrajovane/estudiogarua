import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../../../components/es/Layout';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Image from 'next/image';

export default function ProjectPage({
  frontmatter: {
    title,
    date,
    cover_image,
    alt,
    excerpt,
    authors,
    author_description,
    publications,
    area,
    status,
    photosAuthors,
    location,
    type,
    images
  },
  slug,
  content
}) {
  return (
    <Layout>
      <NextSeo
        title={`Garúa | ${title}`}
        openGraph={{
          url: `https://www.estudiogarua.com/es/portafolio/${slug}`,
          title: `Garúa | ${title} `,
          description: `${excerpt}`,
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
      <div className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <Image
              src={cover_image}
              alt={alt}
              layout="responsive"
              objectFit="contain"
              className="px-2 sm:px-0"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </div>

      <main className="sm: py-8 pl-4 pr-4 flex max-w-6xl mx-auto">
        {/*Side*/}
        <div className="sticky top-[9rem] ml-auto right-0 h-full invisible lg:visible hidden lg:block">
          <div className="w-[15rem] bg-black">
            {/* Equipo */}
            <div className="grid grid-cols-2 items-start mb-2">
              <p className="text-xs font-bold w-fit">Equipo:</p>
              <div className="flex flex-col mb-2">
                {authors.map((authors, index) => (
                  <p key={index} className="mb-1 mx-4 w-full text-xs">
                    {authors}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Lugar */}
            <div className="grid grid-cols-2 items-start mb-2">
              <p className="text-xs font-bold">Lugar:</p>
              <p className="mb-2 mx-4 w-full text-xs">{location}</p>
            </div>

            {/* Tipo */}
            <div className="grid grid-cols-2 items-start mb-2">
              <p className="text-xs font-bold">Tipo:</p>
              <p className="mb-2 mx-4 w-full text-xs">{type}</p>
            </div>

            {/* Año */}
            <div className="grid grid-cols-2 items-start mb-2">
              <p className="text-xs font-bold">Año:</p>
              <p className="mb-2 mx-4 w-full text-xs">{date}</p>
            </div>

            {/* Estado */}
            <div className={`grid grid-cols-2 items-start mb-2 ${status === '' ? 'hidden' : ''}`}>
              <p className="text-xs font-bold">Estado:</p>
              <p className="mb-2 mx-4 w-full text-xs">{status}</p>
            </div>

            {/* Área */}
            <div className="grid grid-cols-2 items-start mb-2">
              <p className="text-xs font-bold">Área:</p>
              <p className="mb-2 mx-4 w-full text-xs">{area}</p>
            </div>

            {/* Fotos */}
            <div className={`grid grid-cols-2 items-start mb-2 ${status === '' ? 'hidden' : ''}`}>
              <p className="text-xs font-bold">Fotos:</p>
              <div className="flex flex-col mb-2">
                {photosAuthors.map((photosAuthors, index) => (
                  <p key={index} className="mb-1 mx-4 w-full text-xs">
                    {photosAuthors}
                  </p>
                ))}
              </div>
            </div>

            {/* Publicaciones */}
            <div className={`grid grid-cols-2 items-start mb-2 ${status === '' ? 'hidden' : ''}`}>
              <p className="text-xs font-bold">Publicaciones:</p>
              <div className="flex flex-col mb-2">
                {publications.map((publications, index) => (
                  <p key={index} className="mb-1 mx-4 w-full text-xs">
                    {publications}
                  </p>
                ))}
              </div>
            </div>


          </div>
        </div>
        <div className="w-full mx-auto justify-between  sm:pl-0">
          {/*Contenido*/}
          <div className="flex flex-col mx-auto w-full mt-0 sm:max-w-xl">
            <h1 className="text-2xl md:text-4xl leading-normal md:leading-snug mb-6 mt-0">{title}</h1>
            
            {/*Side Mobile*/}
            <div className="visible lg:invisible lg:hidden mt-4">
              <div className="bg-black">
                {/* Equipo */}
                <div className="grid grid-cols-2 items-start mb-2">
                  <p className="text-xs font-bold w-fit">Equipo:</p>
                  <div className="flex flex-col mb-2">
                    {authors.map((authors, index) => (
                      <p key={index} className="mb-1 mx-4 w-full text-xs">
                        {authors}
                      </p>
                    ))}
                  </div>
                </div>
                
                {/* Lugar */}
                <div className="grid grid-cols-2 items-start mb-2">
                  <p className="text-xs font-bold">Lugar:</p>
                  <p className="mb-2 mx-4 w-full text-xs">{location}</p>
                </div>

                {/* Tipo */}
                <div className="grid grid-cols-2 items-start mb-2">
                  <p className="text-xs font-bold">Tipo:</p>
                  <p className="mb-2 mx-4 w-full text-xs">{type}</p>
                </div>

                {/* Año */}
                <div className="grid grid-cols-2 items-start mb-2">
                  <p className="text-xs font-bold">Año:</p>
                  <p className="mb-2 mx-4 w-full text-xs">{date}</p>
                </div>

                {/* Estado */}
                <div className={`grid grid-cols-2 items-start mb-2 ${status === '' ? 'hidden' : ''}`}>
                  <p className="text-xs font-bold">Estado:</p>
                  <p className="mb-2 mx-4 w-full text-xs">{status}</p>
                </div>

                {/* Área */}
                <div className="grid grid-cols-2 items-start mb-2">
                  <p className="text-xs font-bold">Área:</p>
                  <p className="mb-2 mx-4 w-full text-xs">{area}</p>
                </div>

                {/* Fotos */}
                <div className={`grid grid-cols-2 items-start mb-2 ${status === '' ? 'hidden' : ''}`}>
                  <p className="text-xs font-bold">Fotos:</p>
                  <div className="flex flex-col mb-2">
                    {photosAuthors.map((photosAuthors, index) => (
                      <p key={index} className="mb-1 mx-4 w-full text-xs">
                        {photosAuthors}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Publicaciones */}
                <div className={`grid grid-cols-2 items-start mb-2 ${status === '' ? 'hidden' : ''}`}>
                  <p className="text-xs font-bold">Publicaciones:</p>
                  <div className="flex flex-col mb-2">
                    {publications.map((publications, index) => (
                      <p key={index} className="mb-1 mx-4 w-full text-xs">
                        {publications}
                      </p>
                    ))}
                  </div>
                </div>


              </div>
            </div>
            {/*Contenido del Markdown*/}
            <div className="mt-4">
              <div className="leading-relaxed" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('projects'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('projects', slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
