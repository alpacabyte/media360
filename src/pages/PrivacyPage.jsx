import "../App.css";
import ServicesGrid from "../components/ServicesGrid";
import HeaderNav from "../components/HeaderNav";
import VideoSection from "../components/VideoSection";
import LogoCarousel from "../components/LogoCarousel";
import { PARTNERS_LOGOS, REFERENCES_LOGOS } from "../utils/constants";
import AppFooter from "../components/AppFooter";

function PrivacyPage() {
  return (
    <>
      <HeaderNav hasBackground />
      <div
        style={{ paddingTop: "150px", paddingBottom: "20px" }}
        className="block"
      >
        <div className="block-inside">
          <Media360PrivacyPolicy />
        </div>
      </div>
      <AppFooter />
    </>
  );
}

import React from "react";

const Media360PrivacyPolicy = () => {
  const containerStyle = {
    padding: "20px",
    backgroundColor: "#ffffff",
    color: "#333333",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const listStyle = {
    listStyleType: "decimal",
    paddingLeft: "20px",
  };

  const listItemStyle = {
    marginBottom: "15px",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Gizlilik Politikası</h2>
      <ol style={listStyle}>
        <li style={listItemStyle}>
          <strong>Amaç ve Kapsam:</strong> 6698 Sayılı KVKK kapsamında, kişisel
          verilerinizin korunması için gerekli tüm teknik ve idari tedbirler
          alınmıştır.
        </li>
        <li style={listItemStyle}>
          <strong>Verilerin İşlenme İlkeleri:</strong> Hukuka uygunluk,
          dürüstlük, amaçla sınırlılık, ölçülülük, doğruluk ve güncellik
          prensiplerine göre veri işlenmektedir.
        </li>
        <li style={listItemStyle}>
          <strong>Verilerin Toplanması ve Kullanım Amacı:</strong> Güvenliğin
          sağlanması, eksiksiz hizmet sunumu, ticari faaliyetlerin yürütülmesi,
          sorunların hızlıca çözülmesi ve kalitenin artırılması amaçlanmaktadır.
        </li>
        <li style={listItemStyle}>
          <strong>Verilerin Güncelliği ve Doğruluğu:</strong> Toplanan verilerin
          doğru, eksiksiz ve gerektiğinde güncellenmesine özen gösterilmektedir.
        </li>
        <li style={listItemStyle}>
          <strong>Verilerin Silinmesi ve Anonimleştirilmesi:</strong> Kanuni
          saklama süreleri dolduğunda veriler silinmekte, yok edilmekte veya
          anonim hale getirilmektedir.
        </li>
        <li style={listItemStyle}>
          <strong>Veri Güvenliği ve Gizliliği:</strong> Yetkisiz erişim ve
          kullanımlara karşı yüksek güvenlik standartları ve güncel teknik
          tedbirler uygulanmaktadır.
        </li>
        <li style={listItemStyle}>
          <strong>Reklam ve Elektronik İletişim:</strong> Reklam amaçlı
          elektronik iletiler, alıcının önceden onayı alınarak gönderilmektedir.
        </li>
        <li style={listItemStyle}>
          <strong>Çalışan Verilerinin İşlenmesi:</strong> Çalışanlara ait
          veriler, iş ilişkisi ve yasal yükümlülükler çerçevesinde, özel
          hassasiyetle işlenmektedir.
        </li>
        <li style={listItemStyle}>
          <strong>Veri Paylaşımı:</strong> Hizmetin ifası ve ticari faaliyetler
          için gerekli ölçüde, yasal sınırlar içinde iş ortakları ve
          tedarikçilerle veri paylaşımı yapılmaktadır.
        </li>
        <li style={listItemStyle}>
          <strong>Veri İhlalleri ve Başvuru Hakları:</strong> Herhangi bir veri
          ihlali durumunda derhal müdahale edilmekte; veri sahipleri, bilgi
          talep etme, düzeltme, silme ve itiraz haklarını kullanabilmektedir.
        </li>
      </ol>
    </div>
  );
};

export default PrivacyPage;
