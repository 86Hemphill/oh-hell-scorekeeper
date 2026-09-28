const { buildScoreboardProgress, isRoundComplete } = require('./scoring')
const { GAME_STATUS, hasGameProgress } = require('./setup')

function getHomeGameSummary(game) {
  if (!game) return null

  const hasRounds = Array.isArray(game.names) && Array.isArray(game.entries) && game.entries.length > 0
  const allRoundsComplete = hasRounds && game.entries.every((entry) =>
    isRoundComplete({ players: game.names, bids: entry.bids, tricks: entry.tricks, cards: entry.cards })
  )

  if (game.status !== GAME_STATUS.FINISHED && !allRoundsComplete) {
    return hasGameProgress(game)
      ? { type: 'active', resumeHref: '/scoreboard', resumeLabel: 'Resume Saved Game' }
      : { type: 'draft', resumeHref: '/rules', resumeLabel: 'Resume Setup' }
  }

  if (!hasRounds) return { type: 'finished', winners: [], score: null }

  const board = buildScoreboardProgress({
    players: game.names,
    rounds: game.entries,
    rules: game.rules,
  })

  if (!board.rounds.some((round) => round.complete)) {
    return { type: 'finished', winners: [], score: null }
  }

  const score = Math.max(...game.names.map((name) => board.totals[name] ?? 0))
  const winners = game.names.filter((name) => board.totals[name] === score)
  return { type: 'finished', winners, score }
}

module.exports = { getHomeGameSummary }
