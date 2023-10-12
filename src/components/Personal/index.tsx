'use client'

/* eslint-disable @next/next/no-img-element */
import { playfair } from '@/utils/fonts'
import clsx from 'clsx'
import Button from '../Button'
import { MessagesSquare, Scale } from 'lucide-react'

const Personal: React.FC = () => {
  const handleOpenWhatsapp = () => {
    window.open('https://wa.me/+5511952875150', '_blank')
  }

  return (
    <section className="relative flex max-w-screen-2xl items-center px-3 md:px-app">
      <div className="z-10 flex flex-col items-start gap-16 py-20 md:py-32">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full bg-sky-200 p-1 ">
            <div className="rounded-full bg-sky-900 px-6 py-2 text-white md:py-1">
              Especialidades
            </div>
            <span className="mr-3 leading-4 text-sky-900">
              Empresarial, societário e contratos
            </span>
          </div>
          <h2
            className={clsx(
              'max-w-2xl text-6.5xl/tight text-sky-900',
              playfair.className,
            )}
          >
            Soluções estratégicas para seus negócios
          </h2>
        </div>
        <h3 className="max-w-xl text-2xl font-medium text-neutral-900 lg:text-neutral-500">
          Nós estaremos com vocês para resolver os seus problemas empresarias e
          preveni-los com os melhores serviços especializados para você.
        </h3>
        <Button
          className="w-full md:w-auto"
          text="WhatsApp"
          Icon={<MessagesSquare />}
          onClick={handleOpenWhatsapp}
        />
        <p className="hidden text-xl text-neutral-500 md:inline-block">
          Atendimento exclusivo e imediato
        </p>
      </div>
      <div className="absolute -right-14 bottom-14 flex justify-end opacity-30 md:justify-center lg:bottom-0 lg:opacity-100">
        <div className="flex h-[50rem] w-[50rem] rotate-1 justify-center rounded-full bg-sky-50 p-2 ">
          <div className="h-[39em] w-[39em] rounded-full bg-sky-100"></div>
        </div>
        <div className="absolute flex flex-col place-content-end items-center md:-bottom-5">
          <img
            src="cintia-godoi.png"
            className="max-w-2xl bg-clip-content md:drop-shadow-2xl"
            alt="Dra.Cintia Godoi, mulher branca, loira e vestindo um blazer preto"
          />
          <div className="z-10 ml-5 flex flex-col items-center rounded-lg bg-white px-14 py-5 md:-mt-4 md:shadow-2xl">
            <p className="text-2xl font-semibold text-sky-950 md:text-sky-900">
              Cintia Godoi
            </p>
            <span className="flex gap-2 text-base font-medium text-neutral-950 md:text-neutral-500">
              <Scale />
              Advogada especialista
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Personal
