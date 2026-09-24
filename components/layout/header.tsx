"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun, LayoutGrid, Info, Phone, Newspaper, Home } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { mainNav, siteInfo } from "@/lib/data/nav";
import { cn } from "@/lib/utils";

const navIcons: Record<string, typeof LayoutGrid> = {
  "/portfolio": LayoutGrid,
  "/about": Info,
  "/contact": Phone,
  "/blog": Newspaper,
};

const panelVariants: Variants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { type: "spring", stiffness: 320, damping: 32 } },
  exit: { x: "100%", transition: { duration: 0.25, ease: "easeIn" } },
};

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 18 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
};

// Icon gets a small spring pop just after the row slides in, same motion
// language as the dot/number pops used across the homepage sections.
const iconPopVariants: Variants = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 18, delay: 0.08 },
  },
};

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setMenuOpen(false), [pathname]);

  // Lock body scroll while the sheet is open — otherwise the page behind
  // it keeps scrolling, the header's `scrolled` state keeps flipping, and
  // (now that the fixed-position bug above is fixed) you'd still get a
  // distracting header resize happening behind an open menu.
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 mx-auto w-full border py-4 px-5 md:px-10",
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1.03)]",
          "will-change-[max-width,padding,top,border-radius,background-color]",
          scrolled
            ? "md:top-px container rounded-b-xl md:rounded-xl shadow-2xl border-border bg-paper/85 backdrop-blur-md"
            : "top-0 max-w-full border-transparent"
        )}
      >
        <div className="mx-auto flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-extrabold tracking-tight">آریا نقش</span>
            <span className="text-ink-soft" style={{ fontSize: "0.72rem" }}>
              چاپ حرفه‌ای، با نقش ماندگار
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <ul className="flex gap-7">
              {mainNav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <li key={item.href} className="relative py-1">
                    <Link href={item.href} className="text-sm">
                      {item.label}
                    </Link>
                    {active && (
                      <motion.span
                        layoutId="active-nav-indicator"
                        className="absolute inset-x-0 -bottom-[1px] h-0.5 bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            {mounted && (
              <button
                aria-label="تغییر پوسته"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
              >
                {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}

            <Link
              href="/contact"
              className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
            >
              درخواست مشاوره
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            {mounted && (
              <button
                aria-label="تغییر پوسته"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
              >
                {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}
            <button
              aria-label="باز کردن منو"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/*
        Rendered as a SIBLING of <header>, not a child.
        `backdrop-blur-md` on the scrolled header applies `backdrop-filter`,
        which per spec creates a new containing block for `position: fixed`
        descendants (same as `transform` does). Nesting the fixed backdrop
        and panel inside that header meant they stopped being fixed to the
        viewport and got clipped to the header's own shrunken box instead —
        that was the "goes transparent on scroll" bug. Living outside the
        header entirely, they're always fixed to the real viewport.
      */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="منوی موبایل"
              className="fixed inset-y-0 start-0 z-[70] flex w-[85%] max-w-xs flex-col bg-paper shadow-2xl [border-inline-end:1px_solid_hsl(var(--border))]"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                paddingTop: "calc(env(safe-area-inset-top, 0px) + 1.25rem)",
                paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1.25rem)",
              }}
            >
              <div className="flex items-center justify-between px-6">
                <span className="text-lg font-extrabold tracking-tight">آریا نقش</span>
                <button
                  aria-label="بستن منو"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
                >
                  <X size={18} />
                </button>
              </div>

              <motion.ul
                className="mt-8 flex flex-1 flex-col gap-1.5 px-4"
                variants={listVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.li variants={itemVariants}>
                  <Link
                    href="/"
                    className="flex items-center gap-3.5 rounded-lg px-3 py-3 text-[0.95rem] font-medium hover:bg-surface"
                  >
                    <motion.span variants={iconPopVariants} className="flex text-ink-soft">
                      <Home size={19} />
                    </motion.span>
                    صفحه اصلی
                  </Link>
                </motion.li>
                {mainNav.map((item) => {
                  const active = pathname === item.href || pathname.startsWith(item.href + "/");
                  const Icon = navIcons[item.href] ?? LayoutGrid;
                  return (
                    <motion.li key={item.href} variants={itemVariants}>
                      <Link
                        href={item.href}
                        className={cn(
                          "relative flex items-center gap-3.5 rounded-lg px-3 py-3 text-[0.95rem] font-medium",
                          active ? "bg-accent/10 text-accent" : "hover:bg-surface"
                        )}
                      >
                        {active && (
                          <span className="absolute inset-y-1 end-1.5 w-1 rounded-full bg-accent" />
                        )}
                        <motion.span
                          variants={iconPopVariants}
                          className={cn("flex", active ? "text-accent" : "text-ink-soft")}
                        >
                          <Icon size={19} />
                        </motion.span>
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>

              <motion.div variants={itemVariants} className="mt-auto space-y-4 px-6 pt-4">
                <div className="border-t border-border pt-4 text-xs text-ink-soft">
                  <div className="mb-1 flex items-center gap-2">
                    <Phone size={13} />
                    <span dir="ltr">{siteInfo.phone}</span>
                  </div>
                  <div>{siteInfo.hours}</div>
                </div>
                <Link
                  href="/contact"
                  className="block rounded-xl bg-accent px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  درخواست مشاوره
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}