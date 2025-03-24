import meter1 from "../assets/img/salud.png";
import meter2 from "../assets/img/whatsapp.webp";
import meter3 from "../assets/img/facebook.webp";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp-green.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Contacto y Apoyo</h2>

              {/* Sección de contacto de ayuda */}
              <div style={{ textAlign: "left", marginBottom: "2rem" }}>
                <h5>📞 Contacto de Ayuda</h5>
                <p><strong>Línea de apoyo:</strong> +57 350 4553767</p>
                <p><strong>Correo:</strong> estudialibrededrogas@gmail.com</p>
                <p><strong>Centro de orientación:</strong> Av Boyacá 52-00, Bogotá</p>
              </div>

              {/* Sección de respaldo */}
              <div style={{ textAlign: "left", marginBottom: "2rem" }}>
                <h5>🔐 Información de Respaldo</h5>
                <p><strong>CAI Normandía:</strong> 3213663562</p>
                <p><strong>Correo:</strong> mebog.e10@policia.gov.co</p>
                <p><strong>Dirección:</strong> Av. Boyacá con Calle 52-00</p>
                <p><strong>Estación:</strong> Estación de Policía Engativá</p>
                <p><strong>WhatsApp:</strong> +57 350 455 3767</p>
                <p><strong>Más información:</strong> Línea 106</p>
              </div>

              {/* Carousel visual */}
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Salud" />
                  <h5>Salud: 3007548933</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="WhatsApp" />
                  <h5>WhatsApp: 3102499513</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Facebook" />
                  <h5>Facebook: Policía Nacional</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Fondo" />
    </section>
  );
};
