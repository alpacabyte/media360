function WhoAreWe({ isMobile } = false) {
  return (
    <div
      className={
        "who-are-we" + (isMobile ? " who-are-we-mobile" : " who-are-we-desktop")
      }
    >
      <h2 className="title">Biz Kimiz?</h2>
      <p className="description">
        Markalarımız için yenilikçi deneyimler yaratıyoruz. Veri ve teknoloji
        odaklı yaklaşımımızla değişen sektörde daima ileriye bakıyoruz.
        Çeşitlilikten güç alarak her projeye farklı bir perspektifle yaklaşıyor,
        markalarımızın işlerine gerçek bir fark yaratan çözümler sunuyoruz.
        Hedefleri aşmak için sürekli daha iyisini hedefliyoruz.
      </p>
      <button className="primary-button">Daha Fazlası</button>
    </div>
  );
}

export default WhoAreWe;
