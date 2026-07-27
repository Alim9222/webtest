"use client";

import { useState } from "react";

export default function Header({ whatsappUrl = "#", telegramUrl = "#" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Residencia Legal">
        <span className="brand-mark">R</span>
        <span className="brand-name">
          RESIDENCIA
          <small>legal</small>
        </span>
      </a>
      <nav className="header-actions" aria-label="Связаться">
        <a
          className="round-icon whatsapp"
          href={whatsappUrl}
          aria-label="WhatsApp"
        >
          W
        </a>
        <a
          className="round-icon telegram"
          href={telegramUrl}
          aria-label="Telegram"
        >
          T
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}
