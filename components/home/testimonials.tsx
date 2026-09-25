"use client";

import { motion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/lib/data/testimonials";

// Same convention as WhyUs: two-column grid, columns converge from
// opposite sides, rows stagger together rather than item-by-item.
const cardVariants: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -24 : 24,
    y: 14,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: Math.floor(i / 2) * 0.1 },
  }),
};

// Avatar lands with the same spring pop used for the WhyUs dots and the
// process step numbers.
const avatarVariants: Variants = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 16,
      delay: Math.floor(i / 2) * 0.1 + 0.2,
    },
  }),
};

export function Testimonials() {
  return (
    <section className="border-b-2 border-dashed border-border py-16 sm:py-20">
      <div className="container">
        <SectionHeading title="مشتریان درباره ما چه می‌گویند؟" />
        <div className="grid gap-5 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4, margin: "-60px" }}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <p className="mb-5 text-[0.98rem]">«{t.quote}»</p>
              <div className="flex items-center gap-3">
                <motion.div
                  custom={i}
                  variants={avatarVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4, margin: "-60px" }}
                  className="h-9 w-9 rounded-full border border-border bg-accent/10"
                />
                <div>
                  <b className="block text-sm">{t.name}</b>
                  <span className="text-xs text-ink-soft">{t.position}، {t.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}