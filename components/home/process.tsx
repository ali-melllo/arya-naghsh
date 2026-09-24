"use client";

import { motion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { processSteps } from "@/lib/data/process";

// Steps arrive in reading order, each sliding in from where the previous
// step sits — so it reads as "step 2 continues from step 1" rather than
// four unrelated cards fading in together.
const stepVariants: Variants = {
  hidden: { opacity: 0, x: 24, y: 6 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 },
  }),
};

// The number "lands" with a small spring pop, slightly after its step
// container has already arrived.
const numberVariants: Variants = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 16, delay: i * 0.15 + 0.15 },
  }),
};

// The connector line between steps grows in after both neighbors have
// landed, like it's drawing itself to link them.
const dividerVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: (i: number) => ({
    scaleY: 1,
    transition: { duration: 0.4, ease: "easeOut", delay: i * 0.15 + 0.3 },
  }),
};

export function Process() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <div className="container">
        <SectionHeading title="از ایده تا چاپ نهایی" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.n}
              custom={i}
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4, margin: "-60px" }}
              className="relative ps-6"
            >
              {i > 0 && (
                <motion.span
                  custom={i}
                  variants={dividerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4, margin: "-60px" }}
                  className="absolute inset-y-0 start-0 w-px origin-top bg-border"
                />
              )}
              <motion.div
                custom={i}
                variants={numberVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4, margin: "-60px" }}
                className="mb-2.5 text-3xl font-extrabold text-accent/25"
              >
                {step.n}
              </motion.div>
              <h3 className="mb-1.5 text-base font-bold">{step.title}</h3>
              <p className="text-sm text-ink-soft">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}