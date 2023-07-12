import Link from 'next/link'
import dynamic from "next/dynamic"
import Image from 'next/image';

const DynamicButtonHoverRight = dynamic(() => import("../../components/es/ButtonHoverRight"), { ssr: false });

export default function Post({ post }) {
  return (
    <div className="w-full sm:w-full pr-0 sm:pr-4 flex flex-col justify-center mb-10 leading-normal">
      <div className="w-full sm:max-w-xs">
      <div className="w-full">
        <Image
          src={post.frontmatter.cover_image} 
          width={640}
          height={640}
          alt={post.frontmatter.alt}
        />
        </div>
      <div className="mt-4 ml-0 w-full"> 
        <p className='text-xs'>{post.frontmatter.date}</p>
        <h3 className="text-xl mb-2 mt-2">{post.frontmatter.title}</h3>
        <p className="text-sm mb-4">{post.frontmatter.excerpt}</p>
      </div>
      <div>
        <Link href={`/blog/${post.slug}`}>
            <DynamicButtonHoverRight> Ver más </DynamicButtonHoverRight>
        </Link>
      </div>
      </div>
    </div>
  )
}