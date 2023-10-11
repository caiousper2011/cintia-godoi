import { playfair } from '@/utils/fonts'
import clsx from 'clsx'

const Personal: React.FC = () => {
  return (
    <section className="px-app relative flex items-center">
      <div className="flex flex-col gap-16 py-32">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full bg-sky-200 p-1">
            <div className="rounded-full bg-sky-900 px-6 py-1 text-white">
              Especialidades
            </div>
            <span className="mr-3 text-sky-900">
              Empresarial, societário e contratos
            </span>
          </div>
          <h2
            className={clsx(
              'text-6.5xl/tight max-w-2xl text-sky-900',
              playfair.className,
            )}
          >
            Soluções estratégicas para seus negócios
          </h2>
        </div>
        <h3 className="max-w-xl text-2xl font-medium text-neutral-600">
          Nós estaremos com vocês para resolver os seus problemas ewmpresarias e
          preveni-los com os melhores serviços especializados para você.
        </h3>
      </div>
      <div className="absolute right-0 top-0 h-full w-auto bg-neutral-50 opacity-40 md:opacity-100">
        2
      </div>
    </section>
  )
}

export default Personal
