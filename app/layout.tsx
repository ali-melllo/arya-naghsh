import type { Metadata } from "next";
import { vazirmatn } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NavigationProgress } from "@/components/layout/navigation-progress";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.ir"),
  title: {
    default: "آریا نقش | چاپ حرفه‌ای و خدمات چاپ",
    template: "%s | آریا نقش",
  },
  description:
    "آریا نقش؛ ارائه‌دهنده خدمات چاپ حرفه‌ای، چاپ افست و دیجیتال، بسته‌بندی، کارت ویزیت، بروشور و خدمات چاپ اختصاصی.",
  openGraph: {
    title: "آریا نقش | چاپ حرفه‌ای و خدمات چاپ",
    description:
      "آریا نقش؛ ارائه‌دهنده خدمات چاپ حرفه‌ای، چاپ افست و دیجیتال، بسته‌بندی، کارت ویزیت، بروشور و خدمات چاپ اختصاصی.",
    locale: "fa_IR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "آریا نقش",
  description: "چاپخانه حرفه‌ای؛ چاپ افست، دیجیتال، بسته‌بندی و اقلام تبلیغاتی.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "خیابان نمونه، پلاک ۱۲۳",
    addressLocality: "تهران",
    addressCountry: "IR",
  },
  telephone: "۰۲۱-۱۲۳۴۵۶۷۸",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable} suppressHydrationWarning>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <NavigationProgress />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
