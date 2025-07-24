export function getAcademicCommandOutput(cmd) {
  cmd = cmd.trim().toLowerCase();

  if (cmd === "whoami") {
    return (
      <>
        <div>
          Shreyas Shivapuji – Computer Science enthusiast & Quantitative Finance researcher.<br />
          Passionate about computational finance, decentralized markets, and advanced cryptography.
        </div>
      </>
    );
  }

  if (cmd === "interests") {
    return (
      <>
        <div>
          <b>Research Interests:</b><br />
          Verifiable Delay Functions (VDFs), Zero-Knowledge Proofs, Decentralized Finance, Automated Market Makers, HPC for financial markets, option pricing, and hedge funds.
        </div>
      </>
    );
  }

  if (cmd === "research" || cmd === "publications") {
    return (
      <>
        <div>
          <b>Selected Research & Publications:</b>
          <ul>
            <li>
              <b>Order Book Imbalance as a High-Frequency Signal for Crypto Markets</b> – Preprint, 2023. <a href="#">[whitepaper]</a>
            </li>
            <li>
              <b>Volatility Arbitrage in VIX Futures</b> – 2024. <a href="#">[backtest]</a>
            </li>
            <li>
              <b>Cross-Asset Statistical Arbitrage between ETFs and their Underlying Components</b> – 2023. <a href="#">[backtest]</a>
            </li>
          </ul>
        </div>
      </>
    );
  }

  if (cmd === "contact") {
    return (
      <>
        <div>
          <b>Email:</b> shreyas.shivapuji@example.com<br />
          <b>LinkedIn:</b> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/in/shreyas-shivapuji</a><br />
          <b>PGP Key:</b> 0xDEADBEEFCAFEBABE
        </div>
      </>
    );
  }

  if (cmd === "help") {
    return (
      <>
        <div>
          <b>Available commands:</b>
          <ul style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
            <li><code>whoami</code> – Show profile summary</li>
            <li><code>interests</code> – Research interests</li>
            <li><code>research</code> or <code>publications</code> – Recent research & publications</li>
            <li><code>contact</code> – Contact info</li>
            <li><code>clear</code> – Clear command output</li>
            <li><code>help</code> – Show this help</li>
          </ul>
        </div>
      </>
    );
  }

  if (cmd === "clear") {
    return null; // handled in prompt
  }

  // Add more academic/quant commands as desired

  return (
    <div>
      <span style={{ color: "#e74c3c" }}>command not found:</span> <code>{cmd}</code>
    </div>
  );
}