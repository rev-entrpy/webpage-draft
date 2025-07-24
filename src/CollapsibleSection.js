import React, { useRef, useEffect, useState } from "react";

export default function CollapsibleSection({
  title,
  children,
  defaultOpen = false
}) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef();

  // For smooth animation on open/close
  useEffect(() => {
    if (contentRef.current) {
      if (open) {
        contentRef.current.style.height = contentRef.current.scrollHeight + "px";
        setTimeout(() => {
          contentRef.current.style.height = "auto";
        }, 400);
      } else {
        contentRef.current.style.height = contentRef.current.scrollHeight + "px";
        void contentRef.current.offsetWidth;
        contentRef.current.style.height = "0px";
      }
    }
  }, [open]);

  return (
    <div className={`collapsible ${open ? "open" : "closed"}`}>
      <div
        className="section-title"
        onClick={() => setOpen(o => !o)}
        tabIndex={0}
        role="button"
        aria-expanded={open}
      >
        {title}
      </div>
      <div className="collapsible-content" ref={contentRef}>
        <div className="section-content">{children}</div>
      </div>
    </div>
  );
}