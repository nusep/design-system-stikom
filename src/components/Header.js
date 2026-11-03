"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap } from "lucide-react";
import Button from "./Button";

const navigation = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Pendaftaran", href: "#pendaftaran" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo dan nama kampus */}
        <Link href="#beranda" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-stikom-navy text-white">
            <GraduationCap size={27} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-stikom-navy">
              SIAKAD STIKOM
            </h1>
            <p className="text-xs text-slate-500">Layanan Akademik 2026</p>
          </div>
        </Link>

        {/* Navigasi Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-stikom-blue"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Tombol Login Desktop */}
        <div className="hidden md:block">
          <Button size="md">Login</Button>
        </div>

        {/* Tombol Menu Mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigasi Mobile */}
      {menuOpen && (
        <nav className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-stikom-blue"
              >
                {item.label}
              </a>
            ))}

            <Button fullWidth>Login</Button>
          </div>
        </nav>
      )}
    </header>
  );
}
