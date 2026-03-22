import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import UseCases from "@/components/UseCases";
import Steps from "@/components/Steps";
import CTABanner from "@/components/CTABanner";
import Security from "@/components/Security";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <UseCases />
        <Steps />
        <CTABanner />
        <Security />
        <Testimonials />
        <Pricing />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
