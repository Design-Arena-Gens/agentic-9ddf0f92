const strategies: {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  bullets: string[];
}[] = [
  {
    title: "Capture every warm lead in the moment",
    description:
      "AI chatbots keep the conversation going 24/7, asking the right qualification questions and routing visitors to the right next step before they bail.",
    stat: "3.2×",
    statLabel: "More qualified leads",
    bullets: [
      "Trigger proactive prompts based on scroll depth or exit intent to rescue abandoning visitors.",
      "Collect contact details conversationally instead of long forms so there’s no friction.",
      "Hand off hot prospects to live reps instantly via Slack, email, or your CRM.",
    ],
  },
  {
    title: "Match visitors to the perfect offer instantly",
    description:
      "Instead of forcing visitors to dig through menus, intelligent flows surface the exact product, plan, or content that aligns with their intent.",
    stat: "47%",
    statLabel: "Lift in product discovery",
    bullets: [
      "Ask a few context-rich questions, then recommend the best-fit package in real time.",
      "Embed rich cards—pricing, testimonials, videos—directly in the conversation.",
      "Drive micro-conversions like demo bookings or free trials in the same session.",
    ],
  },
  {
    title: "Resolve objections before they become drop-offs",
    description:
      "Chatbots that understand FAQs, pricing pushback, and compliance concerns can neutralize friction without waiting for a human response.",
    stat: "61%",
    statLabel: "Fewer support-related drop-offs",
    bullets: [
      "Serve tailored proof points (case studies, ROI calculators) the moment doubts surface.",
      "Clarify policies—security, integrations, migration—in seconds with verified responses.",
      "Escalate complex issues to human reps with full conversation history for continuity.",
    ],
  },
  {
    title: "Personalize offers with real-time intent data",
    description:
      "Every reply gives you a data point. Feed that back into dynamic offers, price packaging, and nurturing paths that convert faster.",
    stat: "28%",
    statLabel: "Increase in average order value",
    bullets: [
      "Detect buying signals (budget, timeline, use case) and tailor pricing or bundles on the fly.",
      "Send follow-up emails or SMS sequences based on what was discussed in chat.",
      "Sync enriched profiles back into your CRM and marketing automation instantly.",
    ],
  },
  {
    title: "Continuously optimize the conversion journey",
    description:
      "AI copilots surface insights humans miss—drop-off phrases, winning scripts, new objections—so every conversation converts better than the last.",
    stat: "4.6×",
    statLabel: "Faster experiment velocity",
    bullets: [
      "Review conversation analytics to spot leaks by page, campaign, or persona.",
      "Run A/B tests on prompts, offers, or handoff timing without engineering.",
      "Train the model with new intents and responses as your product evolves.",
    ],
  },
];

export default function Page() {
  return (
    <main>
      <div className="page">
        <section className="hero">
          <span className="hero-eyebrow">Conversion Playbook</span>
          <h1>5 Ways AI Chatbots Increase Website Conversion Rates</h1>
          <p className="hero-lede">
            Most businesses think they need more traffic. But in reality… they just need to stop
            losing the traffic they already have. Conversational AI plugs the leaks, captures demand
            in the moment, and guides every qualified visitor to a yes.
          </p>
          <div className="hero-badge">
            <strong>Key takeaway:</strong> Deploying an AI assistant is less about shiny tech and
            more about conversation design that reinforces your funnel at every step.
          </div>
        </section>

        <section className="strategy-grid">
          {strategies.map((strategy, index) => (
            <article key={strategy.title} className="strategy-card">
              <header>
                <span className="strategy-index">{String(index + 1).padStart(2, "0")}</span>
                <h2>{strategy.title}</h2>
                <p className="strategy-description">{strategy.description}</p>
              </header>
              <div className="strategy-meta">
                <div className="stat-chip">
                  {strategy.stat}
                  <span>{strategy.statLabel}</span>
                </div>
                <ul className="bullet-list">
                  {strategy.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section className="cta" id="playbook">
          <h3>Bring an AI concierge to your site in under 14 days</h3>
          <p>
            Start with the traffic you already have. We’ll map the critical conversion moments,
            craft conversation flows that feel on-brand, and plug the assistant into your stack so
            sales and marketing see results fast.
          </p>
          <div className="cta-actions">
            <a className="cta-button" href="https://cal.com" target="_blank" rel="noreferrer">
              Book a strategy session
            </a>
            <span className="cta-secondary">
              Includes funnel audit, conversion roadmap, and launch checklist.
            </span>
          </div>
        </section>

        <footer className="footer">
          <strong>Why now?</strong>
          <p>
            AI chatbots don’t magically create demand—they stop the leaks. Deploy one and you’ll see
            the difference in conversion rate before you ever spend another dollar on traffic.
          </p>
        </footer>
      </div>
    </main>
  );
}
