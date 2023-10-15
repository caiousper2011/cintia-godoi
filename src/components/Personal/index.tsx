'use client'

/* eslint-disable @next/next/no-img-element */
import { playfair } from '@/utils/fonts'
import clsx from 'clsx'
import Button from '../Button'
import { MessagesSquare, Scale, Linkedin, ArrowDownCircle } from 'lucide-react'

const Personal: React.FC = () => {
  const handleOpenWhatsapp = () => {
    window.open('https://wa.me/+5511940412023', '_blank')
  }

  const handleOpenLinkedin = () => {
    window.open('https://www.linkedin.com/in/cintia-godoi-/', '_blank')
  }

  return (
    <section className="relative flex max-w-screen-2xl items-center px-3  xl:px-app">
      <div className="z-10 flex flex-col items-start gap-10 py-20 sm:py-32">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3 rounded-full bg-sky-200 p-1 ">
            <div className="xs:py-2 rounded-full bg-sky-900 px-6 py-3 text-white md:py-1">
              Especialidades
            </div>
            <span className="mr-3 leading-4 text-sky-900">
              Empresarial, societário e contratos
            </span>
          </div>
          <h2
            className={clsx(
              'max-w-3xl text-4xl text-sky-900 md:text-6xl/tight',
              playfair.className,
            )}
          >
            Abra sua empresa, diminua seus custos e aumente seus resultados
          </h2>
        </div>
        <h3 className="max-w-3xl text-xl font-medium text-neutral-900 lg:text-neutral-500">
          Seja bem-vindo(a), aqui você descobrirá como abrir sua empresa,
          reduzir custos e maximizar seus resultados. Explore estratégias e
          soluções inovadoras que o ajudarão a alcançar o sucesso empresarial
          que você merece.
          <span className="mt-4 inline-flex items-center gap-2 font-semibold text-sky-950 ">
            <ArrowDownCircle /> Clique no botão abaixo para entrar em contato.
          </span>
        </h3>
        <div className="flex gap-2">
          <Button
            className="w-full md:w-auto"
            text="WhatsApp"
            Icon={<MessagesSquare />}
            onClick={handleOpenWhatsapp}
          />
          <Button
            className="w-full md:w-auto"
            text="LinkedIn"
            Icon={<Linkedin />}
            onClick={handleOpenLinkedin}
          />
        </div>
        <p className="hidden text-xl text-neutral-500 md:inline-block">
          Atendimento exclusivo e imediato
        </p>
      </div>
      <div className="absolute -right-24 bottom-14 flex justify-end opacity-20 md:-right-16 md:justify-center lg:bottom-0 lg:opacity-100 xl:-right-14">
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
