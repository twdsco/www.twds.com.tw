import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Projects />
      <About />
      <Footer />
    </main>
  )
} 