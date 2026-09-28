'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import setup from '../game/setup'

const { GAME_STATUS, createRematchGame, hasGameProgress } = setup

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

  const hasSavedGame = Boolean(savedGame)
  const isFinishedGame = savedGame?.status === GAME_STATUS.FINISHED
  const isSetupDraft = hasSavedGame && !isFinishedGame && !hasGameProgress(savedGame)

  return (
    <div className="heroActions">
      <Link href="/players" className="button primary">
        New Game
      </Link>
      <Link href="/how-to-play" className="button secondary">
        How to Play
      </Link>
      {hasSavedGame ? (
        <>
          <Link href={isSetupDraft ? '/rules' : '/scoreboard'} className="button secondary">
            {isFinishedGame ? 'View Final Results' : isSetupDraft ? 'Resume Setup' : 'Resume Saved Game'}
          </Link>
          {isFinishedGame ? (
            <button type="button" className="button secondary" onClick={startRematch}>
              Rematch Same Table
            </button>
          ) : null}
        </>
      ) : null}
    </div>
  )
}
