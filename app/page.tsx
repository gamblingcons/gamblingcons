import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import Process from "@/components/landing/Process";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
