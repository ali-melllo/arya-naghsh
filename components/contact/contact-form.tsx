"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const schema = z.object({
  fullName: z.string().min(2, "لطفاً نام خود را وارد کنید."),
  phone: z
    .string()
    .regex(/^0\d{10}$/, "شماره تماس واردشده معتبر نیست."),
  email: z.string().email("ایمیل واردشده معتبر نیست."),
  serviceType: z.string().min(1, "لطفاً نوع خدمات را انتخاب کنید."),
  quantity: z.string().optional(),
  description: z.string().min(10, "لطفاً توضیحات پروژه را کامل‌تر بنویسید."),
});

type FormValues = z.infer<typeof schema>;

const serviceOptions = [
  "چاپ افست",
  "چاپ دیجیتال",
  "بسته‌بندی",
  "کارت ویزیت و بروشور",
  "کاتالوگ و مجله",
  "چاپ اختصاصی",
];

// Mock submission layer — replace with a real API route (e.g. app/api/contact/route.ts) later.
async function submitContactForm(values: FormValues): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  console.log("mock submission", values);
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setStatus("submitting");
    try {
      await submitContactForm(values);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-border bg-surface p-8 text-center">
        <p className="font-bold">
          درخواست شما با موفقیت ثبت شد. کارشناسان ما به‌زودی با شما تماس خواهند گرفت.
        </p>
        <button className="mt-4 text-sm text-accent underline" onClick={() => setStatus("idle")}>
          ارسال درخواست دیگر
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <Field label="نام و نام خانوادگی" error={errors.fullName?.message}>
        <input {...register("fullName")} className="input" />
      </Field>
      <Field label="شماره تماس" error={errors.phone?.message}>
        <input {...register("phone")} className="input" placeholder="۰۹xxxxxxxxx" inputMode="numeric" />
      </Field>
      <Field label="ایمیل" error={errors.email?.message}>
        <input {...register("email")} className="input" type="email" />
      </Field>
      <Field label="نوع خدمات" error={errors.serviceType?.message}>
        <select {...register("serviceType")} className="input" defaultValue="">
          <option value="" disabled>
            یک گزینه را انتخاب کنید
          </option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </Field>
      <Field label="تیراژ تقریبی">
        <input {...register("quantity")} className="input" placeholder="مثلاً ۱۰۰۰ عدد" />
      </Field>
      <Field label="توضیحات پروژه" error={errors.description?.message}>
        <textarea {...register("description")} className="input min-h-[120px]" />
      </Field>

      {status === "error" && (
        <p className="text-sm text-accent">ارسال درخواست با خطا مواجه شد. لطفاً دوباره تلاش کنید.</p>
      )}

      <Button type="submit" disabled={status === "submitting"} className="w-full">
        {status === "submitting" ? "در حال ارسال..." : "ارسال درخواست"}
      </Button>

      <style jsx global>{`
        .input {
          width: 100%;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--paper));
          border-radius: 2px;
          padding: 0.65rem 0.9rem;
          font-size: 0.92rem;
          font-family: inherit;
        }
        .input:focus {
          outline: 2px solid hsl(var(--accent));
          outline-offset: 1px;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-accent">{error}</span>}
    </label>
  );
}
