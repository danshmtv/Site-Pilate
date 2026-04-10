'use client'
import { useState } from 'react'
import { useI18n } from '../lib/i18n'

export default function Temoignages() {
  const { t, isRtl } = useI18n()
  const [current, setCurrent] = useState(0)

  const items = t.temoignages.items
  const item = items[current]
  const initials = item.name.split(' ').map((w: string) => w[0]).join('').slice(0, 2)

  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length)
  const next = () => setCurrent((c) => (c + 1) % items.length)

  return (
    <section className="py-16 px-5 md:py-32 md:px-8" style={{ background: 'var(--surface)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '2rem', height: '1px', background: 'var(--sage-dark)' }} />
          <span style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.7rem', letterSpacing: isRtl ? '0' : '0.22em', textTransform: 'uppercase', color: 'var(--sage-dark)', fontWeight: 500 }}>
            {t.temoignages.label}
          </span>
          <div style={{ width: '2rem', height: '1px', background: 'var(--sage-dark)' }} />
        </div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text)', marginBottom: '4rem' }}>
          {t.temoignages.title}
        </h2>

        {/* Quote */}
        <div style={{ background: 'var(--white)', borderRadius: '4px', padding: 'clamp(2rem, 5vw, 4rem)', position: 'relative' }}>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '8rem', lineHeight: 0.5, color: 'var(--sage)', opacity: 0.3, position: 'absolute', top: '2rem', ...(isRtl ? { right: '2.5rem' } : { left: '2.5rem' }), userSelect: 'none' }}>
            "
          </div>

          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 300, lineHeight: 1.6, color: 'var(--text)', fontStyle: 'italic', marginBottom: '2.5rem', position: 'relative', zIndex: 1 }}>
            {item.text}
          </p>

          {/* Author */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.85rem', fontWeight: 500, color: 'var(--white)' }}>
                {initials}
              </span>
            </div>
            <div style={{ textAlign: isRtl ? 'right' : 'left' }}>
              <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text)' }}>
                {item.name}
              </div>
              <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 300 }}>
                {item.role}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
          <button
            onClick={prev}
            style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '1.1rem', transition: 'all 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--sage)'; e.currentTarget.style.color = 'var(--sage-dark)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
          >
            {isRtl ? '→' : '←'}
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{ width: i === current ? '24px' : '6px', height: '6px', borderRadius: '3px', background: i === current ? 'var(--sage-dark)' : 'var(--border)', border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '1.1rem', transition: 'all 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--sage)'; e.currentTarget.style.color = 'var(--sage-dark)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
          >
            {isRtl ? '←' : '→'}
          </button>
        </div>
      </div>
    </section>
  )
}
