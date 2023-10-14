import { poppins } from '@/utils/fonts'
import clsx from 'clsx'

const Header: React.FC = () => {
  return (
    <header
      className={clsx(
        'sticky left-0 top-0 z-20 flex w-full items-center justify-center gap-2 bg-white p-2 py-5 text-xl font-bold text-white md:px-app lg:justify-start',
        poppins.className,
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
