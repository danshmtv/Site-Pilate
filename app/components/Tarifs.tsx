'use client'
import { useState } from 'react'
import { Check } from 'lucide-react'
import { useI18n } from '../lib/i18n'

const prices = [
  { mensuel: '25', annuel: '22' },
  { mensuel: '180', annuel: '160' },
  { mensuel: '1 800', annuel: '1 500' },
]

export default function Tarifs() {
  const { t, isRtl } = useI18n()
  const [billing, setBilling] = useState<'mensuel' | 'annuel'>('mensuel')

  return (
    <section id="tarifs" className="py-16 px-5 md:py-32 md:px-8" style={{ background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '2rem', height: '1px', background: 'var(--sage-dark)' }} />
            <span style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.7rem', letterSpacing: isRtl ? '0' : '0.22em', textTransform: 'uppercase', color: 'var(--sage-dark)', fontWeight: 500 }}>
              {t.tarifs.label}
            </span>
            <div style={{ width: '2rem', height: '1px', background: 'var(--sage-dark)' }} />
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text)', marginBottom: '1rem' }}>
            {t.tarifs.title}
          </h2>
          <p style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 300, marginBottom: '2.5rem' }}>
            {t.tarifs.subtitle}
          </p>

          {/* Toggle */}
          <div style={{ display: 'inline-flex', background: 'var(--surface-2)', borderRadius: '4px', padding: '3px' }}>
            {(['mensuel', 'annuel'] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                style={{ background: billing === b ? 'var(--white)' : 'transparent', color: billing === b ? 'var(--text)' : 'var(--text-muted)', border: 'none', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.72rem', fontWeight: billing === b ? 500 : 300, letterSpacing: '0.1em', textTransform: 'capitalize', padding: '0.5rem 1.2rem', borderRadius: '3px', cursor: 'pointer', transition: 'all 0.2s', boxShadow: billing === b ? '0 1px 4px rgba(0,0,0,0.08)' : 'none' }}
              >
                {b === 'annuel' ? t.tarifs.billingYearly : t.tarifs.billingMonthly}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
          {t.tarifs.plans.map((p, idx) => (
            <div
              key={p.name}
              style={{ background: p.highlight ? 'var(--text)' : 'var(--white)', borderRadius: '4px', padding: '2.5rem', border: p.highlight ? 'none' : '1px solid var(--border)', position: 'relative', transform: p.highlight ? 'scale(1.02)' : 'scale(1)' }}
            >
              {p.badge && (
                <div style={{ position: 'absolute', top: '-0.75rem', left: '50%', transform: 'translateX(-50%)', background: 'var(--sage-dark)', color: 'var(--white)', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.3rem 1rem', borderRadius: '2px', whiteSpace: 'nowrap' }}>
                  {t.tarifs.popular}
                </div>
              )}

              <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: p.highlight ? 'rgba(255,255,255,0.6)' : 'var(--text-muted)', marginBottom: '0.75rem', textAlign: isRtl ? 'right' : 'left' }}>
                {p.name}
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '0.5rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', fontWeight: 300, color: p.highlight ? 'var(--white)' : 'var(--text)', lineHeight: 1 }}>
                  {prices[idx][billing]}₪
                </span>
                <span style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.75rem', color: p.highlight ? 'rgba(255,255,255,0.5)' : 'var(--text-light)', fontWeight: 300 }}>
                  {p.unit}
                </span>
              </div>

              <p style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.82rem', color: p.highlight ? 'rgba(255,255,255,0.6)' : 'var(--text-muted)', fontWeight: 300, marginBottom: '2rem', lineHeight: 1.6, textAlign: isRtl ? 'right' : 'left' }}>
                {p.desc}
              </p>

              <div style={{ height: '1px', background: p.highlight ? 'rgba(255,255,255,0.1)' : 'var(--border)', marginBottom: '2rem' }} />

              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {p.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: p.highlight ? 'rgba(255,255,255,0.15)' : 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={10} color={p.highlight ? '#fff' : 'var(--sage-dark)'} strokeWidth={2.5} />
                    </div>
                    <span style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.82rem', color: p.highlight ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)', fontWeight: 300 }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#reservation"
                style={{ display: 'block', textAlign: 'center', background: p.highlight ? 'var(--white)' : 'var(--text)', color: p.highlight ? 'var(--text)' : 'var(--white)', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', padding: '1rem', borderRadius: '2px', transition: 'opacity 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p style={{ textAlign: 'center', fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '2.5rem', fontWeight: 300 }}>
          {t.tarifs.note}
        </p>
      </div>
    </section>
  )
}
