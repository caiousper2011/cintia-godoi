'use client'

import { poppins } from '@/utils/fonts'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolled(Boolean(window.scrollY))
    })
  }, [])

  return (
    <header
      className={clsx(
        'sticky left-0 top-0 z-20 flex w-full items-center justify-center gap-2 bg-white p-2 py-5 text-xl font-bold text-white transition md:px-app lg:justify-start',
        poppins.className,
        { 'shadow-lg': isScrolled },
      )}
      tabIndex={0}
      aria-label="Cintia Godoi Advocacia"
      role="heading"
      aria-level={1}
    >
      <div className="rounded-full bg-sky-900 px-1 py-1 ">CG</div>
      <h1 className="text-center text-neutral-700">Cintia Godoi - Advocacia</h1>
    </header>
  )
}

export default Header
