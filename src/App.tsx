const drinks = [
  {
    name: 'Brown Sugar Latte',
    description: 'Espresso, brown sugar, and silky milk — familiar, sweet, and easy to come back to.'
  },
  {
    name: 'Iced Matcha',
    description: 'A cool, creamy pause for warm Eastlake mornings.'
  },
  {
    name: 'Cold Brew',
    description: 'Slow-steeped, bold, and ready for the routine.'
  }
];

const proof = [
  'Neighbors stopping by before the day starts',
  'Outdoor coffee truck moments in Eastlake',
  'Rewards, gift cards, and reasons to return'
];

export default function App() {
  return (
    <main className="site-shell">
      <style>{styles}</style>

      <section className="hero">
        <div className="hero__media" aria-label="Authentic Alcove coffee truck and community photo needed" />
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">Alcove Community Coffee · Eastlake</p>
          <h1>Coffee, neighbors, and a reason to slow down.</h1>
          <p className="hero__lede">An outdoor coffee stop in Chula Vista built around familiar faces, small rituals, and community connection.</p>
          <div className="button-row">
            <a className="button button--primary" href="#visit">Plan Your Visit</a>
            <a className="button button--ghost" href="https://alcove-community-coffee.square.site/">Order Ahead</a>
          </div>
        </div>
      </section>

      <section className="section split">
        <div className="photo-card photo-card--story">
          <span>Founder / truck photo</span>
        </div>
        <div className="section-copy">
          <p className="eyebrow">Why Alcove exists</p>
          <h2>Built for the kind of coffee stop people remember.</h2>
          <p>Alcove’s opportunity is bigger than menu access. The stronger story is a local place where people are recognized, welcomed, and invited back.</p>
          <p>This direction keeps ordering simple while making the brand feel more human, more local, and more worth visiting.</p>
        </div>
      </section>

      <section className="section community">
        <div className="section-heading">
          <p className="eyebrow eyebrow--light">Community proof</p>
          <h2>A place people can see themselves in.</h2>
          <p>For a local coffee business, real photos are not decoration. They are proof that the place, people, and atmosphere are real.</p>
        </div>
        <div className="proof-grid">
          <article className="proof-card proof-card--featured">
            <div className="photo-card photo-card--large"><span>Real community photo</span></div>
            <h3>Morning routines become familiar faces.</h3>
            <p>Use a real customer or truck photo here to restore the authenticity the original site already had.</p>
          </article>
          {proof.map((item) => (
            <article className="proof-card" key={item}>
              <div className="photo-card photo-card--small"><span>Photo</span></div>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="menu" className="section menu-section">
        <div className="section-heading section-heading--narrow">
          <p className="eyebrow">Menu highlights</p>
          <h2>Favorites that fit the daily ritual.</h2>
          <p>Keep the menu easy to scan, then invite visitors to order from the full Square menu.</p>
        </div>
        <div className="drink-grid">
          {drinks.map((drink) => (
            <article className="drink-card" key={drink.name}>
              <div className="drink-card__image"><span>Drink photo</span></div>
              <h3>{drink.name}</h3>
              <p>{drink.description}</p>
            </article>
          ))}
        </div>
        <a className="button button--primary button--standalone" href="https://alcove-community-coffee.square.site/">View Full Menu</a>
      </section>

      <section className="section rewards">
        <div>
          <p className="eyebrow">Rewards</p>
          <h2>Turn repeat visits into a simple ritual.</h2>
          <p>Earn 1 star for each visit with a qualifying purchase. 10 stars earns a free drink.</p>
        </div>
        <div className="reward-badge">
          <span>10</span>
          <strong>stars = free drink</strong>
        </div>
      </section>

      <section id="visit" className="section visit">
        <div className="visit__copy">
          <p className="eyebrow">Visit Alcove</p>
          <h2>Find the truck in Eastlake.</h2>
          <p className="address">990 Lane Avenue<br />Chula Vista, CA 91914</p>
          <p>Sun 8:30am–12:30pm<br />Tue/Wed/Thu 7:30am–1:00pm</p>
          <div className="button-row button-row--left">
            <a className="button button--primary" href="https://maps.google.com/?q=990+Lane+Avenue+Chula+Vista+CA+91914">Open Maps</a>
            <a className="button button--secondary" href="https://www.instagram.com/alcovecommunitycoffee/">Instagram</a>
          </div>
        </div>
        <div className="location-card">
          <span>Map or truck-location image</span>
        </div>
      </section>
    </main>
  );
}

const styles = `
:root {
  --cream: #f8efe4;
  --cream-2: #fff7ec;
  --espresso: #24160f;
  --coffee: #4f3427;
  --clay: #9b5c3c;
  --gold: #e5c56d;
  --muted: #74594b;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; }
.site-shell {
  min-height: 100vh;
  background: var(--cream);
  color: var(--espresso);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.hero {
  min-height: 88vh;
  position: relative;
  display: grid;
  place-items: center;
  padding: 72px 24px;
  overflow: hidden;
  color: var(--cream-2);
  text-align: center;
}
.hero__media {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 30% 25%, rgba(229, 197, 109, .42), transparent 26%),
    linear-gradient(135deg, #1c110c 0%, #553725 50%, #b97843 100%);
  transform: scale(1.03);
}
.hero__media::after {
  content: "";
  position: absolute;
  inset: 9%;
  border: 1px solid rgba(255, 247, 236, .24);
  border-radius: 36px;
}
.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0,0,0,.12), rgba(0,0,0,.38));
}
.hero__content {
  position: relative;
  z-index: 1;
  max-width: 980px;
}
.hero h1 {
  font-size: clamp(48px, 8vw, 108px);
  line-height: .92;
  letter-spacing: -0.06em;
  margin: 0;
}
.hero__lede {
  max-width: 690px;
  margin: 28px auto;
  font-size: clamp(18px, 2vw, 24px);
  line-height: 1.45;
}

.section {
  max-width: 1240px;
  margin: 0 auto;
  padding: 104px 32px;
}
.split, .visit, .rewards {
  display: grid;
  grid-template-columns: minmax(280px, 440px) 1fr;
  gap: clamp(32px, 6vw, 72px);
  align-items: center;
}
.rewards {
  max-width: none;
  grid-template-columns: minmax(0, 1fr) minmax(220px, 320px);
  background: var(--gold);
  padding-inline: max(32px, calc((100vw - 1240px) / 2));
}
.community {
  max-width: none;
  background: var(--espresso);
  color: var(--cream-2);
  padding-inline: max(32px, calc((100vw - 1240px) / 2));
}
.section-heading {
  max-width: 760px;
}
.section-heading--narrow { max-width: 690px; }
.section-copy { max-width: 760px; }
.eyebrow {
  margin: 0 0 18px;
  text-transform: uppercase;
  letter-spacing: .22em;
  font-size: 12px;
  font-weight: 850;
  color: var(--muted);
}
.eyebrow--light { color: var(--cream-2); }
h2 {
  font-size: clamp(34px, 5vw, 66px);
  line-height: 1;
  letter-spacing: -0.055em;
  margin: 0 0 24px;
}
h3 {
  margin: 0 0 10px;
  font-size: 22px;
  line-height: 1.12;
  letter-spacing: -0.03em;
}
p {
  font-size: clamp(17px, 1.6vw, 21px);
  line-height: 1.55;
}

.button-row {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}
.button-row--left { justify-content: flex-start; }
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  border-radius: 999px;
  padding: 14px 22px;
  font-weight: 850;
  text-decoration: none;
}
.button--primary { background: var(--espresso); color: var(--cream-2); }
.button--ghost { border: 2px solid var(--cream-2); color: var(--cream-2); }
.button--secondary { border: 2px solid var(--espresso); color: var(--espresso); }
.button--standalone { margin-top: 34px; }

.photo-card, .location-card, .drink-card__image {
  display: grid;
  place-items: center;
  border-radius: 32px;
  background: linear-gradient(135deg, #cda765, #6c4630);
  color: var(--cream-2);
  font-weight: 900;
  text-align: center;
  border: 1px solid rgba(36, 22, 15, .12);
}
.photo-card span, .location-card span, .drink-card__image span {
  padding: 12px 16px;
  border-radius: 999px;
  background: rgba(36, 22, 15, .32);
}
.photo-card--story { min-height: 460px; }
.photo-card--large { min-height: 320px; margin-bottom: 22px; }
.photo-card--small { min-height: 180px; margin-bottom: 18px; }

.proof-grid {
  display: grid;
  grid-template-columns: 1.35fr 1fr 1fr;
  gap: 22px;
  margin-top: 38px;
}
.proof-card {
  padding: 18px;
  border: 1px solid rgba(255, 247, 236, .18);
  border-radius: 30px;
  background: rgba(255, 247, 236, .10);
}
.proof-card--featured {
  grid-row: span 2;
}
.proof-card p { font-size: 17px; color: rgba(255, 247, 236, .82); }

.drink-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  margin-top: 36px;
}
.drink-card {
  padding: 20px;
  border: 1px solid rgba(36, 22, 15, .14);
  border-radius: 30px;
  background: var(--cream-2);
}
.drink-card__image {
  min-height: 190px;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ead3b7, #b98154);
}
.drink-card p { font-size: 16px; }

.reward-badge {
  aspect-ratio: 1;
  border-radius: 50%;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 28px;
  background: var(--cream-2);
  box-shadow: 0 20px 60px rgba(36, 22, 15, .12);
}
.reward-badge span {
  display: block;
  font-size: 72px;
  line-height: .8;
  font-weight: 950;
  letter-spacing: -0.08em;
}
.reward-badge strong { max-width: 160px; }
.address { font-weight: 800; }
.location-card {
  min-height: 380px;
  background: linear-gradient(135deg, var(--coffee), var(--espresso));
}

@media (max-width: 860px) {
  .hero {
    min-height: 78vh;
    padding: 72px 20px 56px;
  }
  .hero h1 {
    font-size: clamp(42px, 13vw, 62px);
    line-height: .96;
  }
  .hero__lede { font-size: 18px; }
  .section, .community, .rewards {
    padding: 72px 20px;
  }
  .split, .visit, .rewards {
    grid-template-columns: 1fr;
  }
  h2 {
    font-size: clamp(34px, 10vw, 48px);
    line-height: 1.02;
  }
  p { font-size: 17px; }
  .photo-card--story { min-height: 300px; }
  .proof-grid, .drink-grid {
    grid-template-columns: 1fr;
  }
  .proof-card--featured { grid-row: auto; }
  .button-row, .button-row--left {
    justify-content: stretch;
  }
  .button { width: 100%; }
  .reward-badge {
    width: min(260px, 100%);
    justify-self: center;
  }
}
`;
