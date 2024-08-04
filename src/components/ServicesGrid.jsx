import { useEffect, useState } from "react";
import ServiceTile from "./ServiceTile";
import { SERVICE_DATA } from "../utils/constants";
import WhoAreWe from "./WhoAreWe";

function ServicesGrid() {
  const [offset, setOffset] = useState(0);
  const [shouldUseOffset, setShouldUseOffset] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 700) {
        setOffset(window.scrollY);
        setShouldUseOffset(true);
      } else {
        setShouldUseOffset(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const midpoint = Math.ceil(SERVICE_DATA.length / 2);
  const leftColumnData = SERVICE_DATA.slice(0, midpoint);
  const rightColumnData = SERVICE_DATA.slice(midpoint);

  return (
    <>
      <WhoAreWe isMobile={true} />
      <h1 className="title">Ne Yapıyoruz?</h1>
      <div className="services-grid">
        <div className="services-column">
          {leftColumnData.map((service, index) => (
            <ServiceTile
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <div
          className="services-column"
          style={{
            transform: shouldUseOffset
              ? `translateY(${offset * 0.1 * -1 + 150}px)`
              : "",
            willChange: "transform",
          }}
        >
          {rightColumnData.map((service, index) => (
            <ServiceTile
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ServicesGrid;
