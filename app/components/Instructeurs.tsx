'use client'
import { useState } from 'react'

const instructeurs = [
  {
    name: 'Ella Mizrahi',
    role: 'Fondatrice & Directrice pédagogique',
    styles: ['Hatha', 'Vinyasa', 'Yoga Nidra'],
    bio: 'Formée à Mysore en Inde et à New York, Ella pratique le yoga depuis 20 ans. Sa pédagogie allie rigueur et douceur, en faisant une enseignante de référence à Tel Aviv.',
    certif: 'RYT-500 · Yoga Alliance',
    initials: 'EM',
    color: '#C8D9BF',
  },
  {
    name: 'Noa Katz',
    role: 'Instructrice Vinyasa & Ashtanga',
    styles: ['Vinyasa', 'Ashtanga'],
    bio: 'Ancienne danseuse contemporaine, Noa apporte une fluidité unique à ses cours. Son Vinyasa est une invitation au mouvement conscient et à la présence totale.',
    certif: 'RYT-200 · Yoga Alliance',
    initials: 'NK',
    color: '#D9CFB5',
  },
  {
    name: 'Maya Rosen',
    role: 'Instructrice Yin & Prénatal',
    styles: ['Yin Yoga', 'Prénatal'],
    bio: 'Spécialisée dans les yoga doux et thérapeutiques, Maya accompagne avec une sensibilité particulière les femmes enceintes et toutes les personnes en quête de profond relâchement.',
    certif: 'RYT-300 · RPYT',
    initials: 'MR',
    color: '#D5C8D9',
  },
  {
    name: 'Tal Ben-David',
    role: 'Instructeur Ashtanga',
    styles: ['Ashtanga', 'Hatha'],
    bio: 'Tal enseigne l\'Ashtanga dans sa forme la plus pure et traditionnelle. Chaque cours est un voyage intérieur, une discipline qui se construit séance après séance.',
    certif: 'RYT-500 · KPJAYI',
    initials: 'TB',
    color: '#B5C4C8',
  },
]

export default function Instructeurs() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="instructeurs" style={{ padding: '8rem 2rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
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
            L'équipe
          </span>
        </div>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
          fontWeight: 300,
          lineHeight: 1.1,
          color: 'var(--text)',
          marginBottom: '4rem',
        }}>
          Nos instructeurs
        </h2>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>
          {instructeurs.map((inst, i) => (
            <div
              key={inst.name}
              onClick={() => setActive(active === i ? null : i)}
              style={{
                borderRadius: '4px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid',
                borderColor: active === i ? 'var(--sage)' : 'var(--border)',
                transition: 'all 0.3s',
                background: 'var(--white)',
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '4/3',
                  background: inst.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                }}
              >
                <span style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '4rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.7)',
                  letterSpacing: '0.1em',
                }}>
                  {inst.initials}
                </span>
              </div>

              {/* Info */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.4rem',
                  fontWeight: 400,
                  color: 'var(--text)',
                  marginBottom: '0.25rem',
                }}>
                  {inst.name}
                </div>
                <div style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  fontWeight: 300,
                  marginBottom: '1rem',
                  lineHeight: 1.4,
                }}>
                  {inst.role}
                </div>

                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  {inst.styles.map((s) => (
                    <span key={s} style={{
                      fontFamily: 'Jost, sans-serif',
                      fontSize: '0.62rem',
                      fontWeight: 400,
                      letterSpacing: '0.08em',
                      color: 'var(--sage-dark)',
                      background: '#A8BAA422',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '2px',
                    }}>
                      {s}
                    </span>
                  ))}
                </div>

                {active === i && (
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                    <p style={{
                      fontFamily: 'Jost, sans-serif',
                      fontSize: '0.8rem',
                      lineHeight: 1.75,
                      color: 'var(--text-muted)',
                      fontWeight: 300,
                      marginBottom: '0.75rem',
                    }}>
                      {inst.bio}
                    </p>
                    <div style={{
                      fontFamily: 'Jost, sans-serif',
                      fontSize: '0.65rem',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-light)',
                    }}>
                      {inst.certif}
                    </div>
                  </div>
                )}

                <div style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.68rem',
                  color: 'var(--sage-dark)',
                  marginTop: active === i ? '1rem' : 0,
                  fontWeight: 400,
                }}>
                  {active === i ? '↑ Réduire' : '↓ En savoir plus'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
