'use client'
import { useState } from 'react'
import { useI18n } from '../lib/i18n'

const levelColor: Record<string, string> = {
  all: '#7A9675',
  inter: '#9A7A65',
  advanced: '#6A7A9A',
  special: '#9A7A9A',
}

const classColors = ['#D4E2D0', '#DDE8DB', '#E8EDE7', '#EAE6DF', '#D8E4D5', '#EDE9E2']

export default function Cours() {
  const { t, isRtl } = useI18n()
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="cours" className="py-16 px-5 md:py-32 md:px-8" style={{ background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
              <div style={{ width: '2rem', height: '1px', background: 'var(--sage-dark)' }} />
              <span style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.7rem', letterSpacing: isRtl ? '0' : '0.22em', textTransform: 'uppercase', color: 'var(--sage-dark)', fontWeight: 500 }}>
                {t.cours.label}
              </span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text)', textAlign: isRtl ? 'right' : 'left' }}>
              {t.cours.title}
            </h2>
          </div>
          <a
            href="#planning"
            style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.75rem', fontWeight: 400, letterSpacing: isRtl ? '0' : '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '2px' }}
          >
            {t.cours.viewPlanning}
          </a>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {t.cours.classes.map((c, i) => (
            <div
              key={c.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? classColors[i] : 'var(--white)',
                borderRadius: '4px',
                padding: '2rem',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hovered === i ? '0 12px 48px rgba(0,0,0,0.06)' : '0 2px 8px rgba(0,0,0,0.03)',
                position: 'relative',
              }}
            >
              {c.tag && (
                <div style={{ position: 'absolute', top: '1.5rem', right: isRtl ? undefined : '1.5rem', left: isRtl ? '1.5rem' : undefined, background: 'var(--sage)', color: 'var(--white)', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.25rem 0.6rem', borderRadius: '2px' }}>
                  {t.cours.tags[c.tag as keyof typeof t.cours.tags]}
                </div>
              )}

              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                <span style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: levelColor[c.level] || 'var(--text-muted)', background: `${levelColor[c.level]}22`, padding: '0.2rem 0.6rem', borderRadius: '2px' }}>
                  {t.cours.levels[c.level as keyof typeof t.cours.levels]}
                </span>
                <span style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-light)', background: 'var(--surface)', padding: '0.2rem 0.6rem', borderRadius: '2px' }}>
                  {c.duration}
                </span>
              </div>

              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 400, color: 'var(--text)', marginBottom: '0.75rem', lineHeight: 1.1, textAlign: isRtl ? 'right' : 'left' }}>
                {c.name}
              </h3>

              <p style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: 300, textAlign: isRtl ? 'right' : 'left' }}>
                {c.description}
              </p>

              <a
                href="#reservation"
                style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', opacity: hovered === i ? 1 : 0.5, transition: 'opacity 0.3s' }}
              >
                {t.cours.book}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
