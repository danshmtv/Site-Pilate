'use client'
import { useState } from 'react'

const temoignages = [
  {
    text: "EllaYoga a changé ma façon d'appréhender le stress et le quotidien. Les instructeurs sont d'une bienveillance rare, et les cours sont adaptés à chaque niveau. Je ne peux plus m'en passer.",
    name: 'Sarah L.',
    role: 'Pratiquante depuis 2 ans',
    initials: 'SL',
  },
  {
    text: "Le cours de Yin Yoga du vendredi soir est devenu un rituel sacré pour moi. Après une semaine chargée, c'est exactement ce dont j'ai besoin. Le studio du Port est magnifique.",
    name: 'David M.',
    role: 'Pratiquant depuis 8 mois',
    initials: 'DM',
  },
  {
    text: "J'ai suivi les cours prénataux avec Maya pendant toute ma grossesse. Sa douceur et sa compétence m'ont accompagnée dans cette période si particulière. Merci infiniment.",
    name: 'Roni B.',
    role: 'Pratiquante depuis 1 an',
    initials: 'RB',
  },
  {
    text: "En tant que pratiquant d'Ashtanga depuis des années, je cherchais un studio sérieux à Tel Aviv. Tal Ben-David est l'un des meilleurs enseignants que j'aie jamais rencontré.",
    name: 'Oren K.',
    role: 'Pratiquant depuis 3 ans',
    initials: 'OK',
  },
  {
    text: "Le studio Sarona est incroyable — grand, lumineux, bien équipé. Mais surtout, c'est l'équipe qui fait la différence. On se sent vraiment accueilli, pas juste un abonné.",
    name: 'Michal T.',
    role: 'Pratiquante depuis 6 mois',
    initials: 'MT',
  },
]

export default function Temoignages() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + temoignages.length) % temoignages.length)
  const next = () => setCurrent((c) => (c + 1) % temoignages.length)

  const t = temoignages[current]

  return (
    <section style={{ padding: '8rem 2rem', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '1.5rem',
        }}>
          <div style={{ width: '2rem', height: '1px', background: 'var(--sage-dark)' }} />
          <span style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.7rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--sage-dark)',
            fontWeight: 500,
          }}>
            Témoignages
          </span>
          <div style={{ width: '2rem', height: '1px', background: 'var(--sage-dark)' }} />
        </div>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
          fontWeight: 300,
          lineHeight: 1.1,
          color: 'var(--text)',
          marginBottom: '4rem',
        }}>
          Ce que disent nos élèves
        </h2>

        {/* Quote */}
        <div style={{
          background: 'var(--white)',
          borderRadius: '4px',
          padding: 'clamp(2rem, 5vw, 4rem)',
          position: 'relative',
        }}>
          {/* Decorative quote mark */}
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '8rem',
            lineHeight: 0.5,
            color: 'var(--sage)',
            opacity: 0.3,
            position: 'absolute',
            top: '2rem',
            left: '2.5rem',
            userSelect: 'none',
          }}>
            "
          </div>

          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
            fontWeight: 300,
            lineHeight: 1.6,
            color: 'var(--text)',
            fontStyle: 'italic',
            marginBottom: '2.5rem',
            position: 'relative',
            zIndex: 1,
          }}>
            {t.text}
          </p>

          {/* Author */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'var(--sage)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: 'var(--white)',
              }}>
                {t.initials}
              </span>
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: 'var(--text)',
              }}>
                {t.name}
              </div>
              <div style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                fontWeight: 300,
              }}>
                {t.role}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '2rem',
        }}>
          <button
            onClick={prev}
            style={{
              background: 'none',
              border: '1px solid var(--border)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              fontSize: '1.1rem',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--sage)'; e.currentTarget.style.color = 'var(--sage-dark)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
          >
            ←
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {temoignages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? '24px' : '6px',
                  height: '6px',
                  borderRadius: '3px',
                  background: i === current ? 'var(--sage-dark)' : 'var(--border)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{
              background: 'none',
              border: '1px solid var(--border)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              fontSize: '1.1rem',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--sage)'; e.currentTarget.style.color = 'var(--sage-dark)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
