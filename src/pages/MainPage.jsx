import "../App.css";
import ServicesGrid from "../components/ServicesGrid";
import HeaderNav from "../components/HeaderNav";
import VideoSection from "../components/VideoSection";
import LogoCarousel from "../components/LogoCarousel";
import { PARTNERS_LOGOS, REFERENCES_LOGOS } from "../utils/constants";
import AppFooter from "../components/AppFooter";

function MainPage() {
  return (
    <>
      <HeaderNav />
      <VideoSection />
      <div className="block">
        <div className="block-inside">
          <ServicesGrid />
          <LogoCarousel logos={PARTNERS_LOGOS} title={"Partnerlerimiz"} />
          <LogoCarousel logos={REFERENCES_LOGOS} title={"Referanslarımız"} />
        </div>
      </div>
      <AppFooter />
    </>
  );
}

export default MainPage;
