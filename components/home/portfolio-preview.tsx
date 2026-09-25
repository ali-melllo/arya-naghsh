"use client";

import { motion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { LinkButton } from "@/components/ui/button";
import { PortfolioCard } from "@/components/portfolio/portfolio-card";
import { portfolio } from "@/lib/data/portfolio";

// Exactly three cards across three columns, so each gets its own
// dedicated entry direction rather than a cycled pattern.
const directions = [
  { x: -32, y: 16, rotate: -3 }, // left
  { x: 0, y: 36, rotate: 0 },    // middle
  { x: 32, y: 16, rotate: 3 },   // right
];

function cardVariants(i: number): Variants {
  const d = directions[i];
  return {
    hidden: { opacity: 0, x: d.x, y: d.y, rotate: d.rotate, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
    },
  };
}

export function PortfolioPreview() {
  return (
    <section className="border-b-2 border-dashed border-border py-16 sm:py-20">
      <div className="container">
        <SectionHeading
          title="آخرین پروژه‌های ما"
          subtitle="بخشی از پروژه‌هایی که با دقت، خلاقیت و استاندارد حرفه‌ای اجرا کرده‌ایم."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.slice(0, 3).map((p, i) => (
            <motion.div
              key={p.slug}
              variants={cardVariants(i)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3, margin: "-60px" }}
            >
              <PortfolioCard item={p} />
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <LinkButton href="/portfolio" variant="outline">مشاهده همه نمونه‌کارها</LinkButton>
        </div>
      </div>
    </section>
  );
}