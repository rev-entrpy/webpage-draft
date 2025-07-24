import React from "react";

const socials = [
  { name: "GitHub", url: "https://github.com/shreyas-shivapuji", svg: <svg height="1em" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.6-.18-3.29-.8-3.29-3.56 0-.79.28-1.43.74-1.93-.07-.18-.32-.92.07-.1.1-.01.37-.02.75.36.35-.1.73-.15 1.11-.15.38 0 .76.05 1.11.15.38-.38.65-.37.75-.36.39-.82.14-.92.07-.1.46.5.74 1.14.74 1.93 0 2.77-1.69 3.38-3.29 3.56.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z"/></svg> },
  { name: "LinkedIn", url: "https://linkedin.com", svg: <svg height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1.01 0-1.5-.68-1.5-1.54 0-.87.5-1.53 1.53-1.53s1.5.66 1.5 1.53c0 .86-.49 1.54-1.53 1.54zm13.5 11.3h-3v-5.6c0-1.34-.48-2.26-1.67-2.26-.91 0-1.45.61-1.69 1.2-.09.22-.11.53-.11.84v5.82h-3s.04-9.45 0-10h3v1.41c.4-.62 1.12-1.51 2.72-1.51 1.99 0 3.48 1.3 3.48 4.1v6z"/></svg> },
  { name: "Twitter", url: "https://twitter.com", svg: <svg height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M19.633 7.997c.013.176.013.353.013.53 0 5.387-4.099 11.594-11.594 11.594-2.306 0-4.454-.676-6.263-1.843.321.037.641.055.974.055 1.92 0 3.684-.653 5.093-1.758-1.792-.033-3.299-1.215-3.817-2.841.25.047.507.073.773.073.374 0 .736-.05 1.079-.144-1.877-.377-3.292-2.031-3.292-4.022v-.051c.553.308 1.185.492 1.86.514-.552-.369-1.012-1-1.012-1.716 0-.377.101-.731.278-1.036 2.02 2.475 5.045 4.099 8.444 4.278-.07-.151-.107-.317-.107-.485 0-1.166.946-2.112 2.112-2.112.607 0 1.155.256 1.539.666.482-.095.938-.271 1.346-.515-.158.494-.494.909-.931 1.171.429-.051.885-.165 1.285-.334-.285.424-.646.797-1.063 1.095z"/></svg> }
];

export default function ProfileCard() {
  return (
    <aside className="profile-card">
      <img
        src={process.env.PUBLIC_URL + "/profile-photo.png"}
        alt="Profile"
        className="profile-photo"
      />
      <div className="profile-name">Shreyas Shivapuji</div>
      <div className="profile-role">Quantitative Finance & Computer Science</div>
      <div className="profile-contact">
        <b>Email:</b> shreyas.shivapuji@example.com<br />
        <b>PGP Key:</b> 0xDEADBEEFCAFEBABE
      </div>
      <div className="profile-bio">
        Computer Science enthusiast passionate about the intersection of computation and finance. Areas of interest include Verifiable Delay Functions, Zero-Knowledge Proofs, Decentralized Finance (DeFi), Decentralized Markets, Exchanges, and Automated Market Makers. Currently exploring the implications of High-Performance Computing (multi-core processors, GPUs) in financial markets, order execution, option pricing, and hedge funds.
      </div>
      <div className="social-icons">
        {socials.map(s => (
          <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" title={s.name}>
            {s.svg}
          </a>
        ))}
      </div>
    </aside>
  );
}