"use client";

import { useState } from "react";
import Logo from "./Logo";

const navItems = [
  { label: "導入ステップ", href: "#steps" },
  { label: "プラン", href: "#pricing" },
  { label: "よくある質問", href: "#faq" },
  { label: "お問い合わせ", href: "#contact" },
  { label: "運営会社", href: "#company" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0px_1px_32px_rgba(0,0,0,0.05)]">
      <div className="max-w-[1264px] mx-auto flex items-center justify-between px-6 lg:px-0 h-[68px]">
        <a href="#" className="flex items-center">
          <Logo className="h-6" />
        </a>

        <nav className="hidden lg:flex items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[16px] font-medium text-text-light hover:text-primary transition-colors px-4 py-2.5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="lg:hidden bg-white shadow-[0px_1px_32px_rgba(0,0,0,0.05)] px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-[16px] font-medium text-text-light hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
