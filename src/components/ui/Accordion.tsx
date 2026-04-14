"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0 bg-white overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-slate-50 transition-colors text-left"
      >
        <span className="font-bold text-slate-800 text-[15px] underline decoration-slate-400 decoration-1 underline-offset-4 pr-4">
          {question}
        </span>
        {isOpen ? (
          <Minus className="text-slate-900 font-bold shrink-0" size={20} />
        ) : (
          <Plus className="text-slate-900 font-bold shrink-0" size={20} />
        )}
      </button>
      <div
        className={`px-6 text-slate-600 text-sm overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <p className="leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
