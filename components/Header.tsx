'use client' // 标记为 Client Component

import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Typewriter from 'typewriter-effect'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  // 获取当前路径
  const pathname = usePathname()
  const decodedPathname = decodeURIComponent(pathname)

  return (
    <header className={headerClass}>
      <div className="flex items-center">
        <Link href="/" aria-label={siteMetadata.headerTitle} className="flex items-center">
          <Image
            src="/static/favicons/apple-touch-icon.png"
            alt="logo"
            width={22}
            height={22}
            className="mr-2"
          />
          <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
            {`~${decodedPathname}`}{' '}
            <Typewriter
              options={{
                strings: [],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
