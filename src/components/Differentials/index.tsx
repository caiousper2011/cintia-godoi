import { playfair, poppins } from '@/utils/fonts'
import clsx from 'clsx'
import CardDescription from '../CardDescription'

const Differentials = () => {
  return (
    <div className="bg-sky-50">
      <section className="grid max-w-screen-2xl grid-cols-1 items-center gap-8 px-3 py-20 sm:py-32 lg:grid-cols-3 lg:flex-row xl:px-app">
        <div className="space-y-10">
          <h4
            className={clsx(
              'text-4xl font-bold text-neutral-900 lg:text-5xl',
              playfair.className,
            )}
          >
            Nós ajudamos sua empresa.
          </h4>
          <p className={clsx('text-xl text-neutral-700', poppins.className)}>
            Nós ajudamos sua empresa a prosperar. Com soluções personalizadas,
            expertise e compromisso, estamos aqui para impulsionar seu sucesso,
            superar desafios e atingir seus objetivos empresariais.
          </p>
        </div>
        <div className="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <CardDescription
            title="Assessoria Juridíca"
            description="Oferecemos orientação legal estratégica para garantir que sua empresa tome decisões adequadas, de forma a proteger seus interesses e evitar litígios."
          />
          <CardDescription
            title="Societário"
            description="Ajudamos a criar sua empresa, estruturar e gerir suas relações societárias, otimizando a governança e maximizando o potencial de crescimento de sua empresa.
"
          />
          <CardDescription
            title="Tributário"
            description="Oferecemos assessoria especializada em Direito Tributário para ajudar sua empresa a reduzir custos fiscais, evitar penalidades e garantir conformidade, permitindo que você maximize seus resultados financeiros.
"
          />
          <CardDescription
            title="Contratos"
            description="Nossa expertise na elaboração, revisão e negociação de contratos assegura que seus acordos sejam sólidos, protegendo seus interesses e minimizando riscos."
          />
          <CardDescription
            title="Compliance"
            description="Guiamos sua empresa para a conformidade com regulamentações e práticas éticas, fortalecendo sua reputação, mitigando riscos e promovendo uma cultura de integridade."
          />
          <CardDescription
            title="Planejamento Patrimonial"
            description="Nossa expertise em planejamento patrimonial oferece as ferramentas necessárias para proteger seus ativos, otimizar a sucessão e garantir que seu legado seja preservado para as gerações futuras, com foco na segurança e na realização de seus objetivos financeiros."
          />
        </div>
      </section>
    </div>
  )
}

export default Differentials
