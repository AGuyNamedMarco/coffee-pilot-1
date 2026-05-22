const reasons = [
  {
    title: 'Community',
    description: 'Familiar faces, real conversations, and a coffee stop people can build into their week.'
  },
  {
    title: 'Craft',
    description: 'Small-batch drinks made with care, from sweet lattes to slow-steeped cold brew.'
  },
  {
    title: 'Routine',
    description: 'A warm outdoor pause before work, errands, school drop-off, or the rest of the day.'
  }
];

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

export default function App() {
  return (
    <main className="site-shell">
      <style>{styles}</style>

      <section className="hero">
        <div className="hero__media" aria-label="Warm outdoor coffee moment used as mockup imagery" />
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">Alcove Community Coffee · Eastlake</p>
          <h1>Coffee worth slowing down for.</h1>
          <p className="hero__lede">Small-batch coffee, familiar faces, and a neighborhood ritual rooted in community.</p>
          <div className="button-row">
            <a className="button button--primary button--light" href="#visit">Find today&apos;s location</a>
            <a className="button button--ghost" href="#menu">See menu</a>
          </div>
          <p className="mockup-note">Concept mockup: final version should replace atmospheric imagery with client-approved photos.</p>
        </div>
      </section>

      <section className="section reasons-section">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">Why people come</p>
          <h2>A small coffee stop with a bigger feeling.</h2>
          <p>Alcove is strongest when the site sells the ritual: the pause, the people, the truck, and the reason to come back.</p>
        </div>
        <div className="reason-grid">
          {reasons.map((reason) => (
            <article className="reason-card" key={reason.title}>
              <span>{reason.title}</span>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="menu" className="section menu-section">
        <div className="section-heading section-heading--narrow">
          <p className="eyebrow">Featured drinks</p>
          <h2>Favorites that fit the daily ritual.</h2>
          <p>Keep the menu easy to scan, then invite visitors to order from the full Square menu.</p>
        </div>
        <div className="drink-grid">
          {drinks.map((drink) => (
            <article className="drink-card" key={drink.name}>
              <div className="drink-card__image"><span>Real drink photo</span></div>
              <h3>{drink.name}</h3>
              <p>{drink.description}</p>
            </article>
          ))}
        </div>
        <a className="button button--primary button--standalone" href="https://alcove-community-coffee.square.site/">View full menu</a>
      </section>

      <section className="section split story-section">
        <div className="photo-card photo-card--truck">
          <span>Real Alcove truck photo</span>
        </div>
        <div className="section-copy">
          <p className="eyebrow">Real Alcove</p>
          <h2>More than a truck. A neighborhood stop.</h2>
          <p>The strongest trust signal is simple: show the real place. A real truck image anchors the polished concept in something local, specific, and believable.</p>
          <p>Use this section to make Alcove feel easy to find, easy to remember, and worth building into someone&apos;s regular route.</p>
        </div>
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
          <h2>See where we&apos;re pouring today.</h2>
          <p className="address">990 Lane Avenue<br />Chula Vista, CA 91914</p>
          <p>Sun 8:30am–12:30pm<br />Tue/Wed/Thu 7:30am–1:00pm</p>
          <div className="button-row button-row--left">
            <a className="button button--primary" href="https://maps.google.com/?q=990+Lane+Avenue+Chula+Vista+CA+91914">Open Maps</a>
            <a className="button button--secondary" href="https://www.instagram.com/alcovecommunitycoffee/">Instagram</a>
          </div>
        </div>
        <div className="location-card">
          <span>Truck-location photo or map</span>
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
  min-height: 94vh;
  position: relative;
  display: grid;
  place-items: center;
  padding: 88px 24px;
  overflow: hidden;
  color: var(--cream-2);
  text-align: center;
}
.hero__media {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 24% 16%, rgba(229, 197, 109, .48), transparent 24%),
    radial-gradient(circle at 74% 32%, rgba(255, 247, 236, .18), transparent 20%),
    linear-gradient(135deg, #150d09 0%, #3d2419 42%, #9a6036 100%);
  transform: scale(1.03);
}
.hero__media::after {
  content: "";
  position: absolute;
  inset: 8%;
  border: 1px solid rgba(255, 247, 236, .22);
  border-radius: 40px;
  background:
    linear-gradient(135deg, rgba(255, 247, 236, .12), transparent 42%),
    radial-gradient(circle at 48% 48%, transparent 0 32%, rgba(36, 22, 15, .22) 33% 100%);
}
.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0,0,0,.10), rgba(0,0,0,.48));
}
.hero__content {
  position: relative;
  z-index: 1;
  max-width: 1040px;
}
.hero h1 {
  font-size: clamp(54px, 9vw, 124px);
  line-height: .9;
  letter-spacing: -0.07em;
  margin: 0;
}
.hero__lede {
  max-width: 720px;
  margin: 30px auto;
  font-size: clamp(19px, 2.1vw, 27px);
  line-height: 1.42;
}
.mockup-note {
  margin: 22px auto 0;
  max-width: 560px;
  color: rgba(255, 247, 236, .70);
  font-size: 13px;
}

.section {
  max-width: 1240px;
  margin: 0 auto;
  padding: 112px 32px;
}
.split, .visit, .rewards {
  display: grid;
  grid-template-columns: minmax(280px, 440px) 1fr;
  gap: clamp(32px, 6vw, 72px);
  align-items: center;
}
.reasons-section { padding-top: 118px; }
.rewards {
  max-width: none;
  grid-template-columns: minmax(0, 1fr) minmax(220px, 320px);
  background: var(--gold);
  padding-inline: max(32px, calc((100vw - 1240px) / 2));
}
.story-section { padding-top: 118px; }
.section-heading {
  max-width: 760px;
}
.section-heading--center {
  text-align: center;
  margin: 0 auto;
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
  font-size: clamp(36px, 5.3vw, 72px);
  line-height: .96;
  letter-spacing: -0.06em;
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
  min-height: 50px;
  border-radius: 999px;
  padding: 15px 24px;
  font-weight: 850;
  text-decoration: none;
}
.button--primary { background: var(--espresso); color: var(--cream-2); }
.button--light { background: var(--cream-2); color: var(--espresso); }
.button--ghost { border: 2px solid var(--cream-2); color: var(--cream-2); }
.button--secondary { border: 2px solid var(--espresso); color: var(--espresso); }
.button--standalone { margin-top: 36px; }

.reason-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  margin-top: 42px;
}
.reason-card {
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 28px;
  border-radius: 34px;
  background: var(--cream-2);
  border: 1px solid rgba(36, 22, 15, .12);
  box-shadow: 0 18px 50px rgba(36, 22, 15, .08);
}
.reason-card span {
  font-size: clamp(30px, 3vw, 42px);
  font-weight: 950;
  letter-spacing: -0.06em;
}
.reason-card p { margin-bottom: 0; color: var(--muted); }

.photo-card, .location-card, .drink-card__image {
  display: grid;
  place-items: center;
  border-radius: 34px;
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
.photo-card--truck {
  min-height: 500px;
  background:
    linear-gradient(rgba(36,22,15,.06), rgba(36,22,15,.32)),
    linear-gradient(135deg, #d5aa67 0%, #7f5034 58%, #2b1a12 100%);
}

.drink-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  margin-top: 38px;
}
.drink-card {
  padding: 20px;
  border: 1px solid rgba(36, 22, 15, .14);
  border-radius: 30px;
  background: var(--cream-2);
}
.drink-card__image {
  min-height: 210px;
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
  min-height: 400px;
  background: linear-gradient(135deg, var(--coffee), var(--espresso));
}

@media (max-width: 860px) {
  .hero {
    min-height: 84vh;
    padding: 76px 20px 60px;
  }
  .hero h1 {
    font-size: clamp(46px, 14vw, 68px);
    line-height: .94;
  }
  .hero__lede { font-size: 18px; }
  .section, .rewards {
    padding: 76px 20px;
  }
  .split, .visit, .rewards {
    grid-template-columns: 1fr;
  }
  h2 {
    font-size: clamp(36px, 10.5vw, 52px);
    line-height: 1;
  }
  p { font-size: 17px; }
  .reason-grid, .drink-grid {
    grid-template-columns: 1fr;
  }
  .reason-card { min-height: 220px; }
  .photo-card--truck { min-height: 320px; }
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