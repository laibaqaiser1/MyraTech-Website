import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyraTech - Software Services & Solutions | Full Stack Development',
  description: 'MyraTech is a leading software services and solutions company in Abu Dhabi, UAE. We specialize in custom web development, mobile apps, cloud solutions, and digital transformation services.',
  keywords: 'Software Development, Web Development, Mobile Apps, Cloud Solutions, Digital Transformation, Abu Dhabi, UAE, Full Stack Development, Custom Software, Business Automation',
  authors: [{ name: 'MyraTech Software Services & Solutions' }],
  openGraph: {
    title: 'MyraTech - Software Services & Solutions',
    description: 'Transforming ideas into powerful, scalable software solutions. Expert development services in Abu Dhabi, UAE.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
