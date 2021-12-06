import Link from 'next/link'
import Image from 'next/image'
import { ImageContent } from 'types/cms/work'

type Props = {
  id: string
  title: string
  description: string
  imageContent: ImageContent
}

const Card = ({ id, title, description, imageContent }: Props): JSX.Element => {
  const href = `/works/${id}`
  const { image, alt } = imageContent

  return (
    <div>
      <Link href={href} passHref>
        <a className="block border border-gray-200 z-0 rounded-3xl shadow-">
          <Image
            className="rounded-3xl filter hover:brightness-75 transition-all"
            src={image.url}
            alt={alt}
            width={image.width}
            height={image.height}
            layout="responsive"
          />
        </a>
      </Link>
      <div className="mt-4 ml-1">
        <Link href={href} passHref>
          <a className="inline-block hover:text-arrow2nd transition-colors">
            {title}
          </a>
        </Link>
        <p className="block text-sm text-natural-gray">{description}</p>
      </div>
    </div>
  )
}

export default Card
