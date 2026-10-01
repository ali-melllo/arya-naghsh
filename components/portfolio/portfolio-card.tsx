import Link from "next/link";
import type { PortfolioItem } from "@/types";
import Image from "next/image";

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group block overflow-hidden relative rounded-xl border border-border "
    >
      <div className="relative md:aspect-[6/4] flex min-h-80 overflow-hidden ">
        {/* <div className="absolute start-4 top-4 h-1/3 w-1/3 border border-ink-soft/40 transition-transform duration-500 group-hover:scale-105" /> */}
        <Image
          src={item.image}
          alt="اریا نقش"
          height={500}
          width={500}
          sizes="(min-width: 1024px) 45vw, 90vw"
          className="object-cover size-full shadow rounded-t-xl"
        />
      </div>
      <div className="p-5 bg-gradient-to-t from-white/70 dark:from-black absolute bottom-0 w-full to-transparent">
        <p className="mb-1.5 text-xs font-bold px-2 rounded-xl py-1 w-20 text-center bg-accent text-white">{item.category}</p>
        <h3 className="mb-1 text-base font-bold">{item.title}</h3>
        <p className="text-sm text-gray-800 dark:text-ink-soft">{item.description}</p>
      </div>
    </Link>
  );
}
