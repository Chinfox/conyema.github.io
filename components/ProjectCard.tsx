import Image from 'next/image';
import { LinkButton } from '@/components'


interface link {
  demo: string,
  repo: string
}

const Card = ({ 
  title, description, imageSrc, links
}: { 
  title: string, 
  description: string, 
  imageSrc: string, 
  links: link,
}) => {
  return (
    <div className="card">
      {/* {imageSrc &&
        <Image
          className="object-cover mb-6 rounded-lg border border-gray-500"
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
          priority
        />
      } */}
      
      {imageSrc &&
        <Image
          className="object-cover w-full mb-6 rounded-lg border bg-gray-200 border-gray-100"
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
          loading = 'lazy'
        />
      }

      <h3 className="text-xl font-semibold my-4">{title}</h3>
      <p className="text-gray-600 my-5">{description}</p>
      {/* <a href="#" className="text-blue-500 hover:text-blue-600 font-semibold">Read More</a> */}
      
      {links &&
        <div className="flex justify-center space-x-4">
          <LinkButton text="Demo" href={links.demo} />
          <LinkButton text="Repo" href={links.repo} />
        </div>
      }

    
    </div>
  );
};

export default Card;
