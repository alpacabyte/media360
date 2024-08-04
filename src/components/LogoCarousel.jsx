function LogoCarousel({ logos, title }) {
  return (
    <section>
      <h1 className="section-title">{title}</h1>
      <div className="carousel-container ">
        <div className="logo-carousel">
          <div className="logos-slide">
            {logos.map((src, index) => (
              <img key={index} src={src} alt={`Logo ${index + 1}`} />
            ))}
          </div>
          <div className="logos-slide">
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
