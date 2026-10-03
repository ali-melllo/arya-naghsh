"use client"

import { LinkButton } from "@/components/ui/button";



export function Hero() {
  return (
    <section className="border-b-2 border-dashed border-border py-10 ">
      <div className="relative h-[70svh] container flex justify-center items-center">
        <div className="h-32 md:h-56 bg-gradient-to-b z-30 scale-105 top-0 absolute inset-x-0 dark:from-black from-white to-transparent" />
        <div className="h-32 md:h-56 bg-gradient-to-b z-30 scale-105 top-0 absolute inset-x-0 dark:from-black from-white to-transparent" />
        <div className="h-32 md:h-56 bg-gradient-to-b z-30 scale-105 top-0 absolute inset-x-0 dark:from-black from-white to-transparent" />

        <div className="hidden md:flex md:w-48 bg-gradient-to-l z-30 scale-105 top-0 absolute right-0 h-full inset-y-0 dark:from-black from-white to-transparent" />
        <div className="hidden md:flex md:w-48 bg-gradient-to-l z-30 scale-105 top-0 absolute right-0 h-full inset-y-0 dark:from-black from-white to-transparent" />
        <div className="hidden md:flex md:w-48 bg-gradient-to-l z-30 scale-105 top-0 absolute right-0 h-full inset-y-0 dark:from-black from-white to-transparent" />
        <div className="hidden md:flex md:w-48 bg-gradient-to-l z-30 scale-105 top-0 absolute right-0 h-full inset-y-0 dark:from-black from-white to-transparent" />


        <div className="h-36 md:h-48 bg-gradient-to-t z-30 scale-105 bottom-0 absolute inset-x-0 dark:from-black from-white to-transparent" />
        <div className="h-36 md:h-48 bg-gradient-to-t z-30 scale-105 bottom-0 absolute inset-x-0 dark:from-black from-white to-transparent" />
        <div className="h-36 md:h-48 bg-gradient-to-t z-30 scale-105 bottom-0 absolute inset-x-0 dark:from-black from-white to-transparent" />

        <div className="hidden md:flex md:w-48 bg-gradient-to-r z-30 scale-105 top-0 absolute left-0 h-full inset-y-0 dark:from-black from-white to-transparent" />
        <div className="hidden md:flex md:w-48 bg-gradient-to-r z-30 scale-105 top-0 absolute left-0 h-full inset-y-0 dark:from-black from-white to-transparent" />
        <div className="hidden md:flex md:w-48 bg-gradient-to-r z-30 scale-105 top-0 absolute left-0 h-full inset-y-0 dark:from-black from-white to-transparent" />
        <div className="hidden md:flex md:w-48 bg-gradient-to-r z-30 scale-105 top-0 absolute left-0 h-full inset-y-0 dark:from-black from-white to-transparent" />


        <div className="z-0 shadow-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute z-0 inset-0 size-full object-cover"
          >
            <source src="/assets/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="z-30 flex bg-gradient-to-b w-full pt-5 dark:from-black via-black to-transparent flex-col items-center absolute top-0">
          <h1 className="mb-5 text-2xl text-center md:text-right md:text-3xl font-extrabold leading-[1.3] tracking-tight ">
            هر ایده‌ای، وقتی درست چاپ شود، ماندگار می‌شود.
          </h1>
          <p className="mb-8 max-w-3xl text-center text-sm md:text-lg dark:text-ink-soft text-gray-800">
            آریا نقش؛ همراه شما برای چاپ حرفه‌ای، دقیق و باکیفیت. از انتخاب متریال تا آخرین
            جزئیات چاپ، کیفیت برای ما یک انتخاب نیست؛ یک استاندارد است.
          </p>
          <div className="mb-11 justify-center md:justify-start flex flex-wrap gap-3.5">
            <LinkButton className="min-w-48 md:w-auto" href="/portfolio">مشاهده نمونه‌کارها</LinkButton>
            <LinkButton className="min-w-48 md:w-auto backdrop-blur-sm" href="/contact" variant="outline">درخواست مشاوره</LinkButton>
          </div>
          {/* <div className="flex justify-center md:justify-start gap-9">
            <NumberTicker value={10} suffix="+" label="سال تجربه" />
            <NumberTicker value={500} suffix="+" label="پروژه" />
            <NumberTicker value={120} suffix="+" label="مشتری" />
            <NumberTicker value={98} suffix="٪" label="رضایت" />
          </div> */}
        </div>

        {/* <div className="relative aspect-square">
          <motion.div
            variants={cardSurface}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="absolute inset-x-[8%] flex top-[6%] h-[42%] w-[62%] rounded-xl bg-surface shadow-2xl"
          >
            <Image
              src={"/assets/images/hero-2.webp"}
              alt="اریا نقش"
              height={500}
              width={500}
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover object-top shadow rounded-xl"
            />
          </motion.div>
          <motion.div
            variants={cardAccent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="absolute flex inset-x-[4%] top-[34%] h-[38%] w-[52%] rounded-xl bg-accent shadow-2xl [inset-inline-end:4%] [inset-inline-start:auto]"
          >
            <Image
              src={"/assets/images/hero-1.webp"}
              alt="اریا نقش"
              height={500}
              width={500}
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover object-top shadow rounded-xl"
            />
          </motion.div>
          <motion.div
            variants={cardPaper}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="absolute flex bottom-[6%] h-[34%] w-[56%] rounded-xl  bg-paper shadow-xl [inset-inline-start:18%]"
          >
            <Image
              src={"/assets/images/hero-3.webp"}
              alt="اریا نقش"
              height={500}
              width={500}
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover object-top shadow rounded-xl"
            />
            </motion.div>
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
        </div> */}
      </div>
    </section>
  );
}