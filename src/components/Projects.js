import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

// Importar imágenes específicas para cada sección
import projImg1 from "../assets/img/1.webp";
import projImg2 from "../assets/img/2.webp";
import projImg3 from "../assets/img/3.webp";
import projImg4 from "../assets/img/4.webp";
import projImg5 from "../assets/img/5.webp";
import projImg6 from "../assets/img/6.webp";

// Imágenes exclusivas para "Prevención"
import prevImg11 from "../assets/img/11.webp";
import prevImg22 from "../assets/img/22.webp";
import prevImg33 from "../assets/img/33.webp";
import prevImg44 from "../assets/img/44.webp";
import prevImg55 from "../assets/img/55.webp";
import prevImg66 from "../assets/img/66.webp";

// Imágenes exclusivas para "Consecuencias"
import consImg111 from "../assets/img/111.webp";
import consImg222 from "../assets/img/222.webp";
import consImg333 from "../assets/img/333.webp";
import consImg444 from "../assets/img/444.webp";
import consImg555 from "../assets/img/555.webp";
import consImg666 from "../assets/img/666.webp";

import colorSharp2 from "../assets/img/color-sharp2-green.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Depresores del Sistema Nervioso Central 💤",
      description: "Disminuyen la actividad cerebral, generando sedación o somnolencia. Pueden llevar a la pérdida de conciencia en dosis altas. Ejemplos: Heroína, morfina, alcohol.",
      imgUrl: projImg1,
    },
    {
      title: "Estimulantes del Sistema Nervioso Central ⚡",
      description: "Aceleran el sistema nervioso, produciendo euforia y energía. Su abuso puede causar paranoia y problemas cardíacos. Ejemplos: Cocaína, anfetaminas.",
      imgUrl: projImg2,
    },
    {
      title: "Alucinógenos 🌈",
      description: "Alteran la percepción de la realidad provocando alucinaciones visuales o auditivas. Ejemplos: LSD, hongos alucinógenos.",
      imgUrl: projImg3,
    },
    {
      title: "Cannabinoides 🌿",
      description: "Afectan la percepción, la coordinación y el estado de ánimo. Pueden ser sedantes o eufóricos. Ejemplos: Marihuana, K2.",
      imgUrl: projImg4,
    },
    {
      title: "Drogas de Síntesis 🧪",
      description: "Sustancias fabricadas en laboratorio que imitan otras drogas. Peligrosas por su composición química variable. Ejemplos: Éxtasis, 2C-B, ketamina.",
      imgUrl: projImg5,
    },
    {
      title: "Inhalantes 💨",
      description: "Vapores de productos químicos que provocan efectos psicoactivos inmediatos pero breves. Altamente tóxicos. Ejemplos: Pegamento, gasolina.",
      imgUrl: projImg6,
    },
  ];

  const prevention = [
    {
      title: "Educación temprana 📚",
      description: "Informar desde edades tempranas sobre los riesgos físicos, emocionales y sociales del consumo ayuda a formar conciencia y prevenir la adicción.",
      imgUrl: prevImg11,
    },
    {
      title: "Apoyo familiar 👨‍👩‍👧",
      description: "Una familia unida que dialoga abiertamente brinda protección emocional. La confianza y el afecto son claves para prevenir el consumo.",
      imgUrl: prevImg22,
    },
    {
      title: "Actividades recreativas 🎨",
      description: "El arte, el deporte y otras actividades positivas fomentan el bienestar, reducen el estrés y ofrecen alternativas al consumo.",
      imgUrl: prevImg33,
    },
    {
      title: "Supervisión escolar 🏫",
      description: "Detectar señales de riesgo en entornos educativos y brindar acompañamiento contribuye a la prevención y al bienestar estudiantil.",
      imgUrl: prevImg44,
    },
    {
      title: "Estrategias comunitarias 🤝",
      description: "Las redes de apoyo vecinal, talleres y programas comunitarios fortalecen la contención social y alejan del entorno del consumo.",
      imgUrl: prevImg55,
    },
    {
      title: "Normas claras 🚦",
      description: "Reglas familiares, escolares y políticas públicas bien definidas ayudan a establecer límites claros y prevenir el uso de sustancias.",
      imgUrl: prevImg66,
    },
  ];

  const consequences = [
    {
      title: "Problemas de salud 🏥",
      description: "El consumo prolongado puede dañar órganos vitales como el corazón, los pulmones y el hígado, y debilitar el sistema inmunológico.",
      imgUrl: consImg111,
    },
    {
      title: "Adicción 💔",
      description: "La dependencia física o psicológica a las drogas limita la autonomía y genera un ciclo destructivo difícil de romper sin ayuda profesional.",
      imgUrl: consImg222,
    },
    {
      title: "Deterioro mental 🧠",
      description: "El uso de sustancias psicoactivas altera las funciones cerebrales, provocando ansiedad, psicosis, depresión y otros trastornos mentales graves.",
      imgUrl: consImg333,
    },
    {
      title: "Problemas legales ⚖️",
      description: "El consumo o tenencia de drogas puede conllevar arrestos, antecedentes penales y restricciones sociales y laborales.",
      imgUrl: consImg444,
    },
    {
      title: "Impacto en la familia 👨‍👩‍👧‍👦",
      description: "El consumo puede causar conflictos familiares, pérdida de confianza, rupturas afectivas y un entorno emocionalmente inestable.",
      imgUrl: consImg555,
    },
    {
      title: "Reducción del rendimiento 🚨",
      description: "Disminuye la concentración, la motivación y el desempeño académico o laboral, afectando metas personales y profesionales.",
      imgUrl: consImg666,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>¿Qué son las sustancias psicoactivas?</h2>
                  <p>
                    Son sustancias que alteran el funcionamiento del sistema nervioso central, afectando el comportamiento, la percepción y la conciencia. Aunque algunas tienen usos médicos controlados, su uso indebido puede generar graves consecuencias físicas, mentales y sociales.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tipos de sustancias psicoactivas</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Prevención</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Consecuencias</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <h3>¿Cuáles son los tipos de sustancias psicoactivas?</h3>
                        <p>Existen diferentes tipos de sustancias psicoactivas, y cada uno actúa de forma distinta sobre el cuerpo y la mente. Conocer sus efectos, riesgos y ejemplos es fundamental para comprender su impacto y evitar su consumo irresponsable.</p>
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <h3>¿Cómo prevenir el consumo?</h3>
                        <p>La prevención inicia con la educación, el acompañamiento familiar y el fortalecimiento del entorno social. Las actividades recreativas, el control escolar y las normas claras también son esenciales.</p>
                        <Row>
                          {prevention.map((item, index) => (
                            <ProjectCard key={index} {...item} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <h3>Consecuencias del consumo</h3>
                        <p>El uso indebido de sustancias psicoactivas puede causar daños irreversibles en la salud física y mental, además de afectar la vida familiar, social y profesional.</p>
                        <Row>
                          {consequences.map((item, index) => (
                            <ProjectCard key={index} {...item} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Decoración de fondo" />
    </section>
  );
};
