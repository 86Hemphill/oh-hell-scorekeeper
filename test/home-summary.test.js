const test = require('node:test')
const assert = require('node:assert/strict')

const { getHomeGameSummary } = require('../src/game/home-summary')
const { GAME_STATUS } = require('../src/game/setup')

test('completed rounds show the last-game winner even when status is in progress', () => {
  const summary = getHomeGameSummary({
    names: ['Ava', 'Bo'],
    status: GAME_STATUS.IN_PROGRESS,
    entries: [
      { cards: 1, bids: { Ava: 1, Bo: 0 }, tricks: { Ava: 1, Bo: 0 } },
    ],
  })

  assert.deepEqual(summary, { type: 'finished', winners: ['Ava'], score: 11 })
})

test('completed rounds show every player tied for the win', () => {
  const summary = getHomeGameSummary({
    names: ['Ava', 'Bo', 'Cy'],
    status: GAME_STATUS.IN_PROGRESS,
    entries: [
      { cards: 2, bids: { Ava: 1, Bo: 1, Cy: 0 }, tricks: { Ava: 1, Bo: 1, Cy: 0 } },
    ],
  })

  assert.deepEqual(summary, { type: 'finished', winners: ['Ava', 'Bo'], score: 11 })
})

test('an active saved game keeps the Resume Saved Game action', () => {
  const summary = getHomeGameSummary({
    names: ['Ava', 'Bo'],
    status: GAME_STATUS.IN_PROGRESS,
    progressed: true,
    entries: [
      { cards: 1, bids: { Ava: 0, Bo: 0 }, tricks: { Ava: 0, Bo: 0 } },
    ],
  })

  assert.deepEqual(summary, {
    type: 'active',
    resumeHref: '/scoreboard',
    resumeLabel: 'Resume Saved Game',
  })
})

test('an explicitly finished game without completed rounds has no invented winner', () => {
  const summary = getHomeGameSummary({
    names: ['Ava', 'Bo'],
    status: GAME_STATUS.FINISHED,
    entries: [
      { cards: 1, bids: { Ava: 0, Bo: 0 }, tricks: { Ava: 0, Bo: 0 } },
    ],
  })

  assert.deepEqual(summary, { type: 'finished', winners: [], score: null })
})
