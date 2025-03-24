import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/111222.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { db } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

export const Contact = () => {
  const [mensaje, setMensaje] = useState("");
  const [contacto, setContacto] = useState("");
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const enviarMensaje = async () => {
    if (mensaje.trim() && contacto.trim()) {
      await addDoc(collection(db, "mensajes"), {
        texto: mensaje,
        contacto: contacto,
        timestamp: serverTimestamp()
      });
      setMensaje("");
      setContacto("");
      setMensajeEnviado(true);

      setTimeout(() => {
        setMensajeEnviado(false);
      }, 3000);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn contact-form" : "contact-form"}>
              <h2>Mensajería anónima</h2>
              <input
                type="text"
                value={mensaje}
                onChange={e => setMensaje(e.target.value)}
                placeholder="Escribe tu mensaje anónimo..."
              />
              <input
                type="text"
                value={contacto}
                onChange={e => setContacto(e.target.value)}
                placeholder="¿Dónde deseas ser contactado?"
              />
              <button onClick={enviarMensaje}>
                Enviar
              </button>
            
              {mensajeEnviado && (
                <div className="alert-success">
                  ✅ Tu mensaje ha sido enviado con éxito.
                </div>
              )}
            </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
