import React from "react";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Feature from "@/components/feature";
import AiInsights from "@/components/AiInsights";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <AiInsights />
      <Cta />
      <Footer />
    </>
  );
};

export default page;
