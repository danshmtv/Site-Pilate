'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useI18n, localeLabels, type Locale } from '../lib/i18n'

export default function Navbar() {
  const { t, locale, setLocale, isRtl } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: t.nav.studio, href: '#studio' },
    { label: t.nav.cours, href: '#cours' },
    { label: t.nav.planning, href: '#planning' },
    { label: t.nav.tarifs, href: '#tarifs' },
    { label: t.nav.instructeurs, href: '#instructeurs' },
    { label: t.nav.blog, href: '#blog' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.4s ease',
        padding: scrolled ? '0.75rem 2rem' : '1.5rem 2rem',
        background: scrolled ? 'rgba(250,250,247,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 500, color: 'var(--text)', letterSpacing: '0.05em' }}>
              Ella<span style={{ color: 'var(--sage-dark)' }}>Yoga</span>
            </span>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', color: 'var(--text-muted)', fontFamily: 'Jost, sans-serif', fontWeight: 400, textTransform: 'uppercase', marginTop: '-2px' }}>
              Tel Aviv
            </div>
          </a>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="hidden md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s', paddingBottom: '2px', borderBottom: '1px solid transparent' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderBottomColor = 'var(--sage)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderBottomColor = 'transparent' }}>
                {l.label}
              </a>
            ))}

            {/* Language switcher */}
            <div style={{ display: 'flex', gap: '2px', background: 'var(--surface)', borderRadius: '3px', padding: '2px' }}>
              {(['fr', 'en', 'he'] as Locale[]).map((loc) => (
                <button key={loc} onClick={() => setLocale(loc)} style={{
                  background: locale === loc ? 'var(--white)' : 'transparent',
                  color: locale === loc ? 'var(--text)' : 'var(--text-muted)',
                  border: 'none', cursor: 'pointer', borderRadius: '2px',
                  fontFamily: loc === 'he' ? 'Rubik, sans-serif' : 'Jost, sans-serif',
                  fontSize: '0.65rem', fontWeight: locale === loc ? 600 : 400,
                  padding: '0.25rem 0.5rem', transition: 'all 0.2s',
                  boxShadow: locale === loc ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                }}>
                  {localeLabels[loc]}
                </button>
              ))}
            </div>

            <a href="#reservation" style={{ background: 'var(--text)', color: 'var(--white)', fontFamily: 'Jost, sans-serif', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', padding: '0.65rem 1.4rem', borderRadius: '2px', transition: 'background 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--sage-dark)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--text)' }}>
              {t.nav.reserver}
            </a>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)' }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 99, background: 'var(--bg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1.75rem' }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 300, color: 'var(--text)', textDecoration: 'none' }}>
              {l.label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
            {(['fr', 'en', 'he'] as Locale[]).map((loc) => (
              <button key={loc} onClick={() => setLocale(loc)} style={{
                background: locale === loc ? 'var(--text)' : 'var(--surface)',
                color: locale === loc ? 'var(--white)' : 'var(--text-muted)',
                border: 'none', cursor: 'pointer', borderRadius: '2px',
                fontFamily: loc === 'he' ? 'Rubik, sans-serif' : 'Jost, sans-serif',
                fontSize: '0.8rem', padding: '0.4rem 0.8rem',
              }}>{localeLabels[loc]}</button>
            ))}
          </div>
          <a href="#reservation" onClick={() => setOpen(false)} style={{ marginTop: '0.5rem', background: 'var(--text)', color: 'var(--white)', fontFamily: 'Jost, sans-serif', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', padding: '0.8rem 2rem', borderRadius: '2px' }}>
            {t.nav.reserver}
          </a>
        </div>
      )}
    </>
  )
}
