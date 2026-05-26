import Navbar from "@/components/preview/Navbar";
import Hero from "@/components/preview/Hero";
import Services from "@/components/preview/Services";
import Markets from "@/components/preview/Markets";
import WhyUs from "@/components/preview/WhyUs";
import Testimonials from "@/components/preview/Testimonials";
import Pricing from "@/components/preview/Pricing";
import FAQ from "@/components/preview/FAQ";
import ContactForm from "@/components/preview/ContactForm";
import Footer from "@/components/preview/Footer";

export default function PreviewPage() {
  return (
    <div className="bg-[#07090F]">
      <div className="fixed top-0 inset-x-0 z-[60] bg-[#C9A84C] text-[#07090F] text-center text-xs font-bold py-2 tracking-wide">
        Vista previa — Nuevo diseño ·{" "}
        <a href="/" className="underline ml-1 hover:opacity-80">
          Ver sitio actual →
        </a>
      </div>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Markets />
        <WhyUs />
        <Testimonials />
        <Pricing />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
