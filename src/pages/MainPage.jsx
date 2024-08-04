import "../App.css";
import React, { useEffect } from "react";
import ServicesGrid from "../components/ServicesGrid";
import HeaderNav from "../components/HeaderNav";
import VideoSection from "../components/VideoSection";

function MainPage() {
  return (
    <>
      <HeaderNav />
      <VideoSection />
      <section className="block">
        <ServicesGrid />
      </section>
    </>
  );
}

export default MainPage;
