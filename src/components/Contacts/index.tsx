import { poppins } from '@/utils/fonts'
import clsx from 'clsx'
import { Phone, Mail } from 'lucide-react'

const Contacts = () => {
  return (
    <div className="bg-sky-900">
      <section className="flex max-w-screen-2xl flex-col items-center gap-12 px-3 py-14 md:justify-between md:gap-16 lg:flex-row xl:px-app">
        <div className="flex max-w-lg flex-col items-center">
          <div
            className={clsx(
              'flex items-center justify-center gap-2 pb-5 text-xl font-bold text-sky-900',
              poppins.className,
            )}
            tabIndex={0}
            aria-label="Cintia Godoi Advocacia"
            role="heading"
            aria-level={1}
          >
            <div className="rounded-full bg-white px-1 py-1 ">CG</div>
            <p className="text-center text-sky-50">Cintia Godoi - Advocacia</p>
          </div>
          <p className="text-center text-lg text-sky-50">
            Escritório de advocacia especialista em Direito Empresarial,
            Compliance, Consultoria e Assessoria Jurídica
          </p>
        </div>
        <div className=" flex flex-col items-center text-sky-50 md:items-start">
          <h6 className="pb-4 text-xl font-medium text-sky-100">Contato</h6>
          <p className="mb-2 flex gap-2">
            <Phone /> (11) 94041-2023
          </p>
          <p className="mb-2 flex gap-2">
            <Mail /> cintia_ehr@hotmail.com
          </p>
        </div>
      </section>
      <footer className="bg-sky-950">
        <div className="flex max-w-screen-2xl justify-center py-4 text-white">
          Copyright © 2023 Cintia Godoi.
        </div>
      </footer>
    </div>
  )
}

export default Contacts
