"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: React.ReactNode | string;
  className?: string;
  thumbnail?: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full p-6 grid grid-cols-1 md:grid-cols-6 gap-6 max-w-7xl mx-auto relative">
      {cards.map((card) => (
        <div key={card.id} className={cn(card.className ?? "md:col-span-2")}> 
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              "relative overflow-hidden rounded-xl p-6 transition-shadow cursor-pointer",
              selected?.id === card.id
                ? "z-50 shadow-2xl bg-white/95 dark:bg-neutral-900"
                : "bg-white dark:bg-neutral-900/80 shadow"
            )}
            layoutId={`card-${card.id}`}
          >
            <div className="flex h-full flex-col gap-4">
              <div className="flex-1">{card.content}</div>
              {card.thumbnail ? (
                <motion.img
                  src={card.thumbnail}
                  alt=""
                  className="mt-4 w-full rounded-md object-cover h-40"
                />
              ) : null}
            </div>
          </motion.div>
        </div>
      ))}

      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "fixed inset-0 z-40 bg-black/40",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 1 : 0 }}
      />
    </div>
  );
};
