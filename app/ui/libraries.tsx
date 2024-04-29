import Image from 'next/image'
import { Card } from './card'

const libraries = [
  {
    key: '1',
    name: 'PHP library',
    image: '/PHP-logo.svg',
    link: 'https://github.com/mymoid/mymoid-php',
    badge: (
      // eslint-disable-next-line @next/next/no-img-element
      <img alt="composer version" src="http://poser.pugx.org/mymoid/api/v" />
    ),
    disabled: false
  },
  {
    key: '2',
    name: 'TypeScript/JavaScript library',
    image: '/Typescript_logo_2020.svg',
    link: 'https://github.com/mymoid/mymoid-js',
    badge: (
      // eslint-disable-next-line @next/next/no-img-element
      <img alt="npm version" src="https://img.shields.io/npm/v/@mymoid/api" />
    ),
    disabled: false
  }
]

export default function LibrariesSection() {
  return (
    <div className="container">
      <Card title="Client libraries">
        <div className="flex flex-col md:flex-row gap-6 px-[--space-6] pb-[--space-6]">
          {libraries.map(({ key, image, name, link, badge, disabled }) => (
            <a
              key={key}
              className={[
                'p-[--space-6] bg-[--colors-surface-primary] rounded-2xl flex flex-col items-center flex-1',
                disabled ? 'opacity-40 pointer-events-none' : ''
              ].join(' ')}
              href={link}
              target="_blank"
            >
              <div className="mx-auto mb-3 relative w-24 h-16">
                <Image
                  src={image}
                  alt={name}
                  layout="fill"
                  objectFit="contain"
                  className=""
                />
              </div>
              <h4 className="font-medium mb-4">{name}</h4>
              {badge && <div>{badge}</div>}
            </a>
          ))}
        </div>
      </Card>
    </div>
  )
}
