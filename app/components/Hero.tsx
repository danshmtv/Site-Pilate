'use client'
import Image from 'next/image'
import { useI18n } from '../lib/i18n'

export default function Hero() {
  const { t, isRtl } = useI18n()

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: 'var(--bg)' }}>
      {/* Background gradient orb */}
      <div style={{ position: 'absolute', top: '-10%', right: isRtl ? 'auto' : '-5%', left: isRtl ? '-5%' : 'auto', width: 'min(700px, 60vw)', height: 'min(700px, 60vw)', borderRadius: '50%', background: 'radial-gradient(circle, #D4E2D0 0%, #E8EDE7 40%, transparent 70%)', opacity: 0.6, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: isRtl ? 'auto' : '-3%', right: isRtl ? '-3%' : 'auto', width: 'min(400px, 35vw)', height: 'min(400px, 35vw)', borderRadius: '50%', border: '1px solid var(--border)', opacity: 0.5, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '8rem 2rem 4rem', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        {/* Text */}
        <div>
          <div className="animate-fade-up" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
            <div style={{ width: '2rem', height: '1px', background: 'var(--sage-dark)' }} />
            <span style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage-dark)', fontWeight: 500 }}>
              {t.hero.label}
            </span>
          </div>

          <h1 className="animate-fade-up delay-100" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3.5rem, 6vw, 6rem)', fontWeight: 300, lineHeight: 1.05, color: 'var(--text)', marginBottom: '2rem' }}>
            {t.hero.title1}<br />
            <em style={{ fontStyle: 'italic', color: 'var(--sage-dark)' }}>{t.hero.title2}</em><br />
            {t.hero.title3}
          </h1>

          <p className="animate-fade-up delay-200" style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: '440px', marginBottom: '3rem', fontWeight: 300 }}>
            {t.hero.desc}
          </p>

          <div className="animate-fade-up delay-300" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
            <a href="#reservation" style={{ background: 'var(--text)', color: 'var(--white)', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.75rem', fontWeight: 500, letterSpacing: isRtl ? '0' : '0.14em', textTransform: 'uppercase', textDecoration: 'none', padding: '1rem 2rem', borderRadius: '2px', transition: 'background 0.25s', display: 'inline-block' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--sage-dark)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--text)' }}>
              {t.hero.cta1}
            </a>
            <a href="#cours" style={{ border: '1px solid var(--border)', color: 'var(--text)', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.75rem', fontWeight: 400, letterSpacing: isRtl ? '0' : '0.14em', textTransform: 'uppercase', textDecoration: 'none', padding: '1rem 2rem', borderRadius: '2px', transition: 'border-color 0.25s', display: 'inline-block' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--sage)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)' }}>
              {t.hero.cta2}
            </a>
          </div>

          <div className="animate-fade-up delay-400" style={{ display: 'flex', gap: '3rem', marginTop: '4rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border)', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
            {[
              { n: '2', label: t.hero.stat1 },
              { n: '15+', label: t.hero.stat2 },
              { n: '200+', label: t.hero.stat3 },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', fontWeight: 300, color: 'var(--text)', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.7rem', letterSpacing: isRtl ? '0' : '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '0.3rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="animate-fade-in delay-300 hidden md:block" style={{ position: 'relative' }}>
          <div style={{ width: '100%', aspectRatio: '3/4', borderRadius: '180px 180px 0 0', overflow: 'hidden', position: 'relative' }}>
            <Image
              src="/images/namal-home25-1.webp"
              alt="EllaYoga studio"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            {/* Overlay tint */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(168,186,164,0.25) 0%, transparent 60%)' }} />
          </div>

          {/* Floating card */}
          <div style={{ position: 'absolute', bottom: '2rem', left: isRtl ? 'auto' : '-2rem', right: isRtl ? '-2rem' : 'auto', background: 'var(--white)', padding: '1rem 1.5rem', borderRadius: '4px', boxShadow: '0 8px 40px rgba(0,0,0,0.06)', minWidth: '180px' }}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 500, color: 'var(--text)' }}>Port de Tel Aviv</div>
            <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.1em', marginTop: '0.2rem' }}>
              {t.nav.cours} 7j/7
            </div>
          </div>

          {/* Badge */}
          <div style={{ position: 'absolute', top: '2rem', right: isRtl ? 'auto' : '-1.5rem', left: isRtl ? '-1.5rem' : 'auto', background: 'var(--sage)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 500, color: 'var(--white)', lineHeight: 1 }}>10+</span>
            <span style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.52rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--white)', opacity: 0.85 }}>styles</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-up delay-700" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-light)' }}>{t.hero.scroll}</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--text-light), transparent)' }} />
      </div>
    </section>
  )
}
