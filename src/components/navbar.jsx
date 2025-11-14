'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import { 
  Bars2Icon,
  ChevronDownIcon,
} from '@heroicons/react/24/solid'
import {
  BookOpenIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UsersIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from '@/components/logo'

const engagement = [
  { name: 'About', href: 'about', icon: InformationCircleIcon },
  { name: 'Projekte', href: 'projekte', icon: UsersIcon },
  { name: 'Hardware', href: 'hardware', icon: BriefcaseIcon },
  { name: 'Cybersicherheit', href: 'cybersicherheit', icon: ShieldCheckIcon },
]

const resources = [
  { name: 'Beratung', href: 'beratung', icon: UserGroupIcon },
  { name: 'Webinars', href: 'webinar', icon: VideoCameraIcon },
  { name: 'Preise', href: 'preise', icon: VideoCameraIcon },
]

const recentPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    category: { title: 'Marketing', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    description:
      'Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    category: { title: 'Sales', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et.',
  },
]

const links = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/company', label: 'Company' },
  { href: '/blog', label: 'Blog' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex items-center gap-2">
      <Popover>
        <PopoverButton className="inline-flex items-center gap-x-1 px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/5 rounded-lg">
          Solutions
          <ChevronDownIcon aria-hidden="true" className="size-5" />
        </PopoverButton>

        <PopoverPanel
          transition
          className="fixed left-1/2 -translate-x-1/2 z-50 mt-5 w-screen max-w-7xl transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
        >
          <div className="absolute inset-0 top-1/2 bg-white shadow-lg ring-1 ring-gray-900/5 rounded-lg" />
          <div className="relative bg-white rounded-lg">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-2">
              <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
                <div>
                  <h3 className="text-sm/6 font-medium text-gray-500">Engagement</h3>
                  <div className="mt-6 flow-root">
                    <div className="-my-2">
                      {engagement.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex gap-x-4 py-2 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50 rounded-md px-2"
                        >
                          <item.icon aria-hidden="true" className="size-6 flex-none text-gray-400" />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm/6 font-medium text-gray-500">Resources</h3>
                  <div className="mt-6 flow-root">
                    <div className="-my-2">
                      {resources.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex gap-x-4 py-2 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50 rounded-md px-2"
                        >
                          <item.icon aria-hidden="true" className="size-6 flex-none text-gray-400" />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
                <h3 className="sr-only">Recent posts</h3>
                {recentPosts.map((post) => (
                  <article
                    key={post.id}
                    className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
                  >
                    <div className="relative flex-none">
                      <img
                        alt=""
                        src={post.imageUrl}
                        className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover sm:aspect-video sm:h-32 lg:h-auto"
                      />
                      <div className="absolute inset-0 rounded-lg ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                    <div>
                      <div className="flex items-center gap-x-4">
                        <time dateTime={post.datetime} className="text-sm/6 text-gray-600">
                          {post.date}
                        </time>
                        <a
                          href={post.category.href}
                          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
                        >
                          {post.category.title}
                        </a>
                      </div>
                      <h4 className="mt-2 text-sm/6 font-semibold text-gray-900">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h4>
                      <p className="mt-2 text-sm/6 text-gray-600">{post.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-100">
              <div className="mx-auto max-w-7xl px-6 py-6">
                <div className="flex items-center gap-x-6">
                  {links.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-sm font-semibold text-gray-900 hover:text-gray-600"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </Popover>
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        <motion.div
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.15,
            ease: 'easeInOut',
            rotateX: { duration: 0.3 },
          }}
        >
          <div className="text-base font-medium text-gray-950 mb-2">Solutions</div>
          <div className="pl-4 space-y-2">
            <div className="text-sm font-medium text-gray-500 mb-2">Engagement</div>
            {engagement.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex gap-x-3 py-1.5 text-sm text-gray-900"
              >
                <item.icon className="size-5 text-gray-400" />
                {item.name}
              </a>
            ))}
            <div className="text-sm font-medium text-gray-500 mt-4 mb-2">Resources</div>
            {resources.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex gap-x-3 py-1.5 text-sm text-gray-900"
              >
                <item.icon className="size-5 text-gray-400" />
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
        
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: (linkIndex + 1) * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-base font-medium text-gray-950">
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }) {
  return (
    <div className="pt-4 sm:pt-4">
      <Disclosure as="header" className="sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-2 lg:px-2">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Link href="/" title="Home">
                <Logo className="h-22" />
              </Link>
              {banner && (
                <div className="relative hidden items-center py-3 lg:flex">
                  {banner}
                </div>
              )}
            </div>
            
            <DesktopNav />
            <MobileNavButton />
          </div>
        </div>
        <MobileNav />
      </Disclosure>
    </div>
  )
}