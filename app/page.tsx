import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Statistics } from "@/components/home/statistics";
import { TrustedCompanies } from "@/components/home/trusted-companies";
import { PortfolioPreview } from "@/components/home/portfolio-preview";
import { Process } from "@/components/home/process";
import { WhyUs } from "@/components/home/why-us";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCta } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <div className="container md:border-x-2 md:border-dashed">
        <Hero />
        <Services />
        <Statistics />
        <TrustedCompanies />
        <PortfolioPreview />
        <Process />
        <WhyUs />
        <Testimonials />
        <FinalCta />
      </div>
    </>
  );
}
