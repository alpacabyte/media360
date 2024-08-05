import { useEffect, useRef } from "react";

function LogoCarousel({ logos, title }) {
  const carouselRef = useRef(null);
  const carouselRef2 = useRef(null);

  useEffect(() => {
    const setAnimationDuration = (duration) => {
      carouselRef.current.style.animationDuration = `${duration}s`;
      carouselRef2.current.style.animationDuration = `${duration}s`;
    };

    if (carouselRef.current) {
      setTimeout(() => {
        const width = carouselRef.current.offsetWidth;
        const speed = 50;
        const duration = width / speed;
        setAnimationDuration(duration);
      }, 10);
    }
  }, []);

  return (
    <section>
      <h1 className="section-title">{title}</h1>
      <div className="carousel-container ">
        <div className="logo-carousel">
          <div className="logos-slide" ref={carouselRef}>
            {logos.map((src, index) => (
              <img key={index} src={src} alt={`Logo ${index + 1}`} />
            ))}
          </div>
          <div className="logos-slide" ref={carouselRef2}>
            {logos.map((src, index) => (
              <img key={index} src={src} alt={`Logo ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoCarousel;
