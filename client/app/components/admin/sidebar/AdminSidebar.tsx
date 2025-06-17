'use client'

import { useState } from 'react'
import {
  HomeIcon,
  UsersIcon,
  FileTextIcon,
  VideoIcon,
  LayersIcon,
  SettingsIcon,
  MenuIcon,
  XIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

const navItems = [
  { title: 'Dashboard', icon: HomeIcon },
  { title: 'Users', icon: UsersIcon },
  { title: 'Invoices', icon: FileTextIcon },
]

const contentItems = [
  { title: 'Create Course', icon: LayersIcon },
  { title: 'Live Courses', icon: VideoIcon },
]

const customizeItems = [
  { title: 'Hero', icon: LayersIcon },
  { title: 'FAQ', icon: FileTextIcon },
  { title: 'Categories', icon: SettingsIcon },
]

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden p-4">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={clsx(
          'fixed top-0 left-0 h-full bg-[#0e1d34] text-white z-40 w-64 transform transition-transform duration-200 ease-in-out',
          {
            '-translate-x-full md:translate-x-0': !isOpen,
            'translate-x-0': isOpen,
          }
        )}
      >
        <div className="flex flex-col items-center py-6">
          <Image
            src="/avatar.svg"
            alt="Avatar"
            width={64}
            height={64}
            className="rounded-full border-4 border-blue-500"
          />
          <p className="mt-2 font-semibold text-white">shahriar sajeeb</p>
          <p className="text-sm text-gray-400">- Admin</p>
        </div>

        <nav className="space-y-6 px-4 text-sm">
          <Section title="">
            {navItems.map((item) => (
              <NavItem key={item.title} title={item.title} Icon={item.icon} />
            ))}
          </Section>
          <Section title="Data">
            <NavItem title="Users" Icon={UsersIcon} />
            <NavItem title="Invoices" Icon={FileTextIcon} />
          </Section>
          <Section title="Content">
            {contentItems.map((item) => (
              <NavItem key={item.title} title={item.title} Icon={item.icon} />
            ))}
          </Section>
          <Section title="Customization">
            {customizeItems.map((item) => (
              <NavItem key={item.title} title={item.title} Icon={item.icon} />
            ))}
          </Section>
          <Section title="Controllers">
            <NavItem title="Manage Team" Icon={UsersIcon} />
          </Section>
        </nav>
      </aside>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      {title && <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-2">{title}</h4>}
      <div className="space-y-1">{children}</div>
    </div>
  )
}

function NavItem({ title, Icon }: { title: string; Icon: React.ElementType }) {
  return (
    <Link
      href="#"
      className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      <Icon className="w-5 h-5" />
      <span>{title}</span>
    </Link>
  )
}

