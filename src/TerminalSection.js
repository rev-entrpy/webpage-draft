import React from "react";
import CollapsibleSection from "./CollapsibleSection";
import { getAcademicCommandOutput } from "./AcademicCommands";

function Typewriter({ text = "" }) {
  const [displayed, setDisplayed] = React.useState("");
  React.useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(timer);
    }, 34);
    return () => clearInterval(timer);
  }, [text]);
  return <span className="typewriter">{displayed}</span>;
}

function CommandPrompt() {
  const [value, setValue] = React.useState("");
  const [history, setHistory] = React.useState([]);
  function handleEnter(e) {
    if (e.key === "Enter" && value.trim()) {
      if (value.trim().toLowerCase() === "clear") {
        setHistory([]);
        setValue("");
        return;
      }
      setHistory(h => [...h, { cmd: value, out: getAcademicCommandOutput(value) }]);
      setValue("");
    }
  }
  return (
    <div className="command-prompt" aria-label="Terminal Prompt">
      {history.map((h, i) => (
        <div key={i}>
          <span style={{ color: "#0074D9", fontWeight: 600 }}>$ </span>
          <span>{h.cmd}</span>
          <div className="command-output">{h.out}</div>
        </div>
      ))}
      <span style={{ color: "#0074D9", fontWeight: 600 }}>$ </span>
      <input
        className="command-input"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleEnter}
        spellCheck={false}
        autoFocus
        placeholder="Type 'help' for commands..."
        aria-label="Terminal Input"
      />
    </div>
  );
}

export default function TerminalSection() {
  return (
    <main className="terminal-section">
      <div style={{ marginBottom: "1.5em" }}>
        <Typewriter text="Welcome to the academic portfolio of Shreyas Shivapuji. Type 'help' for interactive commands or scroll for research highlights." />
      </div>
      <CollapsibleSection title="Research Statement">
        <p>
          <b>Summary:</b> My research explores the intersection of computer science and finance, with a focus on cryptography (VDFs, ZKPs), decentralized exchanges, automated market makers, and high-performance computing applications in financial modeling and trading.
        </p>
        <p>
          I am currently investigating how multi-core and GPU-based systems can transform order execution, options pricing, and risk management in modern financial markets.
        </p>
      </CollapsibleSection>

      <CollapsibleSection title="Strategies & Research">
        <p>
          <b>Profiles:</b> <a href="#">GitHub</a>, <a href="#">QuantConnect</a>
        </p>
        <h4 className="section-year">2024</h4>
        <ul>
          <li>
            <b>Strategy:</b> Volatility Arbitrage in VIX Futures.
            <b> Result:</b> Consistent alpha generation in high-volatility regimes.
            <a href="#">[backtest]</a>
          </li>
        </ul>
        <h4 className="section-year">2023</h4>
        <ul>
          <li>
            <b>Research:</b> Order Book Imbalance as a High-Frequency Signal for Crypto Markets.
            <a href="#">[whitepaper]</a>
          </li>
          <li>
            <b>Strategy:</b> Cross-Asset Statistical Arbitrage between ETFs and their underlying components.
            <a href="#">[backtest]</a>
          </li>
        </ul>
      </CollapsibleSection>

      <CollapsibleSection title="Open Source Projects">
        <ul>
          <li>
            <b>pybacktest:</b> High-performance, event-driven backtesting engine (Python/Rust).
          </li>
          <li>
            <b>cryptofeed-ws:</b> Low-latency WebSocket connector for real-time crypto market data.
          </li>
        </ul>
      </CollapsibleSection>
      <CommandPrompt />
    </main>
  );
}