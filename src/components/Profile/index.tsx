const Profile = () => {
  return (
    <div className="bg-white">
      <section className="flex max-w-screen-2xl px-3 py-20 sm:py-32 xl:px-app">
        <div className="flex w-full flex-col overflow-hidden rounded-lg shadow-lg md:flex-row">
          <div className="relative md:max-w-sm">
            <img
              src="cintia-godoi-profile.jpg"
              className="h-full min-w-[350px] object-cover"
              alt="Dra.Cintia Godoi, loira do cabelo cumprido, vestindo um blazer preto com camisa laranja"
            />
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-t from-neutral-950 to-transparent opacity-10 duration-500 hover:opacity-50" />
            {/* <div className="bg-white/30 backdrop-blur-md"></div> */}
          </div>
          <div className="space-y-4 p-6">
            <h4 className="text-3xl font-semibold tracking-widest text-sky-900">
              Cintia Godoi
            </h4>
            <p className="text-justify text-xl text-neutral-700">
              Meu nome é Cíntia, sou Advogada especializada em Direito
              Empresarial, abrangendo relações societárias e cntratuais. Minha
              jornada profissional é marcada por uma sólida experiência na área
              de societário, desde a constituição de empresas até a resolução de
              complexos conflitos empresariais. Minha expertise inclui a análise
              detalhada de atos societários, exclusão de sócios, destituição de
              administradores, Governança Corporativa e Planejamento
              Patrimonial. Uma das minhas principais habilidades é a análise,
              elaboração e implementação de acordos de sócios, com foco na
              limitação da concorrência e na prevenção de abusos empresariais.
              Minha missão profissional é assegurar a conformidade legal e o
              sucesso das empresas em todas as etapas de suas operações. Será um
              prazer atendê-lo (a), para que juntos, possamos previnir litígios
              e gerir seus negócio estrategicamente.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile
