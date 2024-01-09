import { jakarta } from '@/utils/fonts'
import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Dra. Cintia Godoi | Direito Empresarial, Societário e Contratos',
  description:
    'Explore a expertise da Dra. Cintia Godoi em direito empresarial, societário e contratos. Com anos de experiência, fornecemos soluções jurídicas personalizadas para empresas e empreendedores. Conte com nossa dedicação e excelência.',
  keywords: [
    'Direito Empresarial',
    'Direito Societário',
    'Contratos Comerciais',
    'Advogado Empresarial',
    'Consultoria Jurídica',
    'Especialista em Contratos',
    'Assessoria Empresarial',
    'Dra. Cintia Godoi',
  ],
  authors: {
    name: 'Caio Barbosa de Almeida',
    url: 'www.linkedin.com/in/caio-barbosa-de-almeida-baba15171',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="antialiased">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11468092198">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11468092198');
</script>
      </Head>
      <body className={jakarta.className}>
        <div className="min-h-screen overflow-x-clip">{children}</div>
      </body>
    </html>
  )
}
