'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import homeSummary from '../game/home-summary'
import setup from '../game/setup'

const { getHomeGameSummary } = homeSummary
const { createRematchGame } = setup

export default function HomeActions() {
  const router = useRouter()
  const [savedGame, setSavedGame] = useState(null)

  useEffect(() => {
    const stored = window.localStorage.getItem('ohsa-game')
    setSavedGame(stored ? JSON.parse(stored) : null)
  }, [])

  const startRematch = () => {
    if (!savedGame) return
    const rematch = createRematchGame(savedGame)
    window.localStorage.setItem('ohsa-game', JSON.stringify(rematch))
    router.push('/scoreboard')
  }

  const summary = getHomeGameSummary(savedGame)

  return (
    <div className="heroActions">
      <Link href="/players" className="button primary">
        New Game
      </Link>
      {summary?.type === 'finished' ? (
        <section className="lastGameCard" aria-labelledby="last-game-title">
          <h2 id="last-game-title" className="eyebrow">Last Game</h2>
          {summary.winners.length === 0 ? (
            <p className="muted">No completed rounds to score.</p>
          ) : summary.winners.length === 1 ? (
            <p className="lastGameResult">
              <strong>{summary.winners[0]}</strong> won with {summary.score} points
            </p>
          ) : (
            <div className="lastGameResult shared">
              <strong>Shared win</strong>
              <span>{summary.winners.join(', ')}</span>
              <span>{summary.score} points each</span>
            </div>
          )}
          <div className="lastGameActions">
            <Link href="/scoreboard" className="button secondary">
              View Results
            </Link>
            <button type="button" className="button secondary" onClick={startRematch}>
              Rematch
            </button>
          </div>
        </section>
      ) : null}
      <Link href="/how-to-play" className="button secondary">
        How to Play
      </Link>
      {summary && summary.type !== 'finished' ? (
        <Link href={summary.resumeHref} className="button secondary">
          {summary.resumeLabel}
        </Link>
      ) : null}
    </div>
  )
}
