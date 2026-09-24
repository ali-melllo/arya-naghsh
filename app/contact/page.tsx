import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: "تماس با ما",
  description: "برای دریافت مشاوره، استعلام قیمت یا شروع یک پروژه جدید با آریا نقش در تماس باشید.",
};

export default function ContactPage() {
  return (
    <div className="container py-14">
      <div className="mb-11 max-w-xl">
        <h1 className="mb-3 text-3xl font-extrabold tracking-tight">بیایید درباره پروژه شما صحبت کنیم.</h1>
        <p className="text-ink-soft">
          برای دریافت مشاوره، استعلام قیمت یا شروع یک پروژه جدید با ما در تماس باشید.
        </p>
      </div>
      <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}
