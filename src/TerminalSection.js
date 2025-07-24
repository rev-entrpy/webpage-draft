import React from "react";
import CollapsibleSection from "./CollapsibleSection";
import { getAcademicCommandOutput } from "./AcademicCommands";

// Enhanced Typewriter that supports multiple lines, sequentially
function MultiTypewriter({ lines, delay = 0 }) {
  const [currentLine, setCurrentLine] = React.useState(0);
  const [displayed, setDisplayed] = React.useState("");
  const [typing, setTyping] = React.useState(true);

  React.useEffect(() => {
    let lineIdx = currentLine;
    if (lineIdx >= lines.length) return;
    let i = 0;
    setDisplayed("");
    setTyping(true);

    const typeInterval = setInterval(() => {
      setDisplayed(lines[lineIdx].slice(0, i));
      i++;
      if (i > lines[lineIdx].length) {
        clearInterval(typeInterval);
        setTyping(false);
        // Proceed to next line after a delay, unless last line
        if (lineIdx < lines.length - 1) {
          setTimeout(() => {
            setCurrentLine(lineIdx + 1);
            setTyping(true);
          }, delay);
        }
      }
    }, 33);

    return () => clearInterval(typeInterval);
  }, [currentLine, lines, delay]);

  return (
    <div style={{ minHeight: `${lines.length * 1.3}em`, marginBottom: "1.2em" }}>
      {lines.map((line, idx) => (
        <div key={idx} style={{ height: "1.2em" }}>
          {idx < currentLine ? (
            <span className="typewriter">{line}</span>
          ) : idx === currentLine ? (
            <span className="typewriter">
              {displayed}
              {/* Blinking cursor only for the last line and when typing is done */}
              {idx === lines.length - 1 && !typing ? (
                <span className="typewriter-blink">_</span>
              ) : typing ? (
                <span className="typewriter-blink">_</span>
              ) : null}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
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
          <span style={{ color: "#55ffff", fontWeight: 600 }}>$ </span>
          <span>{h.cmd}</span>
          <div className="command-output">{h.out}</div>
        </div>
      ))}
      <span style={{ color: "#55ff55", fontWeight: 600 }}>$ </span>
      <input
        className="command-input"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleEnter}
        spellCheck={false}
        autoFocus
        placeholder="Type `help' for commands..."
        aria-label="Terminal Input"
      />
    </div>
  );
}

export default function TerminalSection() {
  return (
    <main className="terminal-section">
      <MultiTypewriter
        lines={[
          "Algorithmic strategies engineered.",
          "Cryptographic integrity upheld.",
          "Computational power harnessed."
        ]}
        delay={1200}
      />
      <CollapsibleSection title="Research Statement">
        <p>
          <b>Summary:</b> My research explores the intricate interplay between advanced computation and financial markets, especially the technical and practical aspects of cryptography (VDFs, ZKPs), decentralized exchanges, and automated market makers. I am investigating how multi-core and GPU architectures can accelerate financial analytics, order routing, and risk management.
        </p>
        <p>
          I’m motivated by tough questions: How can transparent, decentralized markets coexist with efficiency and privacy? What new risks and opportunities does high-performance computing unlock for quant traders and hedge funds?
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
            <b> Result:</b> Outperformed benchmarks in high-volatility regimes.
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
            <b>Strategy:</b> Cross-Asset Statistical Arbitrage between ETFs and underlying components.
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
            <b>cryptofeed-ws:</b> Low-latency WebSocket connector for real-time cryptocurrency market data.
          </li>
        </ul>
      </CollapsibleSection>
      <CommandPrompt />
    </main>
  );
}