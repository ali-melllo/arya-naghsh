"use client";

import { motion, type Variants } from "framer-motion";
import { LinkButton } from "@/components/ui/button";

// A single focal block, not a grid — settles in with a scale+fade rather
// than a directional slide, since there's no "previous item" to arrive
// from.
const boxVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// Buttons pop in after the box has (mostly) landed, so the CTA reads as
// "message arrives, then the actions follow."
const buttonGroupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export function FinalCta() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4, margin: "-60px" }}
          variants={boxVariants}
          className="rounded-xl border border-border bg-gradient-to-br from-accent/10 to-transparent p-10 text-center sm:p-14"
        >
          <h2 className="mb-3.5 text-2xl font-extrabold sm:text-3xl">
            آماده‌اید ایده‌تان را روی کاغذ بیاورید؟
          </h2>
          <p className="mb-7 text-ink-soft">پروژه چاپی خود را با آریا نقش شروع کنید.</p>
          <motion.div
            variants={buttonGroupVariants}
            className="flex flex-wrap justify-center gap-3.5"
          >
            <motion.div variants={buttonVariants}>
              <LinkButton href="/contact">درخواست مشاوره</LinkButton>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <LinkButton href="/contact" variant="outline">تماس با ما</LinkButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}