import React from "react";
//= Page components
import Loading from "@/components/Common/Loader";
import Navbar from "@/components/Mobile-app/Navbar";
import Header from "@/components/Mobile-app/AltHeader";
import Pricing from "@/components/Mobile-app/Pricing2";
import DownloadApp from "@/components/Mobile-app/DownloadApp";
import FAQ from "@/components/Mobile-app/FAQ";
import Footer from "@/components/Mobile-app/Footer";

export const metadata = {
  title: "Shopcek - Pricing Dark",
};

export default function PricingPage() {
  const headerData = {
    title: "Pricing Package",
    page: "Pricing",
  };

  return (
    <>
      <Loading />
      <Navbar />
      <Header headerData={headerData} />
      <Pricing />
      <DownloadApp />
      <FAQ />
      <Footer />
    </>
  );
}
