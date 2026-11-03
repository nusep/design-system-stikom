"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Bagaimana cara melakukan pendaftaran mahasiswa?",
    answer:
      "Mahasiswa dapat mengisi formulir pendaftaran melalui halaman layanan akademik SIAKAD STIKOM 2026 dengan melengkapi data yang diminta.",
  },
  {
    question: "Bagaimana cara melihat jadwal perkuliahan?",
    answer:
      "Informasi jadwal perkuliahan dapat dilihat melalui menu layanan akademik setelah mahasiswa masuk ke sistem.",
  },
  {
    question: "Bagaimana cara mendapatkan informasi akademik?",
    answer:
      "Informasi akademik terbaru dapat dilihat melalui bagian pengumuman yang tersedia pada halaman utama SIAKAD STIKOM 2026.",
  },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="space-y-3">
      {faqData.map((item, index) => {
        const isOpen = activeIndex === index;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white"
          >
            <h3>
              <button
                type="button"
                onClick={() => setActiveIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-slate-800 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                <span>{item.question}</span>

                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>

            <div
              id={panelId}
              hidden={!isOpen}
              className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
