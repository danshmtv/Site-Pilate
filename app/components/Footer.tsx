'use client'
import { useI18n } from '../lib/i18n'

export default function Footer() {
  const { t, isRtl } = useI18n()

  const links = [
    { label: t.nav.studio, href: '#studio' },
    { label: t.nav.planning, href: '#planning' },
    { label: t.nav.tarifs, href: '#tarifs' },
    { label: t.nav.instructeurs, href: '#instructeurs' },
    { label: t.nav.blog, href: '#blog' },
    { label: t.nav.reserver, href: '#reservation' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <footer style={{ background: 'var(--text)', color: 'rgba(255,255,255,0.6)', padding: '4rem 2rem 2rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '2rem', direction: isRtl ? 'rtl' : 'ltr' }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 400, color: 'var(--white)', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
              Ella<span style={{ color: 'var(--sage)' }}>Yoga</span>
            </div>
            <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>Tel Aviv</div>
            <p style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.82rem', lineHeight: 1.75, fontWeight: 300, maxWidth: '280px', textAlign: isRtl ? 'right' : 'left' }}>
              {isRtl ? 'אולפן יוגה בלב תל אביב, מוקדש לרווחתכם מאז 2015.' : 'Un studio de yoga au cœur de Tel Aviv, dédié à votre bien-être depuis 2015.'}
            </p>
          </div>

          {/* Studios */}
          <div style={{ textAlign: isRtl ? 'right' : 'left' }}>
            <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}>
              {isRtl ? 'אולפנים' : 'Studios'}
            </div>
            {['Port de Tel Aviv', 'Tour Azrieli Sarona'].map((s) => (
              <div key={s} style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.82rem', fontWeight: 300, marginBottom: '0.6rem' }}>{s}</div>
            ))}
          </div>

          {/* Classes */}
          <div style={{ textAlign: isRtl ? 'right' : 'left' }}>
            <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}>
              {t.nav.cours}
            </div>
            {['Hatha Yoga', 'Vinyasa Flow', 'Yin Yoga', 'Ashtanga', 'Yoga Nidra'].map((c) => (
              <div key={c} style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.82rem', fontWeight: 300, marginBottom: '0.6rem' }}>{c}</div>
            ))}
          </div>

          {/* Nav */}
          <div style={{ textAlign: isRtl ? 'right' : 'left' }}>
            <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}>
              {isRtl ? 'ניווט' : 'Navigation'}
            </div>
            {links.map((l) => (
              <a key={l.href} href={l.href} style={{ display: 'block', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.82rem', fontWeight: 300, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginBottom: '0.6rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--white)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
          <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.72rem', fontWeight: 300, color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} EllaYoga. {isRtl ? 'כל הזכויות שמורות.' : 'Tous droits réservés.'}
          </div>
          <div style={{ display: 'flex', gap: '2rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
            {[
              isRtl ? 'אודות משפטי' : 'Mentions légales',
              isRtl ? 'מדיניות פרטיות' : 'Politique de confidentialité',
              isRtl ? 'תנאי שימוש' : 'CGV',
            ].map((l) => (
              <a key={l} href="#" style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.68rem', fontWeight: 300, color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.06em' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.3)' }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
