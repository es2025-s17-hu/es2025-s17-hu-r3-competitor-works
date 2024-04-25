import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Numbers from "./sections/Numbers";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Numbers />
      <Features />
      <Testimonials />
      <Pricing />

      <Footer />
    </>
  );
}
