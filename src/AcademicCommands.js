export function getAcademicCommandOutput(cmd) {
  cmd = cmd.trim().toLowerCase();

  if (cmd === "whoami") {
    return (
      <div>
        <b>Shreyas Shivapuji</b><br />
        Quantitative finance & computational science.<br />
        Researching the intersection of decentralized finance, market microstructure, and advanced computing.
      </div>
    );
  }

  if (cmd === "interests") {
    return (
      <div>
        <b>Interests:</b> VDFs, ZK Proofs, Decentralized Markets, Automated Market Makers, HPC for Finance, Options, Hedge Funds.
      </div>
    );
  }

  if (cmd === "cv") {
    // Opens the CV file in public/cv.pdf
    window.open(process.env.PUBLIC_URL + "/cv.pdf", "_blank", "noopener,noreferrer");
    return (
      <div>
        Opening CV&hellip;
        <br />
        If it didn’t open, <a href={process.env.PUBLIC_URL + "/cv.pdf"} target="_blank" rel="noopener noreferrer">click here</a>.
      </div>
    );
  }

  if (cmd === "research" || cmd === "publications") {
    return (
      <div>
        <b>Recent Research:</b>
        <ul>
          <li>
            <b>Order Book Imbalance as a High-Frequency Signal for Crypto Markets</b> – Preprint, 2023. <a href="#">[whitepaper]</a>
          </li>
          <li>
            <b>Volatility Arbitrage in VIX Futures</b> – 2024. <a href="#">[backtest]</a>
          </li>
          <li>
            <b>Cross-Asset Statistical Arbitrage between ETFs and Underlying Components</b> – 2023. <a href="#">[backtest]</a>
          </li>
        </ul>
      </div>
    );
  }

  if (cmd === "contact") {
    return (
      <div>
        <b>Email:</b> shreyas.shivapuji@example.com<br />
        <b>LinkedIn:</b> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/in/shreyas-shivapuji</a><br />
        <b>PGP Key:</b> 0xDEADBEEFCAFEBABE
      </div>
    );
  }

  if (cmd === "help") {
    return (
      <div>
        <b>Available commands:</b>
        <ul style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
          <li><code>whoami</code> – Short profile summary</li>
          <li><code>interests</code> – Current research interests</li>
          <li><code>research</code> or <code>publications</code> – Recent work</li>
          <li><code>contact</code> – Contact details</li>
          <li><code>cv</code> – Open CV in a new tab</li>
          <li><code>clear</code> – Clear output</li>
          <li><code>help</code> – List commands</li>
        </ul>
      </div>
    );
  }

  if (cmd === "clear") {
    return null; // handled in prompt
  }

  return (
    <div>
      <span style={{ color: "#e74c3c" }}>command not found:</span> <code>{cmd}</code>
    </div>
  );
}