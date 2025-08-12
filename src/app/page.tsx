import { Footer } from "@/components/landing/layouts/Footer";
import { About } from "@/components/landing/layouts/About";
import Hero from "@/components/landing/layouts/Hero";
import Services from "@/components/landing/layouts/Services";
import LandingHeader from "@/components/landing/navigation/header";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Footer />
      </main>
    </>
  )
}