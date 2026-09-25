"use client";

import { motion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";

const items = [
  { title: "کیفیت دقیق", description: "کنترل کیفیت در تمام مراحل چاپ." },
  { title: "مشاوره تخصصی", description: "کمک به انتخاب بهترین متریال و روش چاپ." },
  { title: "تحویل قابل اعتماد", description: "برنامه‌ریزی دقیق و تحویل طبق زمان‌بندی." },
  { title: "توجه به جزئیات", description: "جزئیات کوچک، تفاوت یک چاپ معمولی و حرفه‌ای را ایجاد می‌کنند." },
];

// Two-column grid — left column drifts in from the start side, right
// column from the end side, so the two columns visually converge toward
// the center rather than every item doing the same fade-up.
const itemVariants: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -24 : 24,
    y: 10,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: Math.floor(i / 2) * 0.1 },
  }),
};

// The accent dot lands with the same small spring "pop" used for the
// process step numbers, tying the two sections' motion language together.
const dotVariants: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 16,
      delay: Math.floor(i / 2) * 0.1 + 0.15,
    },
  }),
};

export function WhyUs() {
  return (
    <section className="border-b-2 border-dashed border-border py-16 sm:py-20">
      <div className="container">
        <SectionHeading title="چرا آریا نقش؟" />
        <div className="grid gap-9 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4, margin: "-60px" }}
              className="flex gap-4"
            >
              <motion.span
                custom={i}
                variants={dotVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4, margin: "-60px" }}
                className="mt-2.5 h-2 w-2 flex-none rounded-full bg-accent"
              />
              <div>
                <h3 className="mb-1.5 text-base font-bold">{item.title}</h3>
                <p className="text-sm text-ink-soft">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}