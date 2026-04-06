import { I18nProvider } from './lib/i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Studio from './components/Studio'
import Cours from './components/Cours'
import Planning from './components/Planning'
import Tarifs from './components/Tarifs'
import Instructeurs from './components/Instructeurs'
import Temoignages from './components/Temoignages'
import Blog from './components/Blog'
import Newsletter from './components/Newsletter'
import Reservation from './components/Reservation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

export default function Home() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <Hero />
        <Studio />
        <Cours />
        <Planning />
        <Tarifs />
        <Instructeurs />
        <Temoignages />
        <Blog />
        <Newsletter />
        <Reservation />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </I18nProvider>
  )
}
