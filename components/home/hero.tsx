"use client"

import { motion, type Variants } from "framer-motion";
import { LinkButton } from "@/components/ui/button";
import { NumberTicker } from "@/components/shared/number-ticker";

// Each card enters from its own direction/rotation so the composition
// feels like it's assembling itself rather than three identical fades.
const cardSurface: Variants = {
  hidden: { opacity: 0, x: -36, y: -24, rotate: -7 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardAccent: Variants = {
  hidden: { opacity: 0, x: 48, y: 16, scale: 0.82, rotate: 9 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.12 },
  },
};

const cardPaper: Variants = {
  hidden: { opacity: 0, y: 44, rotate: -4 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.24 },
  },
};

const mark: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 0.4, scale: 1, transition: { duration: 0.4, delay: 0.5 } },
};

export function Hero() {
  return (
    <section className="border-b-2 border-dashed border-border py-16 sm:py-20">
      <div className="container grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="mb-5 text-3xl font-extrabold leading-[1.3] tracking-tight sm:text-4xl lg:text-5xl">
            هر ایده‌ای، وقتی درست چاپ شود، ماندگار می‌شود.
          </h1>
          <p className="mb-8 max-w-[52ch] text-lg text-ink-soft">
            آریا نقش؛ همراه شما برای چاپ حرفه‌ای، دقیق و باکیفیت. از انتخاب متریال تا آخرین
            جزئیات چاپ، کیفیت برای ما یک انتخاب نیست؛ یک استاندارد است.
          </p>
          <div className="mb-11 flex flex-wrap gap-3.5">
            <LinkButton href="/portfolio">مشاهده نمونه‌کارها</LinkButton>
            <LinkButton href="/contact" variant="outline">درخواست مشاوره</LinkButton>
          </div>
          <div className="flex flex-wrap gap-9">
            <NumberTicker value={10} suffix="+" label="سال تجربه" />
            <NumberTicker value={500} suffix="+" label="پروژه" />
            <NumberTicker value={120} suffix="+" label="مشتری" />
            <NumberTicker value={98} suffix="٪" label="رضایت" />
          </div>
        </div>

        <div className="relative aspect-square">
          <motion.div
            variants={cardSurface}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="absolute inset-x-[8%] top-[6%] h-[42%] w-[62%] rounded-xl border border-border bg-surface shadow-2xl"
          />
          <motion.div
            variants={cardAccent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="absolute inset-x-[4%] top-[34%] h-[38%] w-[52%] rounded-xl bg-accent shadow-2xl [inset-inline-end:4%] [inset-inline-start:auto]"
          />
          <motion.div
            variants={cardPaper}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="absolute bottom-[6%] h-[34%] w-[56%] rounded-xl border border-ink-soft bg-paper shadow-xl [inset-inline-start:18%]"
          />
          {["start-0 top-0", "end-0 top-0", "start-0 bottom-0", "end-0 bottom-0"].map((pos) => (
            <motion.span
              key={pos}
              variants={mark}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className={`absolute h-3.5 w-3.5 ${pos.replace("start-0", "inset-inline-start-0").replace("end-0", "inset-inline-end-0")}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}