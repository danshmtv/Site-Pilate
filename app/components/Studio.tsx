'use client'
import Image from 'next/image'
import { useI18n } from '../lib/i18n'

export default function Studio() {
  const { t, isRtl } = useI18n()

  return (
    <section id="studio" className="py-16 px-5 md:py-32 md:px-8" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24" style={{ alignItems: 'center' }}>
          {/* Visual */}
          <div style={{ position: 'relative', order: isRtl ? 2 : 1 }}>
            <div style={{ width: '100%', aspectRatio: '4/5', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
              <Image src="/images/namal-home25-2.webp" alt="Studio EllaYoga" fill style={{ objectFit: 'cover' }} />
            </div>
            {/* Offset card */}
            <div className="studio-offset-card" style={{ position: 'absolute', bottom: '-2rem', right: isRtl ? 'auto' : '-2rem', left: isRtl ? '-2rem' : 'auto', background: 'var(--surface)', padding: '1.5rem', borderRadius: '4px', width: '220px', boxShadow: '0 4px 40px rgba(0,0,0,0.05)' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text)', marginBottom: '0.5rem' }}>✦ Tour Azrieli Sarona</div>
              <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {isRtl ? 'האולפן השני שלנו, בלב רובע העסקים' : 'Notre second studio, au cœur du quartier d\'affaires'}
              </div>
            </div>
            <div style={{ position: 'absolute', top: '-1.5rem', left: isRtl ? 'auto' : '-1.5rem', right: isRtl ? '-1.5rem' : 'auto', width: '60%', height: '60%', border: '1px solid var(--border)', borderRadius: '4px', zIndex: -1 }} />
          </div>

          {/* Text */}
          <div style={{ order: isRtl ? 1 : 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
              <div style={{ width: '2rem', height: '1px', background: 'var(--sage-dark)' }} />
              <span style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sage-dark)', fontWeight: 500 }}>{t.studio.label}</span>
            </div>

            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text)', marginBottom: '2rem', textAlign: isRtl ? 'right' : 'left' }}>
              {t.studio.title1}<br />{t.studio.title2} <em style={{ fontStyle: 'italic' }}>{t.studio.title3}</em>
            </h2>

            <p style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: 300, textAlign: isRtl ? 'right' : 'left' }}>{t.studio.p1}</p>
            <p style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--text-muted)', marginBottom: '2.5rem', fontWeight: 300, textAlign: isRtl ? 'right' : 'left' }}>{t.studio.p2}</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {[
                { icon: '◎', title: t.studio.f1, desc: t.studio.f1d },
                { icon: '◈', title: t.studio.f2, desc: t.studio.f2d },
                { icon: '◇', title: t.studio.f3, desc: t.studio.f3d },
                { icon: '◆', title: t.studio.f4, desc: t.studio.f4d },
              ].map((f) => (
                <div key={f.title} style={{ padding: '1.25rem', background: 'var(--surface)', borderRadius: '4px' }}>
                  <div style={{ fontSize: '1rem', color: 'var(--sage-dark)', marginBottom: '0.5rem', textAlign: isRtl ? 'right' : 'left' }}>{f.icon}</div>
                  <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.8rem', fontWeight: 500, color: 'var(--text)', marginBottom: '0.25rem', textAlign: isRtl ? 'right' : 'left' }}>{f.title}</div>
                  <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5, textAlign: isRtl ? 'right' : 'left' }}>{f.desc}</div>
                </div>
              ))}
            </div>

            <a href="#contact" style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.75rem', fontWeight: 500, letterSpacing: isRtl ? '0' : '0.14em', textTransform: 'uppercase', color: 'var(--text)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', paddingBottom: '2px', borderBottom: '1px solid var(--text)', transition: 'border-color 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--sage)'; e.currentTarget.style.color = 'var(--sage-dark)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--text)'; e.currentTarget.style.color = 'var(--text)' }}>
              {t.studio.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
