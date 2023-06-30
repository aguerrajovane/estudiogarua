import Link from 'next/link'
import Image from 'next/image';

export default function Project({ project }) {
  return (
    <Link href={`/es/portafolio/${project.slug}`}>
        <div className="w-full flex flex-col justify-center sm:flex-row leading-normal md:leading-snug my-6">
            <div className="w-full sm:w-1/3">
            <Image
            src={project.frontmatter.cover_image}
            width={640}
            height={640}
            alt={project.frontmatter.alt}
            />
            </div>
            <div className="mt-4 ml-0 w-full sm:w-1/3 sm:ml-32 sm: flex flex-col justify-end">
            <h3 className="text-2xl md:text-4xl mb-2 md:mb-6 mt-2 md:mt-6 hover:underline hover:underline-offset-8">{project.frontmatter.title}</h3>
            <p className="text-xs">{project.frontmatter.lugar}</p>
            </div>
        </div>
    </Link>
  )
}