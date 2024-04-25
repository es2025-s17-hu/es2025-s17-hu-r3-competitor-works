import React from "react";
import Header from "../../components/layout/Header";
import Hero from "./Hero";
import Number from "./Number";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Footer from "../../components/layout/Footer";

/**
 * Component for displaying the index page
 */
const IndexPage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Number />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
};

export default IndexPage;
