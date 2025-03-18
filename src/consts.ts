export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'Sijan Thapa',
  DESCRIPTION:
    'I m Sijan, a Student I like Penguins and Apples, Hate Windows but was being forced to use it Make it simple but I am a really complicate person..',
  EMAIL: 'thapasijan171@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 4,
  SITEURL: 'https://sijanthapa.vercel.app',
}

export const NAV_LINKS: Link[] = [
  { href: '/', label: 'home' },
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  // { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/thapasijan17', label: 'GitHub' },
  { href: 'https://twitter.com/sijanthapa726', label: 'Twitter' },
  { href: 'thapasijan171@gmail.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
