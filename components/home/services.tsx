"use client";

import { motion, type Variants } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { services } from "@/lib/data/services";

const toPersianDigits = (n: number) =>
  String(n).replace(/\d/g, (d) => ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"][Number(d)]);

// Three-column grid, so cycle three entry directions across the cards:
// left column drifts in from the start side, middle rises from below,
// end column drifts in from the end side — gives the grid a converging
// feel instead of every card doing the same fade-up.
const directions = [
  { x: -28, y: 18, rotate: -3 }, // start / left
  { x: 0, y: 34, rotate: 0 },    // middle
  { x: 28, y: 18, rotate: 3 },   // end / right
];

function cardVariants(i: number): Variants {
  const d = directions[i % 3];
  return {
    hidden: { opacity: 0, x: d.x, y: d.y, rotate: d.rotate, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
        delay: (i % 3) * 0.08,
      },
    },
  };
}

export function Services() {
  return (
    <section className="border-b-2 border-dashed border-border py-16 sm:py-20">
      <div className="container">
        <SectionHeading
          title="خدمات چاپ ما"
          subtitle="از ایده تا محصول نهایی، تمام مراحل چاپ را با دقت و استاندارد حرفه‌ای انجام می‌دهیم."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              variants={cardVariants(i)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3, margin: "-60px" }}
            >
              <Card>
                <div className="mb-2.5 text-xs font-bold text-accent">
                  {toPersianDigits(i + 1).padStart(2, "۰")}
                </div>
                <h3 className="mb-1.5 text-base font-bold">{s.title}</h3>
                <p className="text-sm text-ink-soft">{s.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}