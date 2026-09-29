import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Oh Hell! Scoring App.',
}

export default function PrivacyPage() {
  return (
    <main className="screen">
      <div className="stack appShell">
        <section className="panel stack roomy">
          <div>
            <p className="eyebrow">Oh Hell! Scoring App</p>
            <h1>Privacy Policy</h1>
            <p className="muted">Effective September 29, 2026</p>
          </div>
          <p>We do not collect personal data through Oh Hell! Scoring App.</p>
          <div className="row wrap helpActions">
            <Link href="/" className="button secondary">Home</Link>
            <Link href="/support" className="button secondary">Support</Link>
          </div>
        </section>

        <section className="panel stack roomy">
          <div>
            <h2>Game information stays on your device</h2>
            <p>
              Player names, bids, tricks won, scores, game state, and progress are stored locally on your device or
              in your browser using local storage. This information is not transmitted to us. The app does not
              require an account or authentication, and we do not operate a backend or database for your games.
            </p>
          </div>
          <div>
            <h2>What the app does not collect or use</h2>
            <p>
              The app has no advertising, purchases, analytics, or tracking SDKs. It does not collect location or
              access contacts, photos, camera, microphone, health, financial, or other sensitive device data. We do
              not use third-party analytics, advertising, or tracking services in the app.
            </p>
          </div>
          <div>
            <h2>Web visits</h2>
            <p>
              When you visit the web version of the app or these privacy and support pages, ordinary web-hosting
              infrastructure may process basic technical request information needed to serve the pages. Normal
              scorekeeping in the installed iOS app does not require an internet connection.
            </p>
          </div>
          <div>
            <h2>Keeping and deleting local data</h2>
            <p>
              Saved game data remains on your device or in your browser until you clear it. You can use Clear Saved
              Game in the app, delete the app, or clear the site data in your browser to remove it.
            </p>
          </div>
          <div>
            <h2>Children’s privacy</h2>
            <p>We do not knowingly collect personal information from children.</p>
          </div>
          <div>
            <h2>Changes to this policy</h2>
            <p>If this policy changes, we will update this page and its effective date.</p>
          </div>
          <div>
            <h2>Contact</h2>
            <p>
              Visit <Link href="/support">Support</Link> or email{' '}
              <a href="mailto:ohhellscoringapp@gmail.com">ohhellscoringapp@gmail.com</a> with privacy questions.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
