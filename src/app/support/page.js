import Link from 'next/link'

export const metadata = {
  title: 'Support',
  description: 'Help and contact information for Oh Hell! Scoring App.',
}

const helpItems = [
  {
    title: 'Start a new game',
    body: 'Select New Game on the home screen, enter players in table order, choose the card count and rules, then start the game.',
  },
  {
    title: 'Enter bids',
    body: 'During bidding, use the + and − controls beside each player to set their bid. When the bids are ready, select Start play.',
  },
  {
    title: 'Enter tricks won',
    body: 'After the hand, use the + and − controls for each player’s tricks. Check that the total tricks matches the cards dealt for the round.',
  },
  {
    title: 'Resume a saved game',
    body: 'Select Resume Saved Game on the home screen to return to an active game saved on this device or browser.',
  },
  {
    title: 'Start a rematch',
    body: 'After finishing a game, select Rematch to start again with the same players and settings.',
  },
  {
    title: 'Clear a saved game',
    body: 'On the scoreboard, select Clear Saved Game and confirm. This removes the saved game from this device or browser.',
  },
]

export default function SupportPage() {
  return (
    <main className="screen">
      <div className="stack wideStack helpShell">
        <section className="panel stack roomy">
          <div>
            <p className="eyebrow">Oh Hell! Scoring App</p>
            <h1>Support</h1>
            <p className="muted">
              A scorekeeping companion for the physical card game Oh Hell. Version 1.0.
            </p>
          </div>
          <div className="row wrap helpActions">
            <Link href="/" className="button secondary">Home</Link>
            <Link href="/privacy" className="button secondary">Privacy Policy</Link>
          </div>
        </section>

        <section className="panel stack roomy">
          <div>
            <p className="eyebrow">Common Help</p>
            <h2>Using the Scorekeeper</h2>
          </div>
          <div className="faqGrid">
            {helpItems.map((item) => (
              <article key={item.title} className="faqCard">
                <strong>{item.title}</strong>
                <p className="muted">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel stack roomy">
          <div>
            <p className="eyebrow">Troubleshooting</p>
            <h2>When Something Looks Wrong</h2>
            <p>
              If a round will not advance, check that the bids are valid and that the recorded tricks add up to the
              number of cards dealt. If a saved game is missing, check that you are using the same device and browser
              and that its site data has not been cleared. You can correct a completed round from the scoreboard.
            </p>
          </div>
        </section>

        <section className="panel stack roomy">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Need More Help?</h2>
            <p>Email <a href="mailto:ohhellscoringapp@gmail.com">ohhellscoringapp@gmail.com</a>.</p>
          </div>
        </section>
      </div>
    </main>
  )
}
